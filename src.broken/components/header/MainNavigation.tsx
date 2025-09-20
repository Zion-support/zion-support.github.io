
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        aria-label="Home"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Home
      </NavLink>

      {/* Services Dropdown */}"
      <div className="relative group">
        <button
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}"
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >"
          <Zap className="w-4 h-4"  />
          <span>Services</span>"
          <ChevronDown className="w-3 h-3"  />
