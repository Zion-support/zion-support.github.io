
<<<<<<< HEAD
import React from 'react',;
import { Link } from 'react-router-dom',;
import { cn } from "@/lib/utils",;
import { NavLink } from "react-router-dom",;
;
interface MainNavigationProps {;
  className?:string,;
}
;
export function MainNavigation({ className } MainNavigationProps) {;
  return (;
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>;
      <NavLink;
        to="/";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground";
          );
        }
      >;
        Home;
      </NavLink>;
      <Link to="/talent" className="text-zion-slate-light hover:text-white transition-colors">;
        Find Talent;
      </Link>;
      <Link to="/services" className="text-zion-slate-light hover:text-white transition-colors">;
        Services;
      </Link>;
      <Link to="/equipment" className="text-zion-slate-light hover:text-white transition-colors">;
        Equipment;
      </Link>;
      <Link to="/blog" className="text-zion-slate-light hover:text-white transition-colors">;
        Blog;
      </Link>;
      <Link to="/categories" className="text-zion-slate-light hover:text-white transition-colors">;
        Categories;
      </Link>;
      <NavLink;
        to="/partners";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground";
          );
        }
      >;
        Partner Program;
      </NavLink>;
      <NavLink;
        to="/signup";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground",;
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
          );
        }
      >;
        Register;
      </NavLink>;
    </nav>;
  ),;
=======
import React from 'react',
import { Link } from 'react-router-dom',
import { cn } from "@/lib/utils",
import { NavLink } from "react-router-dom",interface MainNavigationProps {
  className?: string
}

export function MainNavigation({ className }: MainNavigationProps) {
  return (
    <nav className={cn(&quot;hidden md:flex items-center space-x-6&quot;, className)}>
      <NavLink,
to=&quot;/&quot;
        className={({ isActive }) =>

interface MainNavigationProps {className?: string}

export function MainNavigation(_{className}: MainNavigationProps) {return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink,
to="/"
        className={_(_{ isActive}) =>
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
      <NavLink,
to=&quot;/partners&quot;
        className={({ isActive }) =>          cn(
            &quot;text-sm font-medium transition-colors hover:text-primary&quot;,
            isActive ? &quot;text-zion-cyan&quot; : &quot;text-muted-foreground&quot;
          )
        }
      >
        Partner Program
      </NavLink>
      <NavLink,
to=&quot;/signup&quot;
        className={({ isActive }) =>          cn(
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
