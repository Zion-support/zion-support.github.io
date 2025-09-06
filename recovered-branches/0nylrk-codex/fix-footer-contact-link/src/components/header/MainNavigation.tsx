
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';



import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";

import { Link  } from 'react-router-dom';
=======
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';

=======import { Link  } from 'react-router-dom';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
<<<<<<< HEAD
import {NavLink} from "react-router-dom";
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';



import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";
import React from 'react',
import { Link } from 'react-router-dom',
import { cn } from "@/lib/utils",
import { NavLink } from "react-router-dom",
interface MainNavigationProps {
  className?: string
}
export function MainNavigation({ className }: MainNavigationProps) {
  return (


interface MainNavigationProps {
  class_name?: string;
}

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
=======
import {NavLink} from "react-router-dom";        className={({ isActive }) =>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );

<<<<<<< HEAD
export /**
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );

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
=======
      >;
        Home;
      </NavLink>;
      <Link to="/talent" className="text - zion - slate - light hover:text - white transition-colors">;
        Find Talent;
      </Link>;
      <Link to="/services" className="text - zion - slate - light hover:text - white transition-colors">;
        Services;
      </Link>;
      <Link to="/equipment" className="text - zion - slate - light hover:text - white transition-colors">;
        Equipment;
      </Link>;
      <Link to="/blog" className="text - zion - slate - light hover:text - white transition-colors">;
        Blog;
      </Link>;
      <Link to="/categories" className="text - zion - slate - light hover:text - white transition-colors">;
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        Categories;
      </Link>;
      <NavLink;
        to="/partners";
        className={({ is_active }) =>;
          cn (
            "text - sm font - medium transition - colors hover: text - primary",
            is_active ? "text - zion - cyan" : "text - muted - foreground");
<<<<<<< HEAD
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground";
          );
        }
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      >;
        Partner Program;
      </NavLink>;

<<<<<<< HEAD
            isActive ? "text-zion-cyan" : "text-muted-foreground",;
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
=======
            isActive ? "text-zion-cyan" : "text-muted-foreground",;            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          );
        }
      >;
        Register;
      </NavLink>;
    </nav>;
  );
}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

            "text-sm font-medium transition-colors hover:text-primary",


            "text-sm font-medium transition-colors hover:text-primary",


    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover: text-primary"
            "text-sm font-medium transition-colors hover:text-primary",
            "text-sm font-medium transition-colors hover:text-primary",

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
            "text-sm font-medium transition-colors hover:text-primary",

            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Partner Program
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>


          cn(
            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground"

          cn(;
=======
            "text-sm font-medium transition-colors hover:text-primary",          cn(;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
