
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Home, Search, Briefcase, MessageSquare, User} from "lucide-react";
import {cn} from "@/lib/utils";
export function BottomNavigation() {;
  const location = useLocation();


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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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

              "flex flex-col items-center justify-center flex-1 py-1 px-2",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, {
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground")

            key={item && item.path} 
            to={item && item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2"
              isActive ? "text-primary" : "text-muted-foreground"
            )}>;

              })}
            </div>;
            <span className="text-xs mt-1">{item && item.label}</span>;
          </Link>;
        );


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      })}

    </div>;
  );
}


