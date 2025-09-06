<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle} from "lucide-react";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
export interface MobileMenuProps {;
=======
import {Link} from "react-router-dom";"
import {useLocation} from "react-router-dom";"
import {Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle} from "lucide-react";"
import {cn} from "@/lib/utils";"
import {useAuth} from "@/hooks/useAuth";"
import {Button} from "@/components/ui/button";
export interface MobileMenuProps {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  unreadCount?: number;
  onClose: () => void;
}

export function MobileMenu(): any ({ unreadCount = 0, onClose }: MobileMenuProps) {;
  const location = useLocation();
  const { user } = useAuth();
<<<<<<< HEAD
  const isAuthenticated = !!user;  unreadCount?: number,
  onClose: () => void
}

<<<<<<< HEAD
<<<<<<< HEAD
export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Link } from "react-router-dom",
import { useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth",
=======
  const isAuthenticated = !!user;
"
import { Link } from "react-router-dom","
import { useLocation } from "react-router-dom","
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react","
import { cn } from "@/lib/utils",";
import { useAuth } from "@/hooks/useAuth";"
import { Button } from "@/components/ui/button";"
import { useAuth } from "@/hooks/useAuth","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button",

<<<<<<< HEAD


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface MobileMenuProps {
  unreadCount?: number,
  onClose: () => void
}

export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export interface MobileMenuProps {};
  unreadCount?: number,;
  onClose: () => void;
}

export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  
<<<<<<< HEAD
<<<<<<< HEAD
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const navItems = [
    {
      name: "Home"
=======

  const navItems = []
    {"
      name: "Home""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      href: "/"
      icon: Home"
      matches: (path: string) => path === "/"

<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
=======
export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
      {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
      {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      name: "Browse"
=======
    {"
      name: "Browse""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      href: "/talent"
      icon: Search"
      matches: (path: string) => path.startsWith("/talent") |path.startsWith("/categories") |path.startsWith("/marketplace")
    }
<<<<<<< HEAD
    {
      name: "Community"
      href: "/community"
      icon: MessageCircle
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }
    },
    {
      name: "Browse",
      href: "/talent",
      icon: Search,
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
    },
    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")
    },

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    {
      name: "Post Job"
      href: "/post-job"
      icon: BriefcaseIcon
      matches: (path: string) => path.startsWith("/post-job")
<<<<<<< HEAD
<<<<<<< HEAD
      authRequired: true
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
=======
      authRequired: true    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      authRequired: true    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      name: "Messages"
=======
    {}
    {"
      name: "Post Job""
      href: "/post-job"
      icon: BriefcaseIcon"
      matches: (path: string) => path.startsWith("/post-job");
      authRequired: true;
    {"
      name: "Messages""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      href: "/messages"
      icon: MessageSquare"
      matches: (path: string) => path.startsWith("/messages") |path.startsWith("/inbox")
<<<<<<< HEAD
      badge: unreadCount
<<<<<<< HEAD
<<<<<<< HEAD
      authRequired: true
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: "Dashboard"
=======
      badge: unreadCount;
      authRequired: true;
    {"
      name: "Dashboard""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      href: "/dashboard"
      icon: User"
      matches: (path: string) => path.startsWith("/dashboard")
      authRequired: true;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  ],


  const navItems = [;
    {;"
      name: "Home",;"
      href: "/",;
      icon: Home,;"
      matches: (path: string) => path === "/";
    };
    {;"
      name: "Browse",;"
      href: "/talent",;
      icon: Search,;"
      matches: (path: string) => path && path.startsWith("/talent") || path && path.startsWith("/categories") || path && path.startsWith("/marketplace");
    };
    {;"
      name: "Community",;"
      href: "/community",;
      icon: MessageCircle,;"
      matches: (path: string) => path && path.startsWith("/community") || path && path.startsWith("/forum");
    };
    {;"
      name: "Post Job",;"
      href: "/post-job",;
      icon: BriefcaseIcon,;"
      matches: (path: string) => path && path.startsWith("/post-job"),;
      authRequired: true;
    };
    {;"
      name: "Messages",;"
      href: "/messages",;
      icon: MessageSquare,;"
      matches: (path: string) => path && path.startsWith("/messages") || path && path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    };
    {;"
      name: "Dashboard",;"
      href: "/dashboard",;
      icon: User,;"
      matches: (path: string) => path && path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ];


  // Filter items based on auth status;
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
    <div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav className="space-y-1">
        {visibleItems.map(item => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Link
=======
      authRequired: true          <Link
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      authRequired: true          <Link
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


          <Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            key={item.name}
            to={item.href}
            className={cn(

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              "flex items-center px-6 py-3 text-base font-medium",
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
              "flex items-center px-6 py-3 text-base font-medium";

              "flex items-center px-6 py-3 text-base font-medium",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              item.matches(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
<<<<<<< HEAD
            onClick={onClose}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
  // Filter items based on auth status;
  const visibleItems = navItems && navItems.filter(item => ;
    !item && item.authRequired || (item && item.authRequired && isAuthenticated);
  );
  return (

                  {item.badge > 9 ? '9+' : item.badge}
                </span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Link } from "react-router-dom",;
import { useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
=======
              item.matches(location.pathname)"
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan""
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
"
import { Link } from "react-router-dom",;"
import { useLocation } from "react-router-dom",;"
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",;"
import { cn } from "@/lib/utils",;"
import { useAuth } from "@/hooks/useAuth",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button",;
export interface MobileMenuProps {;
  unreadCount?: number,;
  onClose: () => void;
}
;
export function MobileMenu() { return null; }
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const navItems = [;
    {;"
      name: "Home",;"
      href: "/",;
      icon: Home,;"
      matches: (path: string) => path === "/";
    },;
    {;"
      name: "Browse",;"
      href: "/talent",;
      icon: Search,;"
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
    {;"
      name: "Community",;"
      href: "/community",;
      icon: MessageCircle,;"
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
    {;"
      name: "Post Job",;"
      href: "/post-job",;
      icon: BriefcaseIcon,;"
      matches: (path: string) => path.startsWith("/post-job"),;
      authRequired: true;
    },;
    {;"
      name: "Messages",;"
      href: "/messages",;
      icon: MessageSquare,;"
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    },;
    {;"
      name: "Dashboard",;"
      href: "/dashboard",;
      icon: User,;"
      matches: (path: string) => path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ],;
  // Filter items based on auth status;
  const visibleItems = navItems.filter(item =>;
    !item.authRequired || (item.authRequired && isAuthenticated);
  );
  return (;
"
    <div className="py-6">;"
      <div className="flex justify-between items-center px-6 mb-6">;"
        <h2 className="text-xl font-bold">Menu</h2>;"
        <Button variant="ghost" size="icon" onClick={onClose}>;"
          <X className="h-5 w-5" />;
        </Button>;
      </div>;

<<<<<<< HEAD
      <nav className="space-y-1">;

              "flex items-center px-6 py-3 text-base font-medium"
              item && item.matches(location && location.pathname)

=======
        {visibleItems && visibleItems.map(item => (;
=======
  );
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Link
=======
              "flex items-center px-6 py-3 text-base font-medium",          <Link
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              "flex items-center px-6 py-3 text-base font-medium",          <Link
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            key={item && item.name}
            to={item && item.href}
            className={cn(                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
=======
          <Link;
            key={item && item.name}
            to={item && item.href}
            className={cn(
"
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan""
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            )}
            onClick={onClose}>;"
            <div className="relative mr-4">;"
              <item && item.icon className="h-5 w-5" />;
              {item && item.badge && item && item.badge > 0 && (;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
<<<<<<< HEAD
                </span>;              )}
            </div>;
            {item && item.name}          </Link>;
=======
                </span>;



        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            to={item.href}
            className={cn(;"
              "flex items-center px-6 py-3 text-base font-medium";
              item.matches(location.pathname);"
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan";"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
            )}
            onClick={onClose}
          >;"
            <div className="relative mr-4">;"
              <item.icon className="h-5 w-5" />;
              {item.badge && item.badge > 0 && (;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;'
                  {item.badge > 9 ? '9+' : item.badge}
                </span>;

          </Link>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        ))}

<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
=======
      </nav>;
    </div>;
  );
=======
      </nav>;
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              )}
            </div>;
            {item && item.name}
          </Link>;
        ))}
<<<<<<< HEAD
      </nav>
    </div>
  )
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
      </nav>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      </nav>;
    </div>;
  );

<<<<<<< HEAD
}
import { Link } from './react-router-dom';
import { use_location } from './react-router-dom';
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
=======




}'
import { Link } from './react-router-dom';'
import { use_location } from './react-router-dom';'
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from './lucide-react';'
import { cn } from '@/lib / utils';'
import { use_auth } from '@/hooks / use_auth';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from '@/components / ui / button';
export interface MobileMenuProps {};
  unread_count?: number;
  on_close: () => void;
}
export /**;
 * MobileMenu - Function description;
 */
function MobileMenu() {}
  const location = use_location ();
  const { user } = use_auth ();
  const is_authenticated = !!user;
;
<<<<<<< HEAD
  const nav_items = [;
    {
      name: "Home",
      href: "/",
      icon: Home,
      matches: (path: string) => path === "/";
    }
    {
      name: "Browse",
      href: "/talent",
      icon: Search,
      matches: (path: string) => path.starts_with ("/talent") || path.starts_with ("/categories") || path.starts_with ("/marketplace");
    }
    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,
      matches: (path: string) => path.starts_with ("/community") || path.starts_with ("/forum");
    }
    {
      name: "Post Job",
      href: "/post - job",
      icon: BriefcaseIcon,
      matches: (path: string) => path.starts_with ("/post - job"),
      auth_required: true;
    }
    {
      name: "Messages",
      href: "/messages",
      icon: MessageSquare,
      matches: (path: string) => path.starts_with ("/messages") || path.starts_with ("/inbox"),
      badge: unread_count,
      auth_required: true;
    }
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
      matches: (path: string) => path.starts_with ("/dashboard"),
      auth_required: true;
    }
  ];
;
  // Filter items based on auth status;
  const visible_items = nav_items.filter (item =>;
    !item.auth_required || (item.auth_required && is_authenticated));
;
  return (
    <div className="py-6">;
      <div className="flex justify - between items - center px - 6 mb-6">;
        <h2 className="text - xl font-bold">Menu</h2>;
        <Button variant="ghost" size="icon" on_click={on_close}>;
          <X className="h - 5 w-5" />;
        </Button>;
      </div>;
      <nav className="space-y-1">;
        {visible_items.map (item => (
          <Link;
            key={item.name}
            to={item.href}
            className={cn (
              "flex items - center px - 6 py - 3 text - base font - medium";
              item.matches (location.pathname);
                ? "bg - zion - purple / 20 text - zion - cyan border - l-4 border - zion - cyan";
                : "text - white hover:bg - zion - purple / 10 hover:text - zion - cyan")}
            on_click={on_close}
          >;
            <div className="relative mr-4">;
              <item.icon className="h - 5 w-5" />;
              {item.badge && item.badge > 0 && (
                <span className="absolute -top - 2 -right - 2 bg - zion - purple text - white text - xs rounded - full h - 4 w - 4 flex items - center justify-center">;
                  {item.badge > 9 ? '9+' : item.badge}
                </span>)}
            </div>;
            {item.name}
          </Link>))}
      </nav>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;}
 export interface MobileMenuProps {
  unreadCount?: number;
onClose: () => void 
}export function MobileMenu ({
  unreadCount = 0, onClose 
}: MobileMenuProps) {
  const location = useLocation ();
const {
  user 
}= useAuth ();
const isAuthenticated = !!user;
const navItems = [ {
  name: "Home";
href: "/";
icon: Home;
matches: (path: string) => path === "/" 
};
{
  name: "Browse";
href: "/talent";
icon: Search;
matches: (path: string) => path.startsWith ("/talent") || path.startsWith ("/categories") || path.startsWith ("/marketplace") 
};
{
  name: "Community";
href: "/community";
icon: MessageCircle;
matches: (path: string) => path.startsWith ("/community") || path.startsWith ("/forum") 
};
{
  name: "Post Job";
href: "/post-job";
icon: BriefcaseIcon;
matches: (path: string) => path.startsWith ("/post-job");
authRequired: true 
};
{
  name: "Messages";
href: "/messages";
icon: MessageSquare;
matches: (path: string) => path.startsWith ("/messages") || path.startsWith ("/inbox");
badge: unreadCount;
authRequired: true 
};
{
  name: "Dashboard";
href: "/dashboard";
icon: User;
matches: (path: string) => path.startsWith ("/dashboard");
authRequired: true 
}];
return () 
}onClick= {
  onClose 
}> {
  item.badge > 9 ? '9+' : item.badge 
}</span>) 
}</div> {
  item.name 
}</Link>) ) 
}</nav> </div>) 
}
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
      </nav>;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
