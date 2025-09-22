<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle} from "lucide-react";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
interface MobileBottomNavProps {;
  unreadCount?: number;

}

export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;




import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
import { useAuth } from "@/hooks/useAuth",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface MobileBottomNavProps {
  unreadCount?: number
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
=======
import { useAuth } from "@/hooks/useAuth",export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useAuth } from "@/hooks/useAuth",export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react";"
import {Link, useLocation} from "react-router-dom";"
import {Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle} from "lucide-react";"
import {cn} from "@/lib/utils";"
import {useAuth} from "@/hooks/useAuth";

}

export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
"
import React from "react","
import { Link, useLocation } from "react-router-dom","
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",";
import { cn } from "@/lib/utils";"
import { useAuth } from "@/hooks/useAuth";"
import { cn } from "@/lib/utils","
import { useAuth } from "@/hooks/useAuth",

interface MobileBottomNavProps {};
  unreadCount?: number;
}


export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  const navItems = []
    {"
      name: "Home""
      href: "/"
      icon: Home"
      matches: (path: string) => path === "/"

    {"
      name: "Browse""
      href: "/talent"
      icon: Search"
      matches: (path: string) => path.startsWith("/talent") |path.startsWith("/categories") |path.startsWith("/marketplace")
    }
<<<<<<< HEAD
    {
<<<<<<< HEAD
=======

  const navItems = [
    {
      name: "Home"
      href: "/"
      icon: Home
      matches: (path: string) => path === "/"


    {
      name: "Browse"
      href: "/talent"
      icon: Search
      matches: (path: string) => path.startsWith("/talent") |path.startsWith("/categories") |path.startsWith("/marketplace")
    }
    {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      name: "Community"
      href: "/community"
      icon: MessageCircle
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      name: "Messages"
=======
    {}
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
<<<<<<< HEAD
=======
      authRequired: true


    },


    {
      name: "Dashboard"
      href: "/dashboard"
      icon: User
      matches: (path: string) => path.startsWith("/dashboard")
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      authRequired: true
<<<<<<< HEAD

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ];
=======

  ],

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Filter items based on auth status
  const visibleItems = navItems.filter(item =>
    !item.authRequired |(item.authRequired && isAuthenticated)
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ],
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  // Filter items based on auth status;
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return ("
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">"
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link;
=======

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            key={item.name}
            to={item.href}
            className={cn(

<<<<<<< HEAD
<<<<<<< HEAD
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",

              "flex flex-col items-center justify-center w-full h-full px-1 py-1";

<<<<<<< HEAD
=======
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              item.matches(location.pathname)
                ? "text-zion-cyan"
=======
              item.matches(location.pathname)"
                ? "text-zion-cyan""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                : "text-white/70 hover:text-white"
            )}
          >"
            <div className="relative">"
              <item.icon className="h-5 w-5 mb-1" />
              {item.badge && item.badge > 0 && ("
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;
<<<<<<< HEAD
=======
"
import React from "react",;"
import { Link, useLocation } from "react-router-dom",;"
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",;"
import { cn } from "@/lib/utils",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useAuth } from "@/hooks/useAuth",;
interface MobileBottomNavProps {;
  unreadCount?: number;
}
;
<<<<<<< HEAD
export function MobileBottomNav() { return null; }
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation(),;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const navItems = [;
    {;"
      name: "Home",;"
      href: "/",;
<<<<<<< HEAD
      icon: Home,;
      matches: (path: string) => path === "/";
    };
},;
    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
      matches: (path: string) => path && path.startsWith("/talent") || path && path.startsWith("/categories") || path && path.startsWith("/marketplace");
    };
matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
      matches: (path: string) => path && path.startsWith("/community") || path && path.startsWith("/forum");
    };
matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
    {;
      matches: (path: string) => path === "/"
};    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
      matches: (path: string) => path && path.startsWith("/talent") || path && path.startsWith("/categories") || path && path.startsWith("/marketplace")
};    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
      matches: (path: string) => path && path.startsWith("/community") || path && path.startsWith("/forum")
};    {;
      name: "Messages",;
      href: "/messages",;
      icon: MessageSquare,;
      matches: (path: string) => path && path.startsWith("/messages") || path && path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    };
matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    },;
    {;
      authRequired: true
};    {;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">;
      <div className="flex justify-around items-center h-16">;

              "flex flex-col items-center justify-center w-full h-full px-1 py-1"
              item && item.matches(location && location.pathname)
<<<<<<< HEAD
=======
      icon: Home,;"
      matches: (path: string) => path === "/";

    {;"
      name: "Browse",;"
      href: "/talent",;
      icon: Search,;

    {;"
      name: "Community",;"
      href: "/community",;
      icon: MessageCircle,;

    {;"
      name: "Messages",;"
      href: "/messages",;
      icon: MessageSquare,;

    {;"
      name: "Dashboard",;"
      href: "/dashboard",;
      icon: User,;

  );
  return ("
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">;"
      <div className="flex justify-around items-center h-16">;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        {visibleItems && visibleItems.map(item => (;
          <Link;
            key={item && item.name}
            to={item && item.href}
            className={cn(
<<<<<<< HEAD
              "flex flex-col items-center justify-center w-full h-full px-1 py-1"
              item && item.matches(location && location.pathname)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                ? "text-zion-cyan"
=======
"
                ? "text-zion-cyan""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                : "text-white/70 hover:text-white"
            )}>;"
            <div className="relative">;"
              <item && item.icon className="h-5 w-5 mb-1" />;
              {item && item.badge && item && item.badge > 0 && (;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            to={item.href}
            className={cn(;"
              "flex flex-col items-center justify-center w-full h-full px-1 py-1";
              item.matches(location.pathname);"
                ? "text-zion-cyan";"
                : "text-white/70 hover:text-white";
            )}
          >;"
            <div className="relative">;"
              <item.icon className="h-5 w-5 mb-1" />;
<<<<<<< HEAD
              {item.badge && item.badge > 0 && (;
<<<<<<< HEAD
<<<<<<< HEAD
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              {item.badge && item.badge > 0 && (;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>;"
            <span className="text-xs font-medium">{item && item.name}</span>;
          </Link>;
        ))}


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
=======
                ? "text-zion-cyan"
                : "text-white/70 hover:text-white"
            )}>;
            <div className="relative">;
              <item && item.icon className="h-5 w-5 mb-1" />;
              {item && item.badge && item && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                  {item.badge > 9 ? '9+' :item.badge}
                </span>;
              )}
            </div>;
            <span className="text-xs font-medium">{item.name}</span>;
          </Link>;
        ))}
      </div>;
    </nav>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>;
            <span className="text-xs font-medium">{item && item.name}</span>;
          </Link>;
        ))}

      </div>;
    </nav>;
  );
}

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
;
import React from "react";""
import {Link, useLocation} from "react-router-dom";""
import {Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle} from "lucide-react";""
import {cn} from "@/lib/utils";""
import {useAuth} from "@/hooks/useAuth";"
interface MobileBottomNavProps {;
  unreadCount?: number;

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
          </Link>;
        ))}
      </div>;
    </nav>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from './react';
