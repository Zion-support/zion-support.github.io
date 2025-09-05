import Link from 'next/link';

export interface MobileMenuProps {_unreadCount?: number;
  onClose: () => void;
  openLoginModal: (_returnToPath: string) => void; // Added from plan}

// Define protected routes - consistent with ResponsiveNavigation.tsx and middleware.ts
// These are routes that should trigger the login modal if accessed while unauthenticated.
const _protectedRoutes = [
  '/categories',
  '/talent',
  '/equipment',
  '/partners',
  '/tutorials',
  '/case-studies',
  '/post-job', // Already marked as authRequired, but good to be explicit if used elsewhere
  '/messages',  // Already marked as authRequired
  '/dashboard', // Already marked as authRequired
  // Add any specific sub-routes if necessary
];

function isProtectedRoute(_href: string): boolean {_// Also check against the item's own authRequired flag if present
  return protectedRoutes.some(route => href.startsWith(route));}

export function MobileMenu(_{_unreadCount = 0, _onClose, _openLoginModal}: MobileMenuProps) {_const _router = useRouter();
  const { user} = useAuth();
  const _isAuthenticated = !!user;
  const {_t} = useTranslation();

  const _baseItems = [
    {_key: 'home', _href: '/', _icon: Home, _matches: (_path: string) => path === '/'},
    {_key: 'explore', _href: '/talent', _icon: Search, _matches: (_path: string) =>
        path.startsWith('/talent') ||
        path.startsWith('/categories') ||
        path.startsWith('/marketplace')},
    {_key: 'community', _href: '/community', _icon: MessageCircle, _matches: (_path: string) =>
        path.startsWith('/community') || path.startsWith('/forum')},
    {_key: 'post_job', _href: '/post-job', _icon: BriefcaseIcon, _matches: (_path: string) => path.startsWith('/post-job'), _authRequired: true},
    {_key: 'messages', _href: '/messages', _icon: MessageSquare, _matches: (_path: string) =>
        path.startsWith('/messages') || path.startsWith('/inbox'), _badge: unreadCount, _authRequired: true},
    {_key: 'dashboard', _href: '/dashboard', _icon: User, _matches: (_path: string) => path.startsWith('/dashboard'), _authRequired: true}];

  const _navItems = baseItems.map(_(item) => ({_...item, _name: item.key === 'explore' ? t('general.explore') : t(`nav.${item.key}`)}));

  // Filter items based on auth status
  const _visibleItems = navItems.filter(_(item) => !item.authRequired || (item.authRequired && isAuthenticated),
  );

  return (_<div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold text-foreground">Menu</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={_onClose}
          aria-label="Close menu"
          title="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="space-y-1">
        {_visibleItems.map((item) => (
          <Link
            key={item.name}
            href={_item.href}
            aria-label={_item.name}
            className={_cn(
              'flex items-center px-6 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary', _item.matches(router.pathname)
                ? 'bg-primary/20 text-primary border-l-4 border-primary'
                : 'text-foreground hover:bg-primary/10 hover:text-primary', _)}
            onClick={_(_e) => {
              const _routeIsProtected = item.authRequired || isProtectedRoute(item.href);
              if (!isAuthenticated && routeIsProtected) {
                e.preventDefault();
                // Update window.URL to include returnTo, _then open modal
                router.push({ pathname: '/auth/login', _query: { returnTo: item.href} }, undefined, {_shallow: true});
                openLoginModal(item.href);
                // It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility.
                // Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay.
              }
              onClose(); // Close mobile menu on any click
            }}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {_item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {_item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-6 px-6">
        <ModeToggle />
      </div>
    </div>
  );
}
