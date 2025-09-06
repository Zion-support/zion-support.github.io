
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
interface MainNavigationProps {
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth($2);
  const isAuthenticated = $2;
  const location = useLocation($2);
  const links = $2;
      href: "/",
      matches: (path: string) => path = $2;
    {
      name: "Marketplace",
      href: "/marketplace",
      matches: (path: string) => path.startsWith("/marketplace")
    },
    {
      name: "Categories",
      href: "/categories",
      matches: (path: string) => path.startsWith("/categories")
    },
    {
      name: "Talent",
      href: "/talent",
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")
    },
    {
      name: "Equipment",
      href: "/equipment",
      matches: (path: string) => path.startsWith("/equipment")
    },
    {
      name: "Community",
      href: "/community",
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")
    }
  ],
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      name: "Dashboard",
      href: "/dashboard",
      matches: (path: string) => path = $2;
      href: "/analytics",
      matches: (path: string) => path.startsWith("/analytics")
    })
  }
  
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>
      <ul className = $2;
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
        
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to = $2;
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
