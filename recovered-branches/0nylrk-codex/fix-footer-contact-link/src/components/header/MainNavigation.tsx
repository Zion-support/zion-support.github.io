import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link  } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
=======
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface MainNavigationProps {
  class_name?: string;
}
<<<<<<< HEAD
export function MainNavigation({ className }: MainNavigationProps) {
  return (

    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover: text-primary"
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
=======
import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";
interface MainNavigationProps {;
  className?: string;
}

export function MainNavigation(): any ({ className }: MainNavigationProps) {;
  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>;
      <NavLink
        to="/"
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export /**
 * MainNavigation - Function description
 */
function MainNavigation() {
  return (
    <nav className={cn ("hidden md:flex items - center space - x-6", class_name)}>;
      <NavLink;
        to="/";
        className={({ is_active }) =>;
          cn (
            "text - sm font - medium transition - colors hover: text - primary",
            is_active ? "text - zion - cyan" : "text - muted - foreground");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
      >;
        Home;
      </NavLink>;
<<<<<<< HEAD
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
      <NavLink
        to="/partners"
<<<<<<< HEAD
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover: text-primary"
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
=======
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      <Link to="/talent" className="text - zion - slate - light hover:text - white transition - colors">;
        Find Talent;
      </Link>;
      <Link to="/services" className="text - zion - slate - light hover:text - white transition - colors">;
        Services;
      </Link>;
      <Link to="/equipment" className="text - zion - slate - light hover:text - white transition - colors">;
        Equipment;
      </Link>;
      <Link to="/blog" className="text - zion - slate - light hover:text - white transition - colors">;
        Blog;
      </Link>;
      <Link to="/categories" className="text - zion - slate - light hover:text - white transition - colors">;
        Categories;
      </Link>;
      <NavLink;
        to="/partners";
        className={({ is_active }) =>;
          cn (
            "text - sm font - medium transition - colors hover: text - primary",
            is_active ? "text - zion - cyan" : "text - muted - foreground");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
      >;
        Partner Program;
      </NavLink>;
<<<<<<< HEAD
      <NavLink
        to="/signup"
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary";
<<<<<<< HEAD
            isActive ? "text-zion-cyan" : "text-muted-foreground"

            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
          )
        }
      >
        Register
      </NavLink>
    </nav>
  )
}
=======
            isActive ? "text-zion-cyan" : "text-muted-foreground",;
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
          );
        }
      >;
        Register;
      </NavLink>;
    </nav>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      <NavLink;
        to="/signup";
        className={({ is_active }) =>;
          cn (
            "text - sm font - medium transition - colors hover: text - primary";
            is_active ? "text - zion - cyan" : "text - muted - foreground",
            "bg - zion - purple px - 4 py - 2 rounded - md hover:bg - zion - purple - light");
        }
      >;
        Register;
      </NavLink>;
    </nav>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
