<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx

<<<<<<< HEAD

import { Link, useLocation } from "react-router-dom",
import { cn } from "@/lib/utils",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Link, useLocation} from "react-router-dom";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
interface MainNavigationProps {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}
export function MainNavigation(): any ({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Link, useLocation } from "react-router-dom",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface MainNavigationProps {
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  const location = useLocation(),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const links = [
    {
      name: "Home"
      href: "/"
      matches: (path: string) => path === "/"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      name: "Marketplace"
      href: "/marketplace"
      matches: (path: string) => path.startsWith("/marketplace")
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      name: "Categories"
      href: "/categories"
      matches: (path: string) => path.startsWith("/categories")
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      name: "Talent"
      href: "/talent"
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
    }
    },
    {
      name: "Equipment"
      href: "/equipment"
      matches: (path: string) => path.startsWith("/equipment")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      name: "Equipment"
      href: "/equipment"
      matches: (path: string) => path.startsWith("/equipment")
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      name: "Community"
      href: "/community"
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

  ],
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ];
  ],
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Link, useLocation } from "react-router-dom",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare } from "lucide-react",;
interface MainNavigationProps {;
  isAdmin?: boolean,;
  unreadCount?: number,;
  className?: string;
}
;
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const location = useLocation(),;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const links = [;
    {;
      name: "Home",;
      href: "/",;
      matches: (path: string) => path === "/";
<<<<<<< HEAD
    };
    {;
      name: "Marketplace",;
      href: "/marketplace",;
      matches: (path: string) => path && path.startsWith("/marketplace");
    };
    {;
      name: "Categories",;
      href: "/categories",;
      matches: (path: string) => path && path.startsWith("/categories");
    };
    {;
      name: "Talent",;
      href: "/talent",;
      matches: (path: string) => path && path.startsWith("/talent") && !path && path.includes("/talent-dashboard");
    };
    {;
      name: "Equipment",;
      href: "/equipment",;
      matches: (path: string) => path && path.startsWith("/equipment");
    };
    {;
      name: "Community",;
      href: "/community",;
      matches: (path: string) => path && path.startsWith("/community") || path && path.startsWith("/forum");
    }
  ];
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links && links.push({;
=======
    },;
    {;
      name: "Marketplace",;
      href: "/marketplace",;
      matches: (path: string) => path.startsWith("/marketplace");
    },;
    {;
      name: "Categories",;
      href: "/categories",;
      matches: (path: string) => path.startsWith("/categories");
    },;
    {;
      name: "Talent",;
      href: "/talent",;
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard");
    },;
    {;
      name: "Equipment",;
      href: "/equipment",;
      matches: (path: string) => path.startsWith("/equipment");
    },;
    {;
      name: "Community",;
      href: "/community",;
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    }
  ],;
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links.push({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      name: "Dashboard",;
      href: "/dashboard",;
      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";
    });
  }
<<<<<<< HEAD
  // Add admin-only links;
  if (isAdmin) {;
    links && links.push({;
      name: "Analytics",;
      href: "/analytics",;
      matches: (path: string) => path && path.startsWith("/analytics");
    });
  }
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx

========
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
=======

