<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle} from "lucide-react";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
<<<<<<< HEAD
=======
interface MobileBottomNavProps {;
  unreadCount?: number;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface MobileBottomNavProps {
  unreadCount?: number
}

<<<<<<< HEAD
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

      name: "Community"
      href: "/community"
      icon: MessageCircle
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }

=======
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
=======
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
=======

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface MobileBottomNavProps {
  unreadCount?: number
}

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
<<<<<<< HEAD

=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const navItems = [
    {
      name: "Home"
      href: "/"
      icon: Home
      matches: (path: string) => path === "/"

<<<<<<< HEAD
    }
    {
      name: "Browse"
      href: "/talent"
      icon: Search
      matches: (path: string) => path.startsWith("/talent") |path.startsWith("/categories") |path.startsWith("/marketplace")
    }
    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      name: "Community"
      href: "/community"
      icon: MessageCircle
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {
      name: "Messages"

      href: "/messages"
      icon: MessageSquare"
      matches: (path: string) => path.startsWith("/messages") |path.startsWith("/inbox")

      authRequired: true

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {

      name: "Dashboard"

      href: "/dashboard"
      icon: User"
      matches: (path: string) => path.startsWith("/dashboard")
      authRequired: true;
    }

  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

  ];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Filter items based on auth status
  const visibleItems = navItems.filter(item =>
    !item.authRequired |(item.authRequired && isAuthenticated)
  );
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ],

  // Filter items based on auth status;
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

<<<<<<< HEAD
  return ("
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">"
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link;

            key={item.name}
            to={item.href}
            className={cn(

              item.matches(location.pathname)
                ? "text-zion-cyan"

                : "text-white/70 hover:text-white"
            )}
          >"
            <div className="relative">"
              <item.icon className="h-5 w-5 mb-1" />
              {item.badge && item.badge > 0 && ("
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">

import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;

import { useAuth } from "@/hooks/useAuth",;
interface MobileBottomNavProps {;
  unreadCount?: number;
}
;

  const navItems = [;
    {;"
      name: "Home",;"
      href: "/",;

  );

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">;
      <div className="flex justify-around items-center h-16">;

              "flex flex-col items-center justify-center w-full h-full px-1 py-1"
              item && item.matches(location && location.pathname)

        {visibleItems && visibleItems.map(item => (;
          <Link;
            key={item && item.name}
            to={item && item.href}
            className={cn(

                ? "text-zion-cyan"

                : "text-white/70 hover:text-white"
            )}>;"
            <div className="relative">;"
              <item && item.icon className="h-5 w-5 mb-1" />;
              {item && item.badge && item && item.badge > 0 && (;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;

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

=======
<<<<<<< HEAD
  return ("
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">"
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link;

            key={item.name}
            to={item.href}
            className={cn(
<<<<<<< HEAD
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",

              "flex flex-col items-center justify-center w-full h-full px-1 py-1";

              "flex flex-col items-center justify-center w-full h-full px-1 py-1",
=======

<<<<<<< HEAD
=======
              "flex flex-col items-center justify-center w-full h-full px-1 py-1",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              item.matches(location.pathname)
                ? "text-zion-cyan"

                : "text-white/70 hover:text-white"
            )}
          >"
            <div className="relative">"
              <item.icon className="h-5 w-5 mb-1" />
              {item.badge && item.badge > 0 && ("
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;

import { useAuth } from "@/hooks/useAuth",;
interface MobileBottomNavProps {;
  unreadCount?: number;
}
;
<<<<<<< HEAD
=======
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const location = useLocation(),;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const navItems = [;
    {;"
      name: "Home",;"
      href: "/",;
<<<<<<< HEAD
=======
      icon: Home,;
      matches: (path: string) => path === "/";
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
<<<<<<< HEAD
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
=======
      matches: (path: string) => path && path.startsWith("/talent") || path && path.startsWith("/categories") || path && path.startsWith("/marketplace");
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
<<<<<<< HEAD
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
=======
      matches: (path: string) => path && path.startsWith("/community") || path && path.startsWith("/forum");
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      name: "Messages",;
      href: "/messages",;
      icon: MessageSquare,;
<<<<<<< HEAD
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    },;
=======
      matches: (path: string) => path && path.startsWith("/messages") || path && path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      name: "Dashboard",;
      href: "/dashboard",;
      icon: User,;
<<<<<<< HEAD
        {visibleItems && visibleItems.map(item => (;
          <Link
            key={item && item.name}
            to={item && item.href}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full px-1 py-1"
              item && item.matches(location && location.pathname)
=======
      matches: (path: string) => path && path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  );

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">;
      <div className="flex justify-around items-center h-16">;

              "flex flex-col items-center justify-center w-full h-full px-1 py-1"
              item && item.matches(location && location.pathname)

<<<<<<< HEAD
        {visibleItems && visibleItems.map(item => (;
          <Link;
            key={item && item.name}
            to={item && item.href}
            className={cn(

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                ? "text-zion-cyan"

                : "text-white/70 hover:text-white"
            )}>;"
            <div className="relative">;"
              <item && item.icon className="h-5 w-5 mb-1" />;
              {item && item.badge && item && item.badge > 0 && (;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;
<<<<<<< HEAD

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

                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>;"
            <span className="text-xs font-medium">{item && item.name}</span>;
          </Link>;
        ))}

=======
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          </Link>;
        ))}
      </div>;
    </nav>;
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </span>)}
            <span className="text - xs font - medium">{item.name}</span>;"
          ))}
    </nav>);
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
}</div> ) ) 
}</div> </nav>) 
            <span className="text-xs font-medium">{item.name}</span>"
pr-12325
          </Link>
      </div>
    </nav>
  )
}
=======
}</div> </Link>) ) 
}</div> </nav>) 
}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>;"
            <span className="text-xs font-medium">{item && item.name}</span>;
          </Link>;
        ))}

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
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
