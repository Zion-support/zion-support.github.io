<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";

<<<<<<< HEAD
=======
=======

import React from 'react';
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Link  } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';



import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',
import { Link } from 'react-router-dom',
import { cn } from "@/lib/utils",
import { NavLink } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface MainNavigationProps {
  className?: string
}
export function MainNavigation({ className }: MainNavigationProps) {
  return (

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

interface MainNavigationProps {
  class_name?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }
      >;
        Home;
      </NavLink>;
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        Categories;
      </Link>;
      <NavLink;
        to="/partners";
<<<<<<< HEAD
        className={({ is_active }) =>;
          cn (
            "text - sm font - medium transition - colors hover: text - primary",
            is_active ? "text - zion - cyan" : "text - muted - foreground");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground";
          );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }
      >;
        Partner Program;
      </NavLink>;
<<<<<<< HEAD

            isActive ? "text-zion-cyan" : "text-muted-foreground",;
=======
      <NavLink;
        to="/signup";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
          );
        }
      >;
        Register;
      </NavLink>;
    </nav>;
<<<<<<< HEAD
  );
}

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

            "text-sm font-medium transition-colors hover:text-primary",

=======

            "text-sm font-medium transition-colors hover:text-primary",


    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover: text-primary"
            "text-sm font-medium transition-colors hover:text-primary",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            "text-sm font-medium transition-colors hover:text-primary",

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Home
      </NavLink>
      <Link to="/talent" className="text-zion-slate-light hover:text-white transition-colors">
        Find Talent
      </Link>
      <Link to="/services" className="text-zion-slate-light hover:text-white transition-colors">
        Services
      </Link>
      <Link to="/equipment" className="text-zion-slate-light hover:text-white transition-colors">
        Equipment
      </Link>
      <Link to="/blog" className="text-zion-slate-light hover:text-white transition-colors">
        Blog
      </Link>
      <Link to="/categories" className="text-zion-slate-light hover:text-white transition-colors">
        Categories
      </Link>
      <NavLink
        to="/partners"
        className={({ isActive }) =>
          cn(
<<<<<<< HEAD
<<<<<<< HEAD

            "text-sm font-medium transition-colors hover:text-primary",

=======
            "text-sm font-medium transition-colors hover:text-primary",

            "text-sm font-medium transition-colors hover: text-primary"
            "text-sm font-medium transition-colors hover:text-primary",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Partner Program
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          cn(
            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground"

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          cn(;
            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground",
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
          )
        }
      >
        Register
      </NavLink>
    </nav>
  )
}
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground",
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
          )
import React from 'react',;
import { Link } from 'react-router-dom',;
import { cn } from "@/lib/utils",;
import { NavLink } from "react-router-dom",;
interface MainNavigationProps {;
  className?: string;
}
;
export function MainNavigation({ className }: MainNavigationProps) {;
  return (;
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>;
      <NavLink;
        to="/";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );
import React from 'react';
interface MainNavigationProps {
  class_name?: string;
}
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
        }
      >;
        Home;
      </NavLink>;
        Categories;
      </Link>;
      <NavLink;
        to="/partners";
        }
      >;
        Partner Program;
      </NavLink>;
        }
      >;
        Register;
      </NavLink>;
    </nav>);
}
<<<<<<< HEAD
;

  ),;}
 interface MainNavigationProps {
  className?: string 
}export function MainNavigation ({
  className 
}: MainNavigationProps) {
  return (<nav className= {
  cn ("hidden md:flex items-center space-x-6", className) 
}> <NavLink to="/" className= {
  ({
  isActive 
}) => text-sm font-medium transition-colors hover:text-primary";
isActive ? " text-zion-cyan": " text-muted-foreground") 
}> Home </NavLink> <Link to=" /talent"className=" text-zion-slate-light hover:text-white transition-colors"> Find Talent </Link> <Link to=" /services"className=" text-zion-slate-light hover:text-white transition-colors"> Services </Link> <Link to=" /equipment"className=" text-zion-slate-light hover:text-white transition-colors"> Equipment </Link> <Link to=" /blog"className=" text-zion-slate-light hover:text-white transition-colors"> Blog </Link> <Link to=" /categories"className=" text-zion-slate-light hover:text-white transition-colors"> Categories </Link> <NavLink cn (" text-sm font-medium transition-colors hover:text-primary";
isActive ? " text-zion-cyan": " text-muted-foreground") 
}> Partner Program </NavLink> <NavLink cn (" text-sm font-medium transition-colors hover:text-primary";
isActive ? " text-zion-cyan": " text-muted-foreground";
" bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light") 
}> Register </NavLink> </nav>) 
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
