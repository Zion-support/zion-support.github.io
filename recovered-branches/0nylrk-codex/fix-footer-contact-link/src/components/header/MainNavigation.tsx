
<<<<<<< HEAD
import React from 'react',
import { Link } from 'react-router-dom',
import { cn } from "@/lib/utils",
import { NavLink } from "react-router-dom",
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from &quot;@/lib/utils&quot;;
import { NavLink } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MainNavigationProps {
  className?: string
}

export function MainNavigation({ className }: MainNavigationProps) {
  return (
    <nav className={cn(&quot;hidden md:flex items-center space-x-6&quot;, className)}>
      <NavLink
        to=&quot;/&quot;
        className={({ isActive }) =>
          cn(
            &quot;text-sm font-medium transition-colors hover:text-primary&quot;,
            isActive ? &quot;text-zion-cyan&quot; : &quot;text-muted-foreground&quot;
          )
        }
      >
        Home
      </NavLink>
      <Link to=&quot;/talent&quot; className=&quot;text-zion-slate-light hover:text-white transition-colors&quot;>
        Find Talent
      </Link>
      <Link to=&quot;/services&quot; className=&quot;text-zion-slate-light hover:text-white transition-colors&quot;>
        Services
      </Link>
      <Link to=&quot;/equipment&quot; className=&quot;text-zion-slate-light hover:text-white transition-colors&quot;>
        Equipment
      </Link>
      <Link to=&quot;/blog&quot; className=&quot;text-zion-slate-light hover:text-white transition-colors&quot;>
        Blog
      </Link>
      <Link to=&quot;/categories&quot; className=&quot;text-zion-slate-light hover:text-white transition-colors&quot;>
        Categories
      </Link>
      <NavLink
        to=&quot;/partners&quot;
        className={({ isActive }) =>
          cn(
            &quot;text-sm font-medium transition-colors hover:text-primary&quot;,
            isActive ? &quot;text-zion-cyan&quot; : &quot;text-muted-foreground&quot;
          )
        }
      >
        Partner Program
      </NavLink>
      <NavLink
        to=&quot;/signup&quot;
        className={({ isActive }) =>
          cn(
            &quot;text-sm font-medium transition-colors hover:text-primary&quot;,
            isActive ? &quot;text-zion-cyan&quot; : &quot;text-muted-foreground&quot;,
            &quot;bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light&quot;
          )
        }
      >
        Register
      </NavLink>
    </nav>
  )
}
