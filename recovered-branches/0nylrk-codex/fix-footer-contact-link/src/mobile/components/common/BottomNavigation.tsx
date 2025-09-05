
<<<<<<< HEAD
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Home, Search, Briefcase, MessageSquare, User } from "lucide-react",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { Link, useLocation } from &quot;react-router-dom&quot;;
import { Home, Search, Briefcase, MessageSquare, User } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function BottomNavigation() {
  const location = useLocation(),
  
  const navItems = [
<<<<<<< HEAD
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/browse", icon: <Search />, label: "Browse" },
    { path: "/mobile/projects", icon: <Briefcase />, label: "Projects" },
    { path: "/mobile/inbox", icon: <MessageSquare />, label: "Messages" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],
=======
    { path: &quot;/mobile&quot;, icon: <Home />, label: &quot;Home&quot; },
    { path: &quot;/mobile/browse&quot;, icon: <Search />, label: &quot;Browse&quot; },
    { path: &quot;/mobile/projects&quot;, icon: <Briefcase />, label: &quot;Projects&quot; },
    { path: &quot;/mobile/inbox&quot;, icon: <MessageSquare />, label: &quot;Messages&quot; },
    { path: &quot;/mobile/profile&quot;, icon: <User />, label: &quot;Profile&quot; }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
          </Link>
        )
      })}
    </div>
  )
}
