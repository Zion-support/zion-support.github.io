
<<<<<<< HEAD
import { Link } from "react-router-dom",
import { useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
export interface MobileMenuProps {
=======
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle} from "lucide-react";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
export interface MobileMenuProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  unreadCount?: number;
  onClose: () => void;
}

export function MobileMenu(): any ({ unreadCount = 0, onClose }: MobileMenuProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
<<<<<<< HEAD
  const navItems = [
    {
      name: "Home"
      href: "/"
      icon: Home
      matches: (path: string) => path === "/"
    }
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
      name: "Post Job"
      href: "/post-job"
      icon: BriefcaseIcon
      matches: (path: string) => path.startsWith("/post-job")
      authRequired: true
    }
    {
      name: "Messages"
      href: "/messages"
      icon: MessageSquare
      matches: (path: string) => path.startsWith("/messages") |path.startsWith("/inbox")
      badge: unreadCount
      authRequired: true
    }
    {
      name: "Dashboard"
      href: "/dashboard"
      icon: User
      matches: (path: string) => path.startsWith("/dashboard")
      authRequired: true
    }
  ];
  // Filter items based on auth status
  const visibleItems = navItems.filter(item =>
    !item.authRequired |(item.authRequired && isAuthenticated)
=======

  const navItems = [;
    {;
      name: "Home",;
      href: "/",;
      icon: Home,;
      matches: (path: string) => path === "/";
    };
    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
      matches: (path: string) => path && path.startsWith("/talent") || path && path.startsWith("/categories") || path && path.startsWith("/marketplace");
    };
    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
      matches: (path: string) => path && path.startsWith("/community") || path && path.startsWith("/forum");
    };
    {;
      name: "Post Job",;
      href: "/post-job",;
      icon: BriefcaseIcon,;
      matches: (path: string) => path && path.startsWith("/post-job"),;
      authRequired: true;
    };
    {;
      name: "Messages",;
      href: "/messages",;
      icon: MessageSquare,;
      matches: (path: string) => path && path.startsWith("/messages") || path && path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    };
    {;
      name: "Dashboard",;
      href: "/dashboard",;
      icon: User,;
      matches: (path: string) => path && path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ];

  // Filter items based on auth status;
  const visibleItems = navItems && navItems.filter(item => ;
    !item && item.authRequired || (item && item.authRequired && isAuthenticated);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  return (
<<<<<<< HEAD
    <div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav className="space-y-1">
        {visibleItems.map(item => (
=======
    <div className="py-6">;
      <div className="flex justify-between items-center px-6 mb-6">;
        <h2 className="text-xl font-bold">Menu</h2>;
        <Button variant="ghost" size="icon" onClick={onClose}>;
          <X className="h-5 w-5" />;
        </Button>;
      </div>;

      <nav className="space-y-1">;
        {visibleItems && visibleItems.map(item => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <Link
            key={item && item.name}
            to={item && item.href}
            className={cn(
<<<<<<< HEAD
              "flex items-center px-6 py-3 text-base font-medium";

              item.matches(location.pathname)
=======
              "flex items-center px-6 py-3 text-base font-medium"
              item && item.matches(location && location.pathname)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
            onClick={onClose}>;
            <div className="relative mr-4">;
              <item && item.icon className="h-5 w-5" />;
              {item && item.badge && item && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;
              )}
            </div>;
            {item && item.name}
          </Link>;
        ))}
<<<<<<< HEAD
      </nav>
    </div>
  )
}
=======
      </nav>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
