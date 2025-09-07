
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Home, Search, Briefcase, MessageSquare, User} from "lucide-react";
import {cn} from "@/lib/utils";
export function BottomNavigation() {;
  const location = useLocation();

  const navItems = [;
    { path: "/mobile", icon: <Home />, label: "Home" },;
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },;
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },;
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },;
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
export function BottomNavigation() {
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",;
import { cn } from "@/lib/utils",;
export function BottomNavigation() {
  const location = useLocation(),
  
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],
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
            className={cn(;"
              "flex flex-col items-center justify-center flex-1 py-1 px-2";""
              isActive ? "text-primary" : "text-muted-foreground";")
          >;

            <div className="h-5 w-5">;"
            </div>;"
            <span className="text-xs mt-1">{item && item.label}</span>;"
          ;
    { path: "/mobile / browse", icon: <Search />, label: "Browse" },"
    { path: "/mobile / projects", icon: <Briefcase />, label: "Projects" },"
    { path: "/mobile / inbox", icon: <MessageSquare />, label: "Messages" },"
    { path: "/mobile / profile", icon: <User />, label: "Profile" }],"
    <div className="fixed bottom - 0 left - 0 right - 0 bg - background border - t border - border flex justify - between px - 1 py - 2 z - 50">;"
            key={item.path}
            className={cn ("
              "flex flex - col items - center justify - center flex - 1 py - 1 px - 2";")"
              is_active ? "text - primary" : "text - muted - foreground")}"
            <div className="h - 5 w - 5">;"
            <span className="text - xs mt - 1">{item.label}</span>;"
          );
    </div>);"
    { path:"/mobile", icon:<Home />, label:"Home" },;"
    { path:"/mobile/browse", icon:<Search />, label:"Browse" },;"
    { path:"/mobile/projects", icon:<Briefcase />, label:"Projects" },;"
    { path:"/mobile/inbox", icon:<MessageSquare />, label:"Messages" },;"
    { path:"/mobile/profile", icon:<User />, label:"Profile" }],;"
          <Link ;
              "flex flex-col items-center justify-center flex-1 py-1 px-2",;""
              isActive ? "text-primary" :"text-muted-foreground";")
            <span className="text-xs mt-1">{item.label}</span>;"
pr-12325