import { Link, use_location } from './react-router-dom';
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from './lucide-react';
import { cn } from '@/lib / utils';
<<<<<<< HEAD
=======
'
import React from './react';'
import { Link, use_location } from './react-router-dom';'
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from './lucide-react';'
import { cn } from '@/lib / utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { use_auth } from '@/hooks / use_auth';
interface MobileBottomNavProps {}
  unread_count?: number;
}
export /**;
 * MobileBottomNav - Function description;
 */
function MobileBottomNav() {}
=======
import { use_auth } from '@/hooks / use_auth';

export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;



"
import React from "react",""
import { Link, useLocation } from "react-router-dom",""
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",""
import { cn } from "@/lib/utils";""
import { useAuth } from "@/hooks/useAuth";""
import { cn } from "@/lib/utils",""
import { useAuth } from "@/hooks/useAuth","
interface MobileBottomNavProps {
<<<<<<< HEAD
  unread_count?: number;
}
export /**
 * MobileBottomNav - Function description
 */
function MobileBottomNav() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const location = use_location ();
  const { user } = use_auth ();
  const is_authenticated = !!user;
;
  const nav_items = [;
<<<<<<< HEAD
    {"
      name: "Home","
      href: "/",
      icon: Home,"
      matches: (path: string) => path === "/";
    }
    {"
      name: "Browse","
      href: "/talent",
      icon: Search,"
      matches: (path: string) => path.starts_with ("/talent") || path.starts_with ("/categories") || path.starts_with ("/marketplace");
    }
    {"
      name: "Community","
      href: "/community",
      icon: MessageCircle,"
      matches: (path: string) => path.starts_with ("/community") || path.starts_with ("/forum");
    }
    {"
      name: "Messages","
      href: "/messages",
      icon: MessageSquare,"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      matches: (path: string) => path.starts_with ("/messages") || path.starts_with ("/inbox"),
      badge: unread_count,
      auth_required: true;
    }
<<<<<<< HEAD
    {"
      name: "Dashboard","
      href: "/dashboard",
      icon: User,"
=======
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      matches: (path: string) => path.starts_with ("/dashboard"),
      auth_required: true;
    }
  ];
;
  // Filter items based on auth status;
  const visible_items = nav_items.filter (item =>;
    !item.auth_required || (item.auth_required && is_authenticated));
