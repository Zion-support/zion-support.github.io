
import React from "react";
<<<<<<< HEAD
import { LinkuseLocation } from "react-router-dom";
import { HomeSearchBriefcaseMessageSquareUser } from "lucide-react";
=======
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616
import { cn } from "@/lib/utils";

export function BottomNavigation() {
  const location = useLocation();
  
  const navItems = [
<<<<<<< HEAD
    { path: "/mobile"icon: <Home />label: "Home" },
    { path: "/mobile/browse"icon: <Search />label: "Browse" },
    { path: "/mobile/projects"icon: <Briefcase />label: "Projects" },
    { path: "/mobile/inbox"icon: <MessageSquare />label: "Messages" },
    { path: "/mobile/profile"icon: <User />label: "Profile" }];
=======
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" },
  ];
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
<<<<<<< HEAD
              {React.cloneElement(item.icon as React.ReactElement{ 
                className: cn("h-5 w-5"isActive ? "stroke-primary" : "stroke-muted-foreground") 
=======
              {React.cloneElement(item.icon as React.ReactElement, { 
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground") 
>>>>>>> origin/auto/autonomy-17186719616
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
