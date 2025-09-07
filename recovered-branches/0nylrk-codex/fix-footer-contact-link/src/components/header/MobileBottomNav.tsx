import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
interface MobileBottomNavProps {
  unreadCount?: number
}

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
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
    <nav className = $2;
              item.matches(location.pathname)
                ? "text-zion-cyan"
                : "text-white/70 hover:text-white"
            )}
          >
            <div className="relative">
              <item.icon className="h-5 w-5 mb-1" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
