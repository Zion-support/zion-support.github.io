
import {Link, useLocation} from "react-router-dom";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
interface MainNavigationProps {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface MainNavigationProps {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function MainNavigation(): any ({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
<<<<<<< HEAD
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare } from "lucide-react",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface MainNavigationProps {
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string
}

<<<<<<< HEAD

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const links = [
    {
      name: "Home"
      href: "/"
      matches: (path: string) => path === "/"
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Marketplace"
      href: "/marketplace"
      matches: (path: string) => path.startsWith("/marketplace")
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Categories"
      href: "/categories"
      matches: (path: string) => path.startsWith("/categories")
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Talent"
      href: "/talent"
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Equipment"
      href: "/equipment"
      matches: (path: string) => path.startsWith("/equipment")
<<<<<<< HEAD
<<<<<<< HEAD
    }
    },
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    },


<<<<<<< HEAD
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Community"
      href: "/community"
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ],
  


<<<<<<< HEAD
  ];
  ],
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];
  ],
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const links = [;
    {;
      name: "Home",;
      href: "/",;
      matches: (path: string) => path === "/";
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: "Dashboard",;
      href: "/dashboard",;
      matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard";
    });
  }
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Add admin-only links;
  if (isAdmin) {;
    links && links.push({;
      name: "Analytics",;
      href: "/analytics",;
      matches: (path: string) => path && path.startsWith("/analytics");
    });
  }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <nav className={cn("ml-6 hidden md:flex", className)}>;
      <ul className="flex items-center gap-1">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              )}
            >
              {link.name}
            </Link>
          </li>
<<<<<<< HEAD
<<<<<<< HEAD
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",;
                link.matches(location.pathname);
                  ? "bg-zion-purple/20 text-zion-cyan";
                  :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";              )}
            >;
              {link.name}
            </Link>;
          </li>;
        ))}
        ;
        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;


                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"
        ))}
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        ))}



        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative";
                location.pathname === "/messages" |location.pathname === "/inbox"

                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
<<<<<<< HEAD
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        ))}



        {/* Messages link with unread counter */}
        {isAuthenticated && (;
          <li>;
            <Link
              to="/messages"
              className={cn(


                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"

=======
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                location.pathname === "/messages" || location.pathname === "/inbox"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            >;
=======
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <MessageSquare className="w-4 h-4 mr-1" />;
              Messages;
              {unreadCount > 0 && (;
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                  {unreadCount}
<<<<<<< HEAD


<<<<<<< HEAD
                </span>;              )}
=======

                </span>;
              )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </span>
              )}
            </Link>
          </li>
                </span>;
              )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Link>;
          </li>;



<<<<<<< HEAD
<<<<<<< HEAD
        )}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </ul>;
    </nav>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        )}

      </ul>;
    </nav>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
