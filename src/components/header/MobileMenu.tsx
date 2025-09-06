import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { useTranslation } from 'react-i18next';
export interface MobileMenuProps {
  unreadCount?: number,
  onClose: () => void,
  openLoginModal: (returnToPath: string) => void, // Added from plan
}

// Define protected routes - consistent with ResponsiveNavigation.tsx and middleware.ts
// These are routes that should trigger the login modal if accessed while unauthenticated.
const protectedRoutes = [
  '/categories/talent/equipment/partners/tutorials/case-studies/post-job', // Already marked as authRequired, but good to be explicit if used elsewhere
  '/messages',  // Already marked as authRequired
  '/dashboard', // Already marked as authRequired
  // Add any specific sub-routes if necessary
],

function isProtectedRoute(href: string): boolean {
  // Also check against the item's own authRequired flag if present
  return protectedRoutes.some(route => href.startsWith(route))
}

export function MobileMenu({ unreadCount = 0, onClose, openLoginModal }: MobileMenuProps) {
  const router = useRouter($2);
  const { user } = useAuth($2);
  const isAuthenticated = $2;
  const { t } = useTranslation($2);
  const baseItems = $2;
      href: '/',
      icon: Home,
      matches: (path: string) => path = $2;
    {
      key: 'explore',
      href: '/talent',
      icon: Search,
      matches: (path: string) =>
        path.startsWith('/talent') ||
        path.startsWith('/categories') ||
        path.startsWith('/marketplace')},
    {
      key: 'community',
      href: '/community',
      icon: MessageCircle,
      matches: (path: string) =>
        path.startsWith('/community') || path.startsWith('/forum')},
    {
      key: 'post_job',
      href: '/post-job',
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith($2);
      authRequired: true},
    {
      key: 'messages',
      href: '/messages',
      icon: MessageSquare,
      matches: (path: string) =>
        path.startsWith('/messages') || path.startsWith($2);
      badge: unreadCount,
      authRequired: true},
    {
      key: 'dashboard',
      href: '/dashboard',
      icon: User,
      matches: (path: string) => path.startsWith($2);
      authRequired: true}],

  const navItems = $2;
    name: item.key = $2;
  // Filter items based on auth status
  const visibleItems = $2;
  ),

  return (
    <div className = $2;
              item.matches(router.pathname)
                ? 'bg-primary/20 text-primary border-l-4 border-primary'
                : 'text-foreground hover:bg-primary/10 hover:text-primary',
            )}
            onClick={(e) => {
              const routeIsProtected = item.authRequired || isProtectedRoute($2);
              if (!isAuthenticated && routeIsProtected) {
                e.preventDefault($2);
                // Update URL to include returnTo, then open modal
                router.push($2);
                openLoginModal($2);
                // It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility.
                // Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay.
              }
              onClose(), // Close mobile menu on any click
            }}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-6 px-6">
        <ModeToggle />
      </div>
    </div>
  )
}
