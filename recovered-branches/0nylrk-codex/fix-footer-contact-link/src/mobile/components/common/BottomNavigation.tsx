
<<<<<<< HEAD
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
export function BottomNavigation() {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Link, useLocation } from "react-router-dom",
<<<<<<< HEAD
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
export function BottomNavigation() {
=======
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",
import { cn } from "@/lib/utils",
export function BottomNavigation() {
  const location = useLocation(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  const location = useLocation();
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" }
    { path: "/mobile/browse", icon: <Search />, label: "Browse" }
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" }
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" }
    { path: "/mobile/profile", icon: <User />, label: "Profile" }]
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">;
      {navItems && navItems.map((item) => {;
        const isActive = location && location.pathname === item && item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2";

              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, {
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground")
              })}
            </div>;
            <span className="text-xs mt-1">{item && item.label}</span>;
          </Link>;
        );
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      })}
    </div>
  )
}
import React from './react';
import { Link, use_location } from './react-router-dom';
import { Home, Search, Briefcase, MessageSquare, User } from './lucide-react';
import { cn } from '@/lib / utils';
export /**
 * BottomNavigation - Function description
 */
function BottomNavigation() {
  const location = use_location ();
;
  const nav_items = [;
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile / browse", icon: <Search />, label: "Browse" },
    { path: "/mobile / projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile / inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile / profile", icon: <User />, label: "Profile" }],
  return (
    <div className="fixed bottom - 0 left - 0 right - 0 bg - background border - t border - border flex justify - between px - 1 py - 2 z - 50">;
      {nav_items.map ((item) => {
        const is_active = location.pathname === item.path;
        return (
          <Link;
            key={item.path}
            to={item.path}
            className={cn (
              "flex flex - col items - center justify - center flex - 1 py - 1 px - 2";
              is_active ? "text - primary" : "text - muted - foreground")}
          >;
            <div className="h - 5 w - 5">;
              {React.clone_element (item.icon as React.ReactElement, {
                class_name: cn ("h - 5 w - 5", is_active ? "stroke - primary" : "stroke - muted - foreground");
              })}
            </div>;
            <span className="text - xs mt - 1">{item.label}</span>;
          </Link>);
      })}
    </div>);
}
