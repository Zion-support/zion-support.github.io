<<<<<<< HEAD
const navItems = [
=======
<<<<<<< HEAD
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
export function BottomNavigation() {
  const location = useLocation($2);
  const navItems = [
=======
const navItems = [
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],

import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Home, Search, Briefcase, MessageSquare, User} from "lucide-react";
import {cn} from "@/lib/utils";
export function BottomNavigation() {;
  const location = useLocation();

<<<<<<< HEAD
=======
<<<<<<< HEAD


import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
export function BottomNavigation() {
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",
import { cn } from "@/lib/utils",
export function BottomNavigation() {
  const location = useLocation(),
  
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const navItems = [;
    { path: "/mobile", icon: <Home />, label: "Home" },;
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },;
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },;
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },;

import React from "react",

import { Link, useLocation } from "react-router-dom",
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";

import { cn } from "@/lib/utils";
export function BottomNavigation() { return null; }
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react","
import { cn } from "@/lib/utils",
export function BottomNavigation() {}
  const location = useLocation(),

const navItems = [;
    { path: "/mobile", icon: <Home />, label: "Home" },;
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },;
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },;
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },;
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;

  const location = useLocation();
  const navItems = ["
    { path: "/mobile", icon: <Home />, label: "Home" }"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" }"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" }"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" }"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }]
  return (

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >"
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, {"
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const location = useLocation();
    { path: "/mobile", icon: <Home />, label: "Home" }
    { path: "/mobile/browse", icon: <Search />, label: "Browse" }
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" }
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" }
    { path: "/mobile/profile", icon: <User />, label: "Profile" }]
  return (
<<<<<<< HEAD
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;
      {navItems && navItems.map((item) => {;
        const isActive = location && location.pathname === item && item.path;
        return (
          <Link
=======
<<<<<<< HEAD


              "flex flex-col items-center justify-center flex-1 py-1 px-2",


    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path,
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2";

              "flex flex-col items-center justify-center flex-1 py-1 px-2",
=======
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;
      {navItems && navItems.map((item) => {;
        const isActive = location && location.pathname === item && item.path;
        return (
          <Link
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              "flex flex-col items-center justify-center flex-1 py-1 px-2",

"flex flex-col items-center justify-center flex-1 py-1 px-2",

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path,
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2";

              "flex flex-col items-center justify-center flex-1 py-1 px-2",
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, {

                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground")
<<<<<<< HEAD

            key={item && item.path} 
            to={item && item.path}

import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",;

import { cn } from "@/lib/utils",;
export function BottomNavigation() { return null; }
    { path: "/mobile", icon: <Home />, label: "Home" },;"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },;"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },;"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },;"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;
  return (;"

    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;
      {navItems.map((item) => {;
        const isActive = location.pathname === item.path;
        return (;
import React from "react";""
import {Link, useLocation} from "react-router-dom";""
import {Home, Search, Briefcase, MessageSquare, User} from "lucide-react";""
import {cn} from "@/lib/utils";"
export function BottomNavigation() {;
  const location = useLocation();

  const navItems = [;"
    { path: "/mobile", icon: <Home />, label: "Home" },;"
"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },;"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },;"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },;"
]"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;"
    { path: "/mobile", icon: <Home />, label: "Home" },"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],"
    { path: "/mobile", icon: <Home />, label: "Home" }"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" }"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" }"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" }"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }]"
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;"
</div>
          <Link;"
              "flex flex-col items-center justify-center flex-1 py-1 px-2",""
              isActive ? "text-primary" : "text-muted-foreground""

            )}
          >
            <div className="h-5 w-5">"
            </div>"
            <span className="text-xs mt-1">{item.label}</span>"
          <Link;
            key={item.path} ;
            to={item.path}

              isActive ? "text-primary" : "text-muted-foreground";
            )}

          >;

      })}

import React from './react';
import { Link, use_location } from './react-router-dom';
import { Home, Search, Briefcase, MessageSquare, User } from './lucide-react';

import { cn } from '@/lib / utils';
export /**;
 * BottomNavigation - Function description;
 */
function BottomNavigation() {}
  const location = use_location ();
;
  const nav_items = [;"
    { path: "/mobile", icon: <Home />, label: "Home" },"
    { path: "/mobile / browse", icon: <Search />, label: "Browse" },"
    { path: "/mobile / projects", icon: <Briefcase />, label: "Projects" },"
    { path: "/mobile / inbox", icon: <MessageSquare />, label: "Messages" },"
    { path: "/mobile / profile", icon: <User />, label: "Profile" }],
  return ("
    <div className="fixed bottom - 0 left - 0 right - 0 bg - background border - t border - border flex justify - between px - 1 py - 2 z - 50">;
      {nav_items.map ((item) => {}

        const is_active = location.pathname === item.path;
        return (
          <Link;
            key={item.path}
            to={item.path}

            <span className="text - xs mt - 1">{item.label}</span>;
          </Link>);
      })}
    </div>);
}

import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",;
import { cn } from "@/lib/utils",;
;
export function BottomNavigation() {;
  const location = useLocation(),;
  ;
  const navItems = [;
    { path:"/mobile", icon:<Home />, label:"Home" },;
    { path:"/mobile/browse", icon:<Search />, label:"Browse" },;
    { path:"/mobile/projects", icon:<Briefcase />, label:"Projects" },;
    { path:"/mobile/inbox", icon:<MessageSquare />, label:"Messages" },;
    { path:"/mobile/profile", icon:<User />, label:"Profile" }],;
;
  return (;
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;
      {navItems.map((item) => {;
        const isActive = location.pathname === item.path,;
        return (;
          <Link ;
            key={item.path} ;
            to={item.path}
            className={cn(;
              "flex flex-col items-center justify-center flex-1 py-1 px-2",;
              isActive ? "text-primary" :"text-muted-foreground";
            )}
          >;
            <div className="h-5 w-5">;
              {React.cloneElement(item.icon as React.ReactElement, { ;
                className:cn("h-5 w-5", isActive ? "stroke-primary" :"stroke-muted-foreground") ;
            <div className="h-5 w-5">;
              {React.cloneElement(item.icon as React.ReactElement, {;
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground");
              })}
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            key={item && item.path} 
            to={item && item.path}
<<<<<<< HEAD
=======
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2"
              isActive ? "text-primary" : "text-muted-foreground"
            )}>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",;

import { cn } from "@/lib/utils",;
export function BottomNavigation() { return null; }
    { path: "/mobile", icon: <Home />, label: "Home" },;"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },;"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },;"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },;"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;
  return (;"

    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;
      {navItems.map((item) => {;
        const isActive = location.pathname === item.path;
        return (;
import React from "react";""
import {Link, useLocation} from "react-router-dom";""
import {Home, Search, Briefcase, MessageSquare, User} from "lucide-react";""
import {cn} from "@/lib/utils";"
export function BottomNavigation() {;
  const location = useLocation();

  const navItems = [;"
    { path: "/mobile", icon: <Home />, label: "Home" },;"
"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },;"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },;"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },;"
]"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;"
    { path: "/mobile", icon: <Home />, label: "Home" },"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],"
    { path: "/mobile", icon: <Home />, label: "Home" }"
    { path: "/mobile/browse", icon: <Search />, label: "Browse" }"
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" }"
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" }"
    { path: "/mobile/profile", icon: <User />, label: "Profile" }]"
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;"
</div>
          <Link;"
              "flex flex-col items-center justify-center flex-1 py-1 px-2",""
              isActive ? "text-primary" : "text-muted-foreground""

            )}
          >
            <div className="h-5 w-5">"
            </div>"
            <span className="text-xs mt-1">{item.label}</span>"
          <Link;
            key={item.path} ;
            to={item.path}

              isActive ? "text-primary" : "text-muted-foreground";
            )}

          >;
<<<<<<< HEAD
=======

      })}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';
import { Link, use_location } from './react-router-dom';
import { Home, Search, Briefcase, MessageSquare, User } from './lucide-react';

import { cn } from '@/lib / utils';
export /**;
 * BottomNavigation - Function description;
 */
function BottomNavigation() {}
  const location = use_location ();
;
  const nav_items = [;"
    { path: "/mobile", icon: <Home />, label: "Home" },"
    { path: "/mobile / browse", icon: <Search />, label: "Browse" },"
    { path: "/mobile / projects", icon: <Briefcase />, label: "Projects" },"
    { path: "/mobile / inbox", icon: <MessageSquare />, label: "Messages" },"
    { path: "/mobile / profile", icon: <User />, label: "Profile" }],
  return ("
    <div className="fixed bottom - 0 left - 0 right - 0 bg - background border - t border - border flex justify - between px - 1 py - 2 z - 50">;
      {nav_items.map ((item) => {}

        const is_active = location.pathname === item.path;
        return (
          <Link;
            key={item.path}
            to={item.path}

            <span className="text - xs mt - 1">{item.label}</span>;
          </Link>);
      })}
    </div>);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",;
import { cn } from "@/lib/utils",;
;
export function BottomNavigation() {;
  const location = useLocation(),;
  ;
  const navItems = [;
    { path:"/mobile", icon:<Home />, label:"Home" },;
    { path:"/mobile/browse", icon:<Search />, label:"Browse" },;
    { path:"/mobile/projects", icon:<Briefcase />, label:"Projects" },;
    { path:"/mobile/inbox", icon:<MessageSquare />, label:"Messages" },;
    { path:"/mobile/profile", icon:<User />, label:"Profile" }],;
;
  return (;
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;
      {navItems.map((item) => {;
        const isActive = location.pathname === item.path,;
        return (;
          <Link ;
            key={item.path} ;
            to={item.path}
            className={cn(;
              "flex flex-col items-center justify-center flex-1 py-1 px-2",;
              isActive ? "text-primary" :"text-muted-foreground";
            )}
          >;
            <div className="h-5 w-5">;
              {React.cloneElement(item.icon as React.ReactElement, { ;
                className:cn("h-5 w-5", isActive ? "stroke-primary" :"stroke-muted-foreground") ;
            <div className="h-5 w-5">;
              {React.cloneElement(item.icon as React.ReactElement, {;
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground");
              })}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>;
            <span className="text-xs mt-1">{item.label}</span>;
          </Link>;
        );
      })}
    </div>
  )
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
