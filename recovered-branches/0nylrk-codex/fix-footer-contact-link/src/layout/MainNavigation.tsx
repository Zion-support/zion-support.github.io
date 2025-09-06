
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Link, useLocation} from "react-router-dom";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare} from "lucide-react";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Link, useLocation } from "react-router-dom",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
=======
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare } from "lucide-react",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface MainNavigationProps {
<<<<<<< HEAD
  isAdmin?: boolean;
  unreadCount?: number;
<<<<<<< HEAD
  className?: string
}
<<<<<<< HEAD
=======
  className?: string;
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string
}
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

<<<<<<< HEAD
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
=======
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
<<<<<<< HEAD
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
=======
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  const location = useLocation(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const links = [
    {
      name: "Home"
      href: "/"
      matches: (path: string) => path === "/"
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    {
      name: "Marketplace"
      href: "/marketplace"
      matches: (path: string) => path.startsWith("/marketplace")
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    {
      name: "Categories"
      href: "/categories"
      matches: (path: string) => path.startsWith("/categories")
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    {
      name: "Talent"
      href: "/talent"
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    {
      name: "Equipment"
      href: "/equipment"
      matches: (path: string) => path.startsWith("/equipment")
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    {
      name: "Community"
      href: "/community"
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }
<<<<<<< HEAD
  ];
=======
  ],
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      name: "Dashboard"
      href: "/dashboard"
      matches: (path: string) => path === "/dashboard" |path === "/client-dashboard" |path === "/talent-dashboard"
    })
  }
  // Add admin-only links
  if (isAdmin) {
    links.push({
      name: "Analytics"
      href: "/analytics"
      matches: (path: string) => path.startsWith("/analytics")
    })
  }
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
<<<<<<< HEAD
=======
import { Link, useLocation } from "react-router-dom",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare } from "lucide-react",;
interface MainNavigationProps {;
  isAdmin?: boolean,;
  unreadCount?: number,;
  className?: string;
}
;
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const location = useLocation(),;
  const links = [;
    {;
      name: "Home",;
      href: "/",;
      matches: (path: string) => path === "/";
    },;
    {;
      name: "Marketplace",;
      href: "/marketplace",;
      matches: (path: string) => path.startsWith("/marketplace");
    },;
    {;
      name: "Categories",;
      href: "/categories",;
      matches: (path: string) => path.startsWith("/categories");
    },;
    {;
      name: "Talent",;
      href: "/talent",;
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard");
    },;
    {;
      name: "Equipment",;
      href: "/equipment",;
      matches: (path: string) => path.startsWith("/equipment");
    },;
    {;
      name: "Community",;
      href: "/community",;
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    }
  ],;
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links.push({;
      name: "Dashboard",;
      href: "/dashboard",;
      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";
    });
  }
;
  // Add admin-only links;
  if (isAdmin) {;
    links.push({;
      name: "Analytics",;
      href: "/analytics",;
      matches: (path: string) => path.startsWith("/analytics");
    });
  }
;
  return (;
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;
        {links.map((link) => (;
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn(;
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors";
                link.matches(location.pathname);
                  ? "bg-zion-purple/20 text-zion-cyan";
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              to="/messages"
              className={cn(
<<<<<<< HEAD
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative";
                location.pathname === "/messages" |location.pathname === "/inbox"

=======
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
<<<<<<< HEAD
                </span>
              )}
            </Link>
          </li>
=======
                </span>;
              )}
            </Link>;
          </li>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        )}
      </ul>
    </nav>
  )
}