
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
=======
import React from &quot;react&quot;;
import { Link, useLocation } from &quot;react-router-dom&quot;;
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MobileBottomNavProps {
  unreadCount?: number
}

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,

  const navItems = [
    {
      name: &quot;Home&quot;,
      href: &quot;/&quot;,
      icon: Home,
      matches: (path: string) => path === &quot;/&quot;
    },
    {
      name: &quot;Browse&quot;,
      href: &quot;/talent&quot;,
      icon: Search,
      matches: (path: string) => path.startsWith(&quot;/talent&quot;) || path.startsWith(&quot;/categories&quot;) || path.startsWith(&quot;/marketplace&quot;)
    },
    {
      name: &quot;Community&quot;,
      href: &quot;/community&quot;,
      icon: MessageCircle,
      matches: (path: string) => path.startsWith(&quot;/community&quot;) || path.startsWith(&quot;/forum&quot;)
    },
    {
      name: &quot;Messages&quot;,
      href: &quot;/messages&quot;,
      icon: MessageSquare,
      matches: (path: string) => path.startsWith(&quot;/messages&quot;) || path.startsWith(&quot;/inbox&quot;),
      badge: unreadCount,
      authRequired: true
    },
    {
      name: &quot;Dashboard&quot;,
      href: &quot;/dashboard&quot;,
      icon: User,
      matches: (path: string) => path.startsWith(&quot;/dashboard&quot;),
      authRequired: true
    }
  ],

  // Filter items based on auth status
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

  return (
    <nav className=&quot;md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20&quot;>
      <div className=&quot;flex justify-around items-center h-16&quot;>
        {visibleItems.map(item => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              &quot;flex flex-col items-center justify-center w-full h-full px-1 py-1&quot;,
              item.matches(location.pathname)
                ? &quot;text-zion-cyan&quot;
                : &quot;text-white/70 hover:text-white&quot;
            )}
          >
            <div className=&quot;relative&quot;>
              <item.icon className=&quot;h-5 w-5 mb-1&quot; />
              {item.badge && item.badge > 0 && (
                <span className=&quot;absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center&quot;>
=======
import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
interface MobileBottomNavProps {;
  unreadCount?: number;
}
;
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation(),;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const navItems = [;
    {;
      name: "Home",;
      href: "/",;
      icon: Home,;
      matches: (path: string) => path === "/";
    },;
    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
    {;
      name: "Messages",;
      href: "/messages",;
      icon: MessageSquare,;
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    },;
    {;
      name: "Dashboard",;
      href: "/dashboard",;
      icon: User,;
      matches: (path: string) => path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ],;
  // Filter items based on auth status;
  const visibleItems = navItems.filter(item =>;
    !item.authRequired || (item.authRequired && isAuthenticated);
  );
  return (;
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">;
      <div className="flex justify-around items-center h-16">;
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            to={item.href}
            className={cn(;
              "flex flex-col items-center justify-center w-full h-full px-1 py-1";
              item.matches(location.pathname);
                ? "text-zion-cyan";
                : "text-white/70 hover:text-white";
            )}
          >;
            <div className="relative">;
              <item.icon className="h-5 w-5 mb-1" />;
              {item.badge && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {item.badge > 9 ? '9+' : item.badge}
                </span>;
              )}
<<<<<<< HEAD
            </div>
            <span className=&quot;text-xs font-medium&quot;>{item.name}</span>
          </Link>
=======
            </div>;
            <span className="text-xs font-medium">{item.name}</span>;
          </Link>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </div>;
    </nav>;
  );
}
;