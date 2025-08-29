import React from 'react';
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export function MainNavigation({ className }) {
    return (
      <nav className={cn("hidden md:flex items-center space-x-6", className)}>
        <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          Services
        </NavLink>
        <NavLink to="/marketplace" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          Marketplace
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          About
        </NavLink>
        <NavLink to="/support" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          Support
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          Contact
        </NavLink>
        <NavLink to="/pricing" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
          Pricing
        </NavLink>
      </nav>
    );
}
