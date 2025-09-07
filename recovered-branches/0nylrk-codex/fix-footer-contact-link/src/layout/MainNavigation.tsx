<<<<<<< HEAD
=======
import { MessageSquare } from "lucide-react",
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}
export function MainNavigation(): any ({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare } from "lucide-react",
=======

interface MainNavigationProps {

  isAdmin?: boolean,
  unreadCount?: number,
  className?: string;
}

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
<<<<<<< HEAD
    }
    },
=======

    },

    {
      name: "Community"
      href: "/community"

      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }

  ],

<<<<<<< HEAD
  ];
  ],
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Add authenticated-only links

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
>>>>>>> origin/chore/fix-lint-and-merge

  if (isAuthenticated) {
    links.push({
<<<<<<< HEAD

    })
  }
  // Add admin-only links,
if (isAdmin) {
    }
    links.push({

        {links.map((link) => (
          <li key={link.name}>
            <Link,
to={link.href}
              className={cn(

=======
      name: "Dashboard"
      href: "/dashboard"

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
=======

  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>

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
<<<<<<< HEAD
=======

  const links = [;
    {;
      name: "Home",;
      href: "/",;
      matches: (path: string) => path === "/";
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
    }
  ];

  // Add authenticated-only links;
<<<<<<< HEAD

    });
  }
<<<<<<< HEAD
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
=======

  // Add admin-only links;

          <li key={link && link.name}>;
            <Link,
to={link && link.href}
              className={cn(

    }
  ],
  // Add authenticated-only links;

    });
  }
  return (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {links.map((link) => (;
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn(;
=======
  if (isAuthenticated) {;
    links && links.push({;
      name: "Dashboard",;
      href: "/dashboard",;

      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";
    });
  }

  return (

    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;

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

              )}
            >

          <li>;

                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"

                  ? "bg-zion-purple/20 text-zion-cyan"

                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;

                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              )}
            >
              {link.name}
            </Link>
<<<<<<< HEAD
          </li>
        ))}
        {isAuthenticated && (;
          <li>;
            <Link

              className={cn(            </Link>;
=======

>>>>>>> origin/chore/fix-lint-and-merge
          </li>;
        ))}
        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;
<<<<<<< HEAD
            <Link
=======
            <Link"
              to="/messages"
              className={cn("
                  ? "bg-zion-purple/20 text-zion-cyan""
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;

              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;"
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}

                </span>;
>>>>>>> origin/chore/fix-lint-and-merge

              )}

            </Link>;
          </li>;

        )}

import { Link, use_location } from './react-router-dom';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';

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

                </span>;
              )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </Link>;
          </li>;
        )}
      </ul>
    </nav>
  )
}

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
<<<<<<< HEAD
  );
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to = $2;
                location.pathname === /messages" || location.pathname === "/inbox
                  ? bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
              )}
            >
              <MessageSquare className=w-4 h-4 mr-1" />
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