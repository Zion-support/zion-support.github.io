<<<<<<< HEAD
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link",
import { Home, ShoppingBag, Users, User } from 'lucide-react'
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { useRouter } from &quot;next/router&quot;;
import Link from &quot;next/link&quot;;
import { Home, ShoppingBag, Users, User } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function BottomNavigation() {
  const router = useRouter(),
  
  const navItems = [
<<<<<<< HEAD
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/marketplace", icon: <ShoppingBag />, label: "Marketplace" },
    { path: "/mobile/community", icon: <Users />, label: "Community" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" }],
=======
    { path: &quot;/mobile&quot;, icon: <Home />, label: &quot;Home&quot; },
    { path: &quot;/mobile/marketplace&quot;, icon: <ShoppingBag />, label: &quot;Marketplace&quot; },
    { path: &quot;/mobile/community&quot;, icon: <Users />, label: &quot;Community&quot; },
    { path: &quot;/mobile/profile&quot;, icon: <User />, label: &quot;Profile&quot; }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50&quot;>
      {navItems.map((item) => {
        const isActive = router.pathname === item.path,
        return (
          <Link 
            key={item.path} 
            href={item.path}
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
