
import {Link} from 'react-router-dom';
import { cn } from '@/lib / utils';
import { NavLink } from './react-router-dom';

=======


import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";

=======
import React from 'react',
import { Link } from 'react-router-dom',
import { cn } from "@/lib/utils",
import { NavLink } from "react-router-dom",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover: text-primary"
            "text-sm font-medium transition-colors hover:text-primary",
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
            "text-sm font-medium transition-colors hover: text-primary"
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