import { Link, useLocation } from "react-router-dom",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare } from "lucide-react",;
;
interface MainNavigationProps {;
  isAdmin?:boolean,;
  unreadCount?:number,;
  className?:string,;
}
;
export function MainNavigation({ isAdmin = false, unreadCount = 0, className } MainNavigationProps) {;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const location = useLocation(),;
  ;
  const links = [;
    {;
      name:"Home",;
      href:"/",;
      matches:(path:string) => path === "/";
    },;
    {;
      name:"Marketplace",;
      href:"/marketplace",;
      matches:(path:string) => path.startsWith("/marketplace");
    },;
    {;
      name:"Categories",;
      href:"/categories",;
      matches:(path:string) => path.startsWith("/categories");
    },;
    {;
      name:"Talent",;
      href:"/talent",;
      matches:(path:string) => path.startsWith("/talent") && !path.includes("/talent-dashboard");
    },;
    {;
      name:"Equipment",;
      href:"/equipment",;
      matches:(path:string) => path.startsWith("/equipment");
    },;
    {;
      name:"Community",;
      href:"/community",;
      matches:(path:string) => path.startsWith("/community") || path.startsWith("/forum");
    }
  ],;
  ;
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links.push({;
      name:"Dashboard",;
      href:"/dashboard",;
      matches:(path:string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";
    }),;
  }
  ;
  // Add admin-only links;
  if (isAdmin) {;
    links.push({;
      name:"Analytics",;
      href:"/analytics",;
      matches:(path:string) => path.startsWith("/analytics");
    }),;
  }
  ;
  return (;
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
=======
;
  // Add admin-only links;
  if (isAdmin) {;
    links.push({;
      name: "Analytics",;
      href: "/analytics",;
      matches: (path: string) => path.startsWith("/analytics");
    });
  }
;
  return (;
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {links.map((link) => (;
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn(;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors";
                link.matches(location.pathname);
                  ? "bg-zion-purple/20 text-zion-cyan";
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              )}
            >
              {link.name}
            </Link>
          </li>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        ))}



========
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",;
                link.matches(location.pathname);
                  ? "bg-zion-purple/20 text-zion-cyan";
                  :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";              )}
            >;
              {link.name}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </Link>;
          </li>;
        ))}
        ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;
<<<<<<< HEAD
            <Link
              to="/messages"
              className={cn(
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
<<<<<<< HEAD

=======


                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"
=======
        ))}
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative";
                location.pathname === "/messages" |location.pathname === "/inbox"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;
=======
            <Link;
              to="/messages";
              className={cn(;
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",;
                location.pathname === "/messages" || location.pathname === "/inbox";
                  ? "bg-zion-purple/20 text-zion-cyan";
                  :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
              )}
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx

<<<<<<< HEAD
=======


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
                </span>;
              )}
=======
                </span>;              )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </Link>;
          </li>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
      </ul>;
    </nav>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/MainNavigation.tsx
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
=======
  ),;}
 interface MainNavigationProps {
  isAdmin?: boolean;
unreadCount?: number;
className?: string 
}export function MainNavigation ({
  isAdmin = false, unreadCount = 0, className 
}: MainNavigationProps) {
  const {
  user 
}= useAuth ();
const isAuthenticated = !!user;
const location = useLocation ();
const links = [ {
  name: "Home";
href: "/";
matches: (path: string) => path === "/" 
};
{
  name: "Marketplace";
href: "/marketplace";
matches: (path: string) => path.startsWith ("/marketplace") 
};
{
  name: "Categories";
href: "/categories";
matches: (path: string) => path.startsWith ("/categories") 
};
{
  name: "Talent";
href: "/talent";
matches: (path: string) => path.startsWith ("/talent") && !path.includes ("/talent-dashboard") 
};
{
  name: "Equipment";
href: "/equipment";
matches: (path: string) => path.startsWith ("/equipment") 
};
{
  name: "Community";
href: "/community";
matches: (path: string) => path.startsWith ("/community") || path.startsWith ("/forum") 
}];
//Add authenticated-only links if (isAuthenticated) {
  links.push ({
  
}//Add admin-only links if (isAdmin) {
  links.push ({
  
}return (<nav className= {
  cn ("ml-6 hidden md:flex", className) 
}> <ul className="flex items-center gap-1" > {
  links.map ( (link) => (<li key= {
  link.name 
}> <Link to= {
  link.href 
}className= {
  cn ("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors";
link.matches (location.pathname) ? "bg-zion-purple/20 text-zion-cyan" : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan" 
}> {
  link.name 
}</Link> </li>) ) 
}{
  /* Messages link with unread counter */ 
}{
  isAuthenticated && (<li> <Link to="/messages" className= {
  cn () 
}> <MessageSquare className="w-4 h-4 mr-1" /> Messages {
  unreadCount 
}</span>) 
}</Link> </li>) 
}</ul> </nav>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
                </span>;
              )}
            </Link>;
          </li>;
        )}
      </ul>
    </nav>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
