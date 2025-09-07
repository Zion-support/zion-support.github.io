import { Link } from "react-router-dom",
import { useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
export interface MobileMenuProps {
  unreadCount?: number,
  onClose: () => void
}

export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {
  const location = useLocation($2);
  const { user } = useAuth($2);
  const isAuthenticated = $2;
  const navItems = $2;
      href: "/",
      icon: Home,
      matches: (path: string) => path = $2;
    {
      name: "Browse"
      href: "/talent"
      icon: Search
      matches: (path: string) => path.startsWith("/talent") |path.startsWith("/categories") |path.startsWith("/marketplace")
    }
    {
      name: "Community"
      href: "/community"
      icon: MessageCircle
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }
    {
      name: "Post Job",
      href: "/post-job",
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith($2);
      authRequired: true},
    {
      name: "Messages",
      href: "/messages",
      icon: MessageSquare,
      matches: (path: string) => path.startsWith("/messages") || path.startsWith($2);
      badge: unreadCount,
      authRequired: true},
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
      matches: (path: string) => path.startsWith($2);
      authRequired: true}
  ],

  // Filter items based on auth status
  const visibleItems = $2;
  return (
    <div className = $2;
              item.matches(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
            onClick={onClose}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
}
;