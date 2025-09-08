
<<<<<<< HEAD
=======
import { MessageSquare } from "lucide-react",
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation(): any ({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const links = [
    {
      name: "Home"
      href: "/"
      matches: (path: string) => path === "/"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      name: "Marketplace"
      href: "/marketplace"
      matches: (path: string) => path.startsWith("/marketplace")


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      name: "Categories"
      href: "/categories"
      matches: (path: string) => path.startsWith("/categories")


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      name: "Talent"
      href: "/talent"
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      name: "Equipment"
      href: "/equipment"
      matches: (path: string) => path.startsWith("/equipment")
<<<<<<< HEAD


=======

    },


    },


    },
    },

>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      name: "Community"
      href: "/community"

      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }


<<<<<<< HEAD

  ],



=======
  ],

  ];
  ],
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (isAuthenticated) {
    links.push({

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const links = [;
    {;
      name: "Home",;
      href: "/",;
      matches: (path: string) => path === "/";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  ];

  // Add authenticated-only links;

  if (isAuthenticated) {;
    links && links.push({;
<<<<<<< HEAD

      name: "Dashboard",;
      href: "/dashboard",;
      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";
=======
      name: "Dashboard",;
      href: "/dashboard",;
      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";

    });
  }
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    });
  }
<<<<<<< HEAD


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


=======
;
  return (;
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {links.map((link) => (;
          <li key={link.name}>;
            <Link;
              to={link.href}
              className={cn(;

  if (isAuthenticated) {;
    links && links.push({;
      name: "Dashboard",;
      href: "/dashboard",;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}
            >
              {link.name}
            </Link>
<<<<<<< HEAD


        ))}

=======
          </li>

        ))}
          </li>;
        ))}
        {/* Messages link with unread counter */}
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {isAuthenticated && (;
          <li>;
            <Link

<<<<<<< HEAD
              className={cn(            </Link>;

              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;"
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}

                </span>;



=======
                  ? "bg-zion-purple/20 text-zion-cyan"
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </Link>;
          </li>;


import { Link, use_location } from './react-router-dom';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
<<<<<<< HEAD
=======

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
              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;"
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}

                </span>;



                </span>;
              )}
            </Link>;
          </li>;

import { Link, use_location } from './react-router-dom';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD



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
>>>>>>> origin/cursor/delete-old-data-records-6bba
