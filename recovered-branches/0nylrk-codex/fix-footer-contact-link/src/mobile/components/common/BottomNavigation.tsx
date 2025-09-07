    { path: "/mobile/profile", icon: <User />, label: "Profile" }],;import React from "react",
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
export function BottomNavigation() {
  const location = useLocation($2);
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],

  const location = useLocation();
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" }
    { path: "/mobile/browse", icon: <Search />, label: "Browse" }
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" }
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" }
    { path: "/mobile/profile", icon: <User />, label: "Profile" }]
  return (
    <div className = $2;
        return (
          <Link 
            key = $2;
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, {
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground")
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],
