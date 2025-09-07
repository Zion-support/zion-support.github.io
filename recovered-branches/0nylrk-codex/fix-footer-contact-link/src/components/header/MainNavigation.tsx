<<<<<<< HEAD
<<<<<<< HEAD

=======
import React from 'react';
import { Link  } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
interface MainNavigationProps {
  className?: string
}
export function MainNavigation({ className }: MainNavigationProps) {
  return (

    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to = $2;
            isActive ? "text-zion-cyan" : "text-muted-foreground"
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
import { Link  } from 'react-router-dom';

import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

import { NavLink } from './react-router-dom';

<<<<<<< HEAD
=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';



import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";

<<<<<<< HEAD

import React from 'react';
import { Link  } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react',
import { Link } from 'react-router-dom',
import { cn } from "@/lib/utils",
import { NavLink } from "react-router-dom",
<<<<<<< HEAD

=======
<<<<<<< HEAD
interface MainNavigationProps {
  className?: string
}
export function MainNavigation({ className }: MainNavigationProps) {
  return (

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface MainNavigationProps {
  className?: string

}
export function MainNavigation({ className }: MainNavigationProps) {}
  return (

interface MainNavigationProps {};
  class_name?: string;
}

        className={({ isActive }) =>;

          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
>>>>>>> origin/chore/fix-lint-and-merge
          );
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export /**
 * MainNavigation - Function description

 */
<<<<<<< HEAD
function MainNavigation() {

=======
function MainNavigation() {}
  return ("
    <nav className={cn ("hidden md:flex items - center space - x-6", class_name)}>;
      <NavLink;"
        to="/";
        className={({ is_active }) =>;
          cn ("
            "text - sm font - medium transition - colors hover: text - primary","
            is_active ? "text - zion - cyan" : "text - muted - foreground");

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      >;
        Home;
      </NavLink>;

        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );

<<<<<<< HEAD
=======
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
        }
      >;
        Home;
      </NavLink>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      <Link to="/categories" className="text - zion - slate - light hover:text - white transition - colors">;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        Categories;
      </Link>;
      <NavLink;"
        to="/partners";
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          );
        }
      >;
        Register;
      </NavLink>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </nav>;

        to="/signup";
        className={({ is_active }) =>;
          cn ("
            "text - sm font - medium transition - colors hover: text - primary";"
            is_active ? "text - zion - cyan" : "text - muted - foreground","
            "bg - zion - purple px - 4 py - 2 rounded - md hover:bg - zion - purple - light");
        }
      >;
        Register;
      </NavLink>;
    </nav>);
}

"
            "text-sm font-medium transition-colors hover:text-primary",

            isActive ? "text-zion-cyan" : "text-muted-foreground",;
<<<<<<< HEAD
=======
=======
      <NavLink;
        to="/signup";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
>>>>>>> origin/chore/fix-lint-and-merge
          );
        }
      >;
        Register;
      </NavLink>;
    </nav>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <NavLink;

        }
      >;
        Register;
      </NavLink>;
    </nav>);
}

<<<<<<< HEAD
=======
            "text-sm font-medium transition-colors hover:text-primary",

<<<<<<< HEAD

    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover: text-primary"
            "text-sm font-medium transition-colors hover:text-primary",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            isActive ? "text-zion-cyan" : "text-muted-foreground"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          )
        }
      >
        Home
      </NavLink>
<<<<<<< HEAD
      <Link to = $2;
=======
<<<<<<< HEAD
=======
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

<<<<<<< HEAD
=======

            isActive ? "text-zion-cyan" : "text-muted-foreground"
=======
            "text-sm font-medium transition-colors hover: text-primary"
            "text-sm font-medium transition-colors hover:text-primary",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
<<<<<<< HEAD
        Partner Program
      </NavLink>
      <NavLink
        to = $2;
=======
        Home;
      </NavLink>"
      <Link to="/talent" className="text-zion-slate-light hover:text-white transition-colors">
        Find Talent;
      </Link>"
      <Link to="/services" className="text-zion-slate-light hover:text-white transition-colors">
        Services;
      </Link>"
      <Link to="/equipment" className="text-zion-slate-light hover:text-white transition-colors">
        Equipment;
      </Link>"
      <Link to="/blog" className="text-zion-slate-light hover:text-white transition-colors">
        Blog;
      </Link>"
      <Link to="/categories" className="text-zion-slate-light hover:text-white transition-colors">
        Categories;
      </Link>
      <NavLink"
        to="/partners"
        className={({ isActive }) =>
          cn(

            isActive ? "text-zion-cyan" : "text-muted-foreground"
>>>>>>> origin/chore/fix-lint-and-merge
          )
        }
      >
        Partner Program;
      </NavLink>
      <NavLink"
        to="/signup"
        className={({ isActive }) =>
<<<<<<< HEAD
          cn(
            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground"

          cn(;
            "text-sm font-medium transition-colors hover: text-primary";
>>>>>>> merged-prs-20250907-203621
            isActive ? "text-zion-cyan" : "text-muted-foreground",
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          )
        }
      >
        Home;
      </NavLink>"
      <Link to="/talent" className="text-zion-slate-light hover:text-white transition-colors">
        Find Talent;
      </Link>"
      <Link to="/services" className="text-zion-slate-light hover:text-white transition-colors">
        Services;
      </Link>"
      <Link to="/equipment" className="text-zion-slate-light hover:text-white transition-colors">
        Equipment;
      </Link>"
      <Link to="/blog" className="text-zion-slate-light hover:text-white transition-colors">
        Blog;
      </Link>"
      <Link to="/categories" className="text-zion-slate-light hover:text-white transition-colors">
        Categories;
      </Link>
      <NavLink"
        to="/partners"
        className={({ isActive }) =>
          cn(

            isActive ? "text-zion-cyan" : "text-muted-foreground"
>>>>>>> origin/chore/fix-lint-and-merge
          )
        }
      >
        Partner Program;
      </NavLink>
      <NavLink"
        to="/signup"
        className={({ isActive }) =>

          cn(
            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground"

          cn(;

            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground",

            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
          )
        }
      >
        Register;

      </NavLink>
    </nav>
  )
}
<<<<<<< HEAD
;
=======
          cn(
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
=======

          cn(
            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground"

<<<<<<< HEAD
          cn(;

            "text-sm font-medium transition-colors hover: text-primary";
            isActive ? "text-zion-cyan" : "text-muted-foreground",

            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
          )
        }
      >
        Register;

      </NavLink>
    </nav>
  )
}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
=======
        }
      >;
        Home;
      </NavLink>;
        Categories;
      </Link>;
      <NavLink;"
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
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
