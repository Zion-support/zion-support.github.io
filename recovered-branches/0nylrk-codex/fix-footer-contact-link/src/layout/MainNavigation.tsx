
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare } from "lucide-react",
=======
import { Link, useLocation } from &quot;react-router-dom&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { MessageSquare } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MainNavigationProps {
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  const location = useLocation(),
  
  const links = [
    {
      name: &quot;Home&quot;,
      href: &quot;/&quot;,
      matches: (path: string) => path === &quot;/&quot;
    },
    {
      name: &quot;Marketplace&quot;,
      href: &quot;/marketplace&quot;,
      matches: (path: string) => path.startsWith(&quot;/marketplace&quot;)
    },
    {
      name: &quot;Categories&quot;,
      href: &quot;/categories&quot;,
      matches: (path: string) => path.startsWith(&quot;/categories&quot;)
    },
    {
      name: &quot;Talent&quot;,
      href: &quot;/talent&quot;,
      matches: (path: string) => path.startsWith(&quot;/talent&quot;) && !path.includes(&quot;/talent-dashboard&quot;)
    },
    {
      name: &quot;Equipment&quot;,
      href: &quot;/equipment&quot;,
      matches: (path: string) => path.startsWith(&quot;/equipment&quot;)
    },
    {
      name: &quot;Community&quot;,
      href: &quot;/community&quot;,
      matches: (path: string) => path.startsWith(&quot;/community&quot;) || path.startsWith(&quot;/forum&quot;)
    }
  ],
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
<<<<<<< HEAD
      name: "Dashboard",
      href: "/dashboard",
      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard"
    })
=======
      name: &quot;Dashboard&quot;,
      href: &quot;/dashboard&quot;,
      matches: (path: string) => path === &quot;/dashboard&quot; || path === &quot;/client-dashboard&quot; || path === &quot;/talent-dashboard&quot;
    });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
<<<<<<< HEAD
      name: "Analytics",
      href: "/analytics",
      matches: (path: string) => path.startsWith("/analytics")
    })
=======
      name: &quot;Analytics&quot;,
      href: &quot;/analytics&quot;,
      matches: (path: string) => path.startsWith(&quot;/analytics&quot;)
    });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  
  return (
    <nav className={cn(&quot;ml-6 hidden md:flex&quot;, className)}>
      <ul className=&quot;flex items-center gap-1&quot;>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
                &quot;inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors&quot;,
                link.matches(location.pathname)
                  ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                  : &quot;text-white hover:bg-zion-purple/10 hover:text-zion-cyan&quot;
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
              to=&quot;/messages&quot;
              className={cn(
                &quot;inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative&quot;,
                location.pathname === &quot;/messages&quot; || location.pathname === &quot;/inbox&quot;
                  ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                  : &quot;text-white hover:bg-zion-purple/10 hover:text-zion-cyan&quot;
              )}
            >
              <MessageSquare className=&quot;w-4 h-4 mr-1&quot; />
              Messages
              {unreadCount > 0 && (
                <span className=&quot;absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center&quot;>
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
