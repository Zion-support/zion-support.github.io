<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx

<<<<<<< HEAD

=======
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';

=======


import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Link  } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
=======
import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react',
import { Link } from 'react-router-dom',
import { cn } from "@/lib/utils",
import { NavLink } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface MainNavigationProps {
  className?: string
}
export function MainNavigation({ className }: MainNavigationProps) {
  return (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface MainNavigationProps {
  class_name?: string;
}

========
<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';
interface MainNavigationProps {
  class_name?: string;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx
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
<<<<<<< HEAD
        className={({ isActive }) =>
          cn(
=======
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }
      >;
        Home;
      </NavLink>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        Categories;
      </Link>;
      <NavLink;
        to="/partners";
<<<<<<< HEAD
        className={({ is_active }) =>;
          cn (
            "text - sm font - medium transition - colors hover: text - primary",
            is_active ? "text - zion - cyan" : "text - muted - foreground");
=======
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground";
          );
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }
      >;
        Partner Program;
      </NavLink>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx

            isActive ? "text-zion-cyan" : "text-muted-foreground",;
========
<<<<<<< HEAD
            isActive ? "text-zion-cyan" : "text-muted-foreground",;
=======
      <NavLink;
        to="/signup";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground",;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

            "text-sm font-medium transition-colors hover:text-primary",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
<<<<<<< HEAD
            "text-sm font-medium transition-colors hover: text-primary"
=======
            "text-sm font-medium transition-colors hover:text-primary",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
            "text-sm font-medium transition-colors hover:text-primary",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            "text-sm font-medium transition-colors hover: text-primary"
=======
            "text-sm font-medium transition-colors hover:text-primary",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
<<<<<<< HEAD
          cn(
<<<<<<< HEAD
            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground"

=======
<<<<<<< HEAD
          cn(;
            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
          )
        }
      >
        Register
      </NavLink>
    </nav>
  )
}
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
          cn(
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );
        }
      >;
        Partner Program;
      </NavLink>;
      <NavLink;
        to="/signup";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground";
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
          );
        }
      >;
        Register;
      </NavLink>;
    </nav>;
  );
}
;
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/MainNavigation.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
