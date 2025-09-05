
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom",
import { useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
=======
import { Link } from &quot;react-router-dom&quot;;
import { useLocation } from &quot;react-router-dom&quot;;
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface MobileMenuProps {
  unreadCount?: number,
  onClose: () => void
}

export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {
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
      name: &quot;Post Job&quot;,
      href: &quot;/post-job&quot;,
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith(&quot;/post-job&quot;),
      authRequired: true
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
    <div className=&quot;py-6&quot;>
      <div className=&quot;flex justify-between items-center px-6 mb-6&quot;>
        <h2 className=&quot;text-xl font-bold&quot;>Menu</h2>
        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; onClick={onClose}>
          <X className=&quot;h-5 w-5&quot; />
        </Button>
      </div>
      
      <nav className=&quot;space-y-1&quot;>
        {visibleItems.map(item => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              &quot;flex items-center px-6 py-3 text-base font-medium&quot;,
              item.matches(location.pathname)
                ? &quot;bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan&quot;
                : &quot;text-white hover:bg-zion-purple/10 hover:text-zion-cyan&quot;
            )}
            onClick={onClose}
          >
            <div className=&quot;relative mr-4&quot;>
              <item.icon className=&quot;h-5 w-5&quot; />
              {item.badge && item.badge > 0 && (
                <span className=&quot;absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center&quot;>
=======
import { Link } from "react-router-dom",;
import { useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
export interface MobileMenuProps {;
  unreadCount?: number,;
  onClose: () => void;
}
;
export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {;
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
      name: "Post Job",;
      href: "/post-job",;
      icon: BriefcaseIcon,;
      matches: (path: string) => path.startsWith("/post-job"),;
      authRequired: true;
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
    <div className="py-6">;
      <div className="flex justify-between items-center px-6 mb-6">;
        <h2 className="text-xl font-bold">Menu</h2>;
        <Button variant="ghost" size="icon" onClick={onClose}>;
          <X className="h-5 w-5" />;
        </Button>;
      </div>;
      <nav className="space-y-1">;
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            to={item.href}
            className={cn(;
              "flex items-center px-6 py-3 text-base font-medium";
              item.matches(location.pathname);
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan";
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
            )}
            onClick={onClose}
          >;
            <div className="relative mr-4">;
              <item.icon className="h-5 w-5" />;
              {item.badge && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {item.badge > 9 ? '9+' : item.badge}
                </span>;
              )}
            </div>;
            {item.name}
          </Link>;
        ))}
      </nav>;
    </div>;
  );
}
;