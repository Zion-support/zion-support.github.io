<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx

<<<<<<< HEAD

import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle} from "lucide-react";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
<<<<<<< HEAD
<<<<<<< HEAD
interface MobileBottomNavProps {;
  unreadCount?: number;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx
}
export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface MobileBottomNavProps {
  unreadCount?: number
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const navItems = [
    {
      name: "Home"
      href: "/"
      icon: Home
      matches: (path: string) => path === "/"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      name: "Messages"
      href: "/messages"
      icon: MessageSquare
      matches: (path: string) => path.startsWith("/messages") |path.startsWith("/inbox")
      badge: unreadCount
      authRequired: true
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      name: "Dashboard"
      href: "/dashboard"
      icon: User
      matches: (path: string) => path.startsWith("/dashboard")
      authRequired: true
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ];
  // Filter items based on auth status
  const visibleItems = navItems.filter(item =>
    !item.authRequired |(item.authRequired && isAuthenticated)
  );
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ],

  // Filter items based on auth status
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              "flex flex-col items-center justify-center w-full h-full px-1 py-1";

              "flex flex-col items-center justify-center w-full h-full px-1 py-1",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              item.matches(location.pathname)
                ? "text-zion-cyan"
                : "text-white/70 hover:text-white"
            )}
          >
            <div className="relative">
              <item.icon className="h-5 w-5 mb-1" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const navItems = [;
    {;
      name: "Home",;
      href: "/",;
      icon: Home,;
      matches: (path: string) => path === "/";
<<<<<<< HEAD
    };
=======
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
<<<<<<< HEAD
      matches: (path: string) => path && path.startsWith("/talent") || path && path.startsWith("/categories") || path && path.startsWith("/marketplace");
    };
=======
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
<<<<<<< HEAD
      matches: (path: string) => path && path.startsWith("/community") || path && path.startsWith("/forum");
    };
=======
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      name: "Messages",;
      href: "/messages",;
      icon: MessageSquare,;
<<<<<<< HEAD
      matches: (path: string) => path && path.startsWith("/messages") || path && path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    };
=======
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      name: "Dashboard",;
      href: "/dashboard",;
      icon: User,;
<<<<<<< HEAD
      matches: (path: string) => path && path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ];
  // Filter items based on auth status;
  const visibleItems = navItems && navItems.filter(item => ;
    !item && item.authRequired || (item && item.authRequired && isAuthenticated);
  );
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">;
      <div className="flex justify-around items-center h-16">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx

              "flex flex-col items-center justify-center w-full h-full px-1 py-1"
              item && item.matches(location && location.pathname)

========
        {visibleItems && visibleItems.map(item => (;
          <Link
            key={item && item.name}
            to={item && item.href}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full px-1 py-1"
              item && item.matches(location && location.pathname)
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx
                ? "text-zion-cyan"
                : "text-white/70 hover:text-white"
            )}>;
            <div className="relative">;
              <item && item.icon className="h-5 w-5 mb-1" />;
              {item && item.badge && item && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;
=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              )}
            </div>;
            <span className="text-xs font-medium">{item && item.name}</span>;
=======

import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
;
interface MobileBottomNavProps {;
  unreadCount?:number,;
}
;
export function MobileBottomNav({ unreadCount = 0 } MobileBottomNavProps) {;
  const location = useLocation(),;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
;
  const navItems = [;
    {;
      name:"Home",;
      href:"/",;
      icon:Home,;
      matches:(path:string) => path === "/";
    },;
    {;
      name:"Browse",;
      href:"/talent",;
      icon:Search,;
      matches:(path:string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
    {;
      name:"Community",;
      href:"/community",;
      icon:MessageCircle,;
      matches:(path:string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
    {;
      name:"Messages",;
      href:"/messages",;
      icon:MessageSquare,;
      matches:(path:string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge:unreadCount,;
      authRequired:true;
    },;
    {;
      name:"Dashboard",;
      href:"/dashboard",;
      icon:User,;
      matches:(path:string) => path.startsWith("/dashboard"),;
      authRequired:true;
    }
  ],;
;
  // Filter items based on auth status;
  const visibleItems = navItems.filter(item => ;
    !item.authRequired || (item.authRequired && isAuthenticated);
  ),;
;
  return (;
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">;
      <div className="flex justify-around items-center h-16">;
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            to={item.href}
            className={cn(;
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",;
              item.matches(location.pathname);
                ? "text-zion-cyan";
                :"text-white/70 hover:text-white";
            )}
          >;
            <div className="relative">;
              <item.icon className="h-5 w-5 mb-1" />;
              {item.badge && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item.badge > 9 ? '9+' :item.badge}
                </span>;
              )}
            </div>;
            <span className="text-xs font-medium">{item.name}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </Link>;
        ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx
      </div>;
    </nav>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MobileBottomNav.tsx
import React from './react';
import { Link, use_location } from './react-router-dom';
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
interface MobileBottomNavProps {
  unread_count?: number;
}
export /**
 * MobileBottomNav - Function description
 */
function MobileBottomNav() {
  const location = use_location ();
  const { user } = use_auth ();
  const is_authenticated = !!user;
;
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
    <nav className="md:hidden fixed bottom - 0 left - 0 right - 0 z - 50 bg - zion - blue - dark / 95 backdrop - blur - md border - t border - zion - purple / 20">;
      <div className="flex justify - around items - center h - 16">;
        {visible_items.map (item => (
          <Link;
            key={item.name}
            to={item.href}
            className={cn (
              "flex flex - col items - center justify - center w - full h - full px - 1 py - 1";
              item.matches (location.pathname);
                ? "text - zion - cyan";
                : "text - white / 70 hover:text - white")}
          >;
            <div className="relative">;
              <item.icon className="h - 5 w - 5 mb - 1" />;
              {item.badge && item.badge > 0 && (
                <span className="absolute -top - 2 -right - 2 bg - zion - purple text - white text - xs rounded - full h - 4 w - 4 flex items - center justify - center">;
                  {item.badge > 9 ? '9+' : item.badge}
                </span>)}
            </div>;
            <span className="text - xs font - medium">{item.name}</span>;
          </Link>))}
      </div>;
    </nav>);
}
=======
  ),;}
 interface MobileBottomNavProps {
  unreadCount?: number 
}export function MobileBottomNav ({
  unreadCount = 0 
}: MobileBottomNavProps) {
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
return ({
  item.badge > 9 ? '9+' : item.badge 
}</span>) 
}</div> </Link>) ) 
}</div> </nav>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
