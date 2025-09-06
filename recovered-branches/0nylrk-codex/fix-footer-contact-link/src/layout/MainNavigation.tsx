import {Link, useLocation} from "react-router-dom";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare} from "lucide-react";
import { Link, useLocation } from "react-router-dom",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare } from "lucide-react",
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation(): any ({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();




interface MainNavigationProps {
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string
}

  const links = [
    {
      name: "Home"
      href: "/"
      matches: (path: string) => path === "/"
    {
      name: "Marketplace"
      href: "/marketplace"
      matches: (path: string) => path.startsWith("/marketplace")
    {
      name: "Categories"
      href: "/categories"
      matches: (path: string) => path.startsWith("/categories")
    {
      name: "Talent"
      href: "/talent"
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")
    {
      name: "Equipment"
      href: "/equipment"
      matches: (path: string) => path.startsWith("/equipment")
    {
      name: "Community"
      href: "/community"
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      name: "Dashboard"
      href: "/dashboard"
      matches: (path: string) => path === "/dashboard" |path === "/client-dashboard" |path === "/talent-dashboard"
    })
  }
  // Add admin-only links
  if (isAdmin) {
    links.push({
      name: "Analytics"
      href: "/analytics"
      matches: (path: string) => path.startsWith("/analytics")
    })
  }
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;

        {links.map((link) => (;
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn(;
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors";
                link.matches(location.pathname);
                  ? "bg-zion-purple/20 text-zion-cyan";
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
              )}
            >
              {link.name}
            </Link>
          </li>
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;
        {links && links.map((link) => (;
          <li key={link && link.name}>;
            <Link
              to={link && link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors"
                link && link.matches(location && location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;
              {link && link.name}
            </Link>;
          </li>;
        ))}
        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;
            <Link
              to="/messages"
              className={cn(
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;
              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}
                </span>;
              )}
            </Link>;
          </li>;
        )}
import { Link, use_location } from './react-router-dom';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
import { MessageSquare } from './lucide-react';
interface MainNavigationProps {
  is_admin?: boolean;
  unread_count?: number;
  class_name?: string;
}
export /**
 * MainNavigation - Function description
 */
function MainNavigation() {
  const { user } = use_auth ();
  const is_authenticated = !!user;
  const location = use_location ();
;
  const links = [;
    {
      name: "Home",
      href: "/",
      matches: (path: string) => path === "/";
    }
    {
      name: "Marketplace",
      href: "/marketplace",
      matches: (path: string) => path.starts_with ("/marketplace");
    }
    {
      name: "Categories",
      href: "/categories",
      matches: (path: string) => path.starts_with ("/categories");
    }
    {
      name: "Talent",
      href: "/talent",
      matches: (path: string) => path.starts_with ("/talent") && !path.includes ("/talent - dashboard");
    }
    {
      name: "Equipment",
      href: "/equipment",
      matches: (path: string) => path.starts_with ("/equipment");
    }
    {
      name: "Community",
      href: "/community",
      matches: (path: string) => path.starts_with ("/community") || path.starts_with ("/forum");
    }
  ];
;
  // Add authenticated - only links;
  // Check condition
if ( {) {
  $2
}
    links.push ({
      name: "Dashboard",
      href: "/dashboard",
      matches: (path: string) => path === "/dashboard" || path === "/client - dashboard" || path === "/talent - dashboard";
    });
  }
  // Add admin - only links;
  // Check condition
if ( {) {
  $2
}
    links.push ({
      name: "Analytics",
      href: "/analytics",
      matches: (path: string) => path.starts_with ("/analytics");
    });
  }
  return (
    <nav className={cn ("ml - 6 hidden md:flex", class_name)}>;
      <ul className="flex items - center gap - 1">;
        {links.map ((link) => (
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn (
                "inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors";
                link.matches (location.pathname);
                  ? "bg - zion - purple / 20 text - zion - cyan";
                  : "text - white hover:bg - zion - purple / 10 hover:text - zion - cyan")}
            >;
              {link.name}
            </Link>;
          </li>))}
        {/* Messages link with unread counter */}
        {is_authenticated && (
          <li>;
            <Link;
              to="/messages";
              className={cn (
                "inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors relative";
                location.pathname === "/messages" || location.pathname === "/inbox";
                  ? "bg - zion - purple / 20 text - zion - cyan";
                  : "text - white hover:bg - zion - purple / 10 hover:text - zion - cyan")}
            >;
              <MessageSquare className="w - 4 h - 4 mr - 1" />;
              Messages;
              {unread_count > 0 && (
                <span className="absolute -top - 1 -right - 1 bg - zion - purple text - white text - xs rounded - full h - 5 w - 5 flex items - center justify - center">;
                  {unread_count}
                </span>)}
            </Link>;
          </li>)}
      </ul>;
    </nav>);
}