;
<<<<<<< HEAD
  return ("
    <nav className="md:hidden fixed bottom - 0 left - 0 right - 0 z - 50 bg - zion - blue - dark / 95 backdrop - blur - md border - t border - zion - purple / 20">;"
=======
  return (
    <nav className="md:hidden fixed bottom - 0 left - 0 right - 0 z - 50 bg - zion - blue - dark / 95 backdrop - blur - md border - t border - zion - purple / 20">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="flex justify - around items - center h - 16">;
        {visible_items.map (item => (
          <Link;
            key={item.name}
            to={item.href}
<<<<<<< HEAD
            className={cn ("
              "flex flex - col items - center justify - center w - full h - full px - 1 py - 1";
              item.matches (location.pathname);"
                ? "text - zion - cyan";"
                : "text - white / 70 hover:text - white")}
          >;"
            <div className="relative">;"
              <item.icon className="h - 5 w - 5 mb - 1" />;
              {item.badge && item.badge > 0 && ("
                <span className="absolute -top - 2 -right - 2 bg - zion - purple text - white text - xs rounded - full h - 4 w - 4 flex items - center justify - center">;'
                  {item.badge > 9 ? '9+' : item.badge}
                </span>)}
            </div>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <span className="text - xs font - medium">{item.name}</span>;
          </Link>))}
=======
  // TODO: Implement


export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,


  const navItems = [
    {"
      name: "Home"","
  href: "/""
      icon: Home;,"
  matches: (path: string) => path === "/""
      name: "Browse"","
  href: "/talent""
      icon: Search;,"
  matches: (path: string) => path.startsWith("/talent") |path.startsWith("/categories") |path.startsWith("/marketplace")"
      name: "Community"","
  href: "/community""
      icon: MessageCircle;,"
  matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")"
    },
      name: "Browse",""
      href: "/talent","
      icon: Search,"
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")"
      name: "Community",""
      href: "/community","
      icon: MessageCircle,"
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")"


      name: "Messages"","
  href: "/messages""
      icon: MessageSquare;,"
  matches: (path: string) => path.startsWith("/messages") |path.startsWith("/inbox")",
  badge: unreadCount;
      authRequired: true;


      name: "Dashboard"","
  href: "/dashboard""
      icon: User;,"
  matches: (path: string) => path.startsWith("/dashboard")",

]
  ],

  // Filter items based on auth status;
  const visibleItems = navItems.filter(item => )
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),


  return ("
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">"
</nav>"
      <div className="flex justify-around items-center h-16">"
</div>
          <Link;
            key={item.name}
            to={item.href}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",")
              item.matches(location.pathname)"
                ? "text-zion-cyan"""
                : "text-white/70 hover:text-white""
            )}
          >
            <div className="relative">"
</div>"
              <item.icon className="h-5 w-5 mb-1" />"
</item>"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">"
</span>"
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">;"
      <div className="flex justify-around items-center h-16">;"
            key={item && item.name}
            to={item && item.href}
            className={cn("
              "flex flex-col items-center justify-center w-full h-full px-1 py-1"")
              item && item.matches(location && location.pathname)"
            )}>;
            <div className="relative">;"
              <item && item.icon className="h-5 w-5 mb-1" />;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;"
</span>
                </span>;
            className={cn(;"
              "flex flex-col items-center justify-center w-full h-full px-1 py-1";")
              item.matches(location.pathname);"
                ? "text-zion-cyan";""
                : "text-white/70 hover:text-white";"
          >;
              <item.icon className="h-5 w-5 mb-1" />;"
            </div>;"
            <span className="text-xs font-medium">{item && item.name}</span>;"
          ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>;
    </nav>;"
    <nav className="md:hidden fixed bottom - 0 left - 0 right - 0 z - 50 bg - zion - blue - dark / 95 backdrop - blur - md border - t border - zion - purple / 20">;"
      <div className="flex justify - around items - center h - 16">;"
            className={cn ("
              "flex flex - col items - center justify - center w - full h - full px - 1 py - 1";")
              item.matches (location.pathname);"
                ? "text - zion - cyan";""
                : "text - white / 70 hover:text - white")}"
              <item.icon className="h - 5 w - 5 mb - 1" />;"
                <span className="absolute -top - 2 -right - 2 bg - zion - purple text - white text - xs rounded - full h - 4 w - 4 flex items - center justify - center">;"
                </span>)}
            <span className="text - xs font - medium">{item.name}</span>;"
          ))}
    </nav>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
}</div> ) ) 
}</div> </nav>) 
            <span className="text-xs font-medium">{item.name}</span>"
pr-12325
          </Link>
      </div>
    </nav>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </nav>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
