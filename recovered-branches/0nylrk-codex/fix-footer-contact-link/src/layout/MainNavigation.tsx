<<<<<<< HEAD
import { MessageSquare } from "lucide-react",
;
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation(): any ({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface MainNavigationProps {
=======

interface MainNavigationProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string;
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const links = [
    {
      name: "Home"
      href: "/"
      matches: (path: string) => path === "/"

}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: "Marketplace"
      href: "/marketplace"
      matches: (path: string) => path.startsWith("/marketplace")

}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: "Categories"
      href: "/categories"
      matches: (path: string) => path.startsWith("/categories")

}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: "Talent"
      href: "/talent"
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")

}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: "Equipment"
      href: "/equipment"
      matches: (path: string) => path.startsWith("/equipment")

    },

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: "Community"
      href: "/community"
=======

    {"
      name: "Community""
      href: "/community""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ],

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Add authenticated-only links
=======
import { MessageSquare } from "lucide-react",  const links = [
=======
  const links = [
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      name: "Home"
      href: "/"
      matches: (path: string) => path === "/"

    },

    {
      name: "Marketplace"
      href: "/marketplace"
      matches: (path: string) => path.startsWith("/marketplace")

    },

    {
      name: "Categories"
      href: "/categories"
      matches: (path: string) => path.startsWith("/categories")

    },

    {
      name: "Talent"
      href: "/talent"
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")

    },

    {
      name: "Equipment"
      href: "/equipment"
matches: (path: string) => path.startsWith("/equipment")  // Add authenticated-only links
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      matches: (path: string) => path.startsWith("/equipment")

    },

    {
      name: "Community"
      href: "/community"
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }

  ],

  // Add authenticated-only links
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (isAuthenticated) {
    links.push({
      name: "Dashboard"
      href: "/dashboard"
=======

  // Add authenticated-only links;
  if (isAuthenticated) {}
    links.push({"
      name: "Dashboard""
      href: "/dashboard""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      matches: (path: string) => path === "/dashboard" |path === "/client-dashboard" |path === "/talent-dashboard"
    })
  }
  // Add admin-only links;
  if (isAdmin) {}
    links.push({"
      name: "Analytics""
      href: "/analytics""
      matches: (path: string) => path.startsWith("/analytics")
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>
=======

  return ("
    <nav className={cn("ml-6 hidden md:flex", className)}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.name}>
            <Link;
              to={link.href}
              className={cn("
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                link.matches(location.pathname)"
                  ? "bg-zion-purple/20 text-zion-cyan""
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
const links = [;
    {;
      name: "Home",;
      href: "/",;
      matches: (path: string) => path === "/";
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
      name: "Dashboard",;
      href: "/dashboard",;
      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";
    });
  }

// Add admin-only links;
  if (isAdmin) {;
    links && links.push({;
      name: "Analytics",;
      href: "/analytics",;
      matches: (path: string) => path && path.startsWith("/analytics");
    });
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;

=======        {links && links.map((link) => (;
=======
  return ("
    <nav className={cn("ml-6 hidden md:flex", className)}>;"
      <ul className="flex items-center gap-1">;

        {links && links.map((link) => (;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;

        {links && links.map((link) => (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <li key={link && link.name}>;
            <Link;
              to={link && link.href}
              className={cn("
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors"
                link && link.matches(location && location.pathname)"
                  ? "bg-zion-purple/20 text-zion-cyan""
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;
              {link && link.name}
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
        {links.map((link) => (;
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn(;
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors";
                link.matches(location.pathname);
                  ? "bg-zion-purple/20 text-zion-cyan";
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              )}
            >

          <li>;
<Link
              to="/messages"
<<<<<<< HEAD
<<<<<<< HEAD
              className={cn(

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;

=======
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
=======
            <Link;"
              to="/messages""
              className={cn(

                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"

"inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              )}
            >
              {link.name}
            </Link>
</li>"
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",;
                link.matches(location.pathname);"
                  ? "bg-zion-purple/20 text-zion-cyan";"
                  :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";              )}
            >;
              {link.name}

            </Link>;
=======
              className={cn(            </Link>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          </li>
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",;
                link.matches(location.pathname);
                  ? "bg-zion-purple/20 text-zion-cyan";
                  :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";              )}
            >;
              {link.name}
            </Link>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </li>;
        ))}
        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;
            <Link"
              to="/messages"
              className={cn("
                  ? "bg-zion-purple/20 text-zion-cyan""
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;
<Link;
              to="/messages";
              className={cn(;
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",;
                location.pathname === "/messages" || location.pathname === "/inbox";
                  ? "bg-zion-purple/20 text-zion-cyan";
                  :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
              )}
            >;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;"
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}
</span>;
=======
              )}                </span>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              )}
=======

                </span>;
              )}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </Link>;
          </li>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        )}

</ul>;
    </nav>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
import { Link, use_location } from './react-router-dom';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
=======

import { Link, use_location } from './react-router-dom';'
import { cn } from '@/lib / utils';'
import { use_auth } from '@/hooks / use_auth';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { MessageSquare } from './lucide-react';
interface MainNavigationProps {}
  is_admin?: boolean;
  unread_count?: number;
  class_name?: string;
}
export /**;
 * MainNavigation - Function description;
 */
function MainNavigation() {}
  const { user } = use_auth ();
  const is_authenticated = !!user;
  const location = use_location ();
;
  const links = [;
    {"
      name: "Home","
      href: "/","
      matches: (path: string) => path === "/";
    }
    {"
      name: "Marketplace","
      href: "/marketplace","
      matches: (path: string) => path.starts_with ("/marketplace");
    }
    {"
      name: "Categories","
      href: "/categories","
      matches: (path: string) => path.starts_with ("/categories");
    }
    {"
      name: "Talent","
      href: "/talent","
      matches: (path: string) => path.starts_with ("/talent") && !path.includes ("/talent - dashboard");
    }
    {"
      name: "Equipment","
      href: "/equipment","
      matches: (path: string) => path.starts_with ("/equipment");
    }
    {"
      name: "Community","
      href: "/community","
      matches: (path: string) => path.starts_with ("/community") || path.starts_with ("/forum");
    }
  ];
;
  // Add authenticated - only links;
  // Check condition;
if ( {) {}
  $2;
}
    links.push ({"
      name: "Dashboard","
      href: "/dashboard","
      matches: (path: string) => path === "/dashboard" || path === "/client - dashboard" || path === "/talent - dashboard";
    });
  }
  // Add admin - only links;
  // Check condition;
if ( {) {}
  $2;
}
    links.push ({"
      name: "Analytics","
      href: "/analytics","
      matches: (path: string) => path.starts_with ("/analytics");
    });
  }
  return ("
    <nav className={cn ("ml - 6 hidden md:flex", class_name)}>;"
      <ul className="flex items - center gap - 1">;
        {links.map ((link) => (
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn ("
                "inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors";
                link.matches (location.pathname);"
                  ? "bg - zion - purple / 20 text - zion - cyan";"
                  : "text - white hover:bg - zion - purple / 10 hover:text - zion - cyan")}
            >;
              {link.name}
            </Link>;
          </li>))}
        {/* Messages link with unread counter */}
        {is_authenticated && (
          <li>;
            <Link;"
              to="/messages";
              className={cn ("
                "inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors relative";"
                location.pathname === "/messages" || location.pathname === "/inbox";"
                  ? "bg - zion - purple / 20 text - zion - cyan";"
                  : "text - white hover:bg - zion - purple / 10 hover:text - zion - cyan")}
            >;"
              <MessageSquare className="w - 4 h - 4 mr - 1" />;
              Messages;
              {unread_count > 0 && ("
                <span className="absolute -top - 1 -right - 1 bg - zion - purple text - white text - xs rounded - full h - 5 w - 5 flex items - center justify - center">;
                  {unread_count}
                </span>)}
            </Link>;
          </li>)}
      </ul>;
    </nav>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                </span>;
              )}
            </Link>;
          </li>;
        )}
      </ul>
    </nav>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

          </li>;

              to="/messages";"
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",;""
                location.pathname === "/messages" || location.pathname === "/inbox";""
                  :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";")
            >;
              <MessageSquare className="w-4 h-4 mr-1" />;"
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;"
</span>
                </span>;
      </ul>;
    </nav>;"
    <nav className={cn ("ml - 6 hidden md:flex", class_name)}>;"
      <ul className="flex items - center gap - 1">;"
              className={cn ("
                "inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors";")
                link.matches (location.pathname);"
                  ? "bg - zion - purple / 20 text - zion - cyan";""
                  : "text - white hover:bg - zion - purple / 10 hover:text - zion - cyan")}"

</ul>;
    </nav>;
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
                "inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors relative";""
                  ? "bg - zion - purple / 20 text - zion - cyan";")"
              <MessageSquare className="w - 4 h - 4 mr - 1" />;"
                <span className="absolute -top - 1 -right - 1 bg - zion - purple text - white text - xs rounded - full h - 5 w - 5 flex items - center justify - center">;"
                </span>)}
          </li>)}
    </nav>);
}
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
}return (<nav className= {)"
  cn ("ml-6 hidden md:flex", className)""
}> <ul className="flex items-center gap-1" > {"
</nav>
  links.map ( (link) => (<li key= {
  link.name;
}> <Link to= {
</li>)
} </li>) ) "
  isAuthenticated && (<li> <Link to="/messages" className= {"
</li>"
}> <MessageSquare className="w-4 h-4 mr-1" /> Messages {"
)
}</span>) 
}</Link> </li>) 
}</ul> </nav>) 
}
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
