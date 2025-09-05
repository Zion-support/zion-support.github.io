
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",
import { cn } from "@/lib/utils",export function BottomNavigation() {
  const location = useLocation(),
  
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],
  return (
    <div className=&quot;fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50&quot;>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path,
        return (
          <Link 
            key={item.path} 
            to={item.path}
            className={cn(
              &quot;flex flex-col items-center justify-center flex-1 py-1 px-2&quot;,
              isActive ? &quot;text-primary&quot; : &quot;text-muted-foreground&quot;
            )}
          >
            <div className=&quot;h-5 w-5&quot;>
              {React.cloneElement(item.icon as React.ReactElement, { 
                className: cn(&quot;h-5 w-5&quot;, isActive ? &quot;stroke-primary&quot; : &quot;stroke-muted-foreground&quot;) 
              })}
            </div>
            <span className=&quot;text-xs mt-1&quot;>{item.label}</span>
import React from "react";

export function BottomNavigation() {_const _location = useLocation();
  
  const _navItems = [
    { path: "/mobile", _icon: <Home />, _label: "Home"},
    {_path: "/mobile/browse", _icon: <Search />, _label: "Browse"},
    {_path: "/mobile/projects", _icon: <Briefcase />, _label: "Projects"},
    {_path: "/mobile/inbox", _icon: <MessageSquare />, _label: "Messages"},
    {_path: "/mobile/profile", _icon: <User />, _label: "Profile"}];

  return (_<div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">
      {_navItems.map((item) => {
        const _isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            to={_item.path}
            className={_cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2", _isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {_React.cloneElement(item.icon as React.ReactElement, _{ 
                className: cn("h-5 w-5", _isActive ? "stroke-primary" : "stroke-muted-foreground")})}
            </div>
            <span className="text-xs mt-1">{_item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
