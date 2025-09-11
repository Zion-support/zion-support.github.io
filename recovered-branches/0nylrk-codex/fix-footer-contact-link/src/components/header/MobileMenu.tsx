
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle} from "lucide-react";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
export interface MobileMenuProps {;
  unreadCount?: number;
  onClose: () => void;
}


=======


export interface MobileMenuProps {
  unreadCount?: number,
  onClose: () => void
}

export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {
  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,

  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const navItems = [
    {
      name: "Home"
      href: "/"
      icon: Home
      matches: (path: string) => path === "/"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    },
    {
      name: "Browse",
      href: "/talent",
      icon: Search,
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
    },
    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")
    },
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Post Job"
      href: "/post-job"
      icon: BriefcaseIcon
      matches: (path: string) => path.startsWith("/post-job")
      authRequired: true

    }
    },
=======

    },

=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Messages"
      href: "/messages"
      icon: MessageSquare
      matches: (path: string) => path.startsWith("/messages") |path.startsWith("/inbox")
      badge: unreadCount
      authRequired: true

    }
    },
=======

    },

=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Dashboard"
      href: "/dashboard"
      icon: User
      matches: (path: string) => path.startsWith("/dashboard")
      authRequired: true
    }
  ],


  const navItems = [;
    {;
      name: "Home",;
      href: "/",;
      icon: Home,;
      matches: (path: string) => path === "/";
    };
    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
      matches: (path: string) => path && path.startsWith("/talent") || path && path.startsWith("/categories") || path && path.startsWith("/marketplace");
    };
    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
      matches: (path: string) => path && path.startsWith("/community") || path && path.startsWith("/forum");
    };
    {;
      name: "Post Job",;
      href: "/post-job",;
      icon: BriefcaseIcon,;
      matches: (path: string) => path && path.startsWith("/post-job"),;
      authRequired: true;
    };
    {;
      name: "Messages",;
      href: "/messages",;
      icon: MessageSquare,;
      matches: (path: string) => path && path.startsWith("/messages") || path && path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    };
    {;
      name: "Dashboard",;
      href: "/dashboard",;
      icon: User,;
      matches: (path: string) => path && path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ];
=======  ];
  // Filter items based on auth status
  const visibleItems = navItems.filter(item =>
    !item.authRequired |(item.authRequired && isAuthenticated)
  );
  ],

  return (
==============

  return (

=======          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center px-6 py-3 text-base font-medium";

              "flex items-center px-6 py-3 text-base font-medium",
=======

              "flex items-center px-6 py-3 text-base font-medium",
=======
              "flex items-center px-6 py-3 text-base font-medium";

              "flex items-center px-6 py-3 text-base font-medium",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              item.matches(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
            onClick={onClose}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
=======
=======
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Link } from "react-router-dom",;
import { useLocation } from "react-router-dom",;
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
export interface MobileMenuProps {;
  unreadCount?: number,;
  onClose: () => void;
}
;
export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {;
  const location = useLocation(),;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const navItems = [;
    {;
      name: "Home",;
      href: "/",;
      icon: Home,;
      matches: (path: string) => path === "/";
    },;
    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
    {;
      name: "Post Job",;
      href: "/post-job",;
      icon: BriefcaseIcon,;
      matches: (path: string) => path.startsWith("/post-job"),;
      authRequired: true;
    },;
    {;
      name: "Messages",;
      href: "/messages",;
      icon: MessageSquare,;
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    },;
    {;
      name: "Dashboard",;
      href: "/dashboard",;
      icon: User,;
      matches: (path: string) => path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ],;
  // Filter items based on auth status;
  const visibleItems = navItems.filter(item =>;
    !item.authRequired || (item.authRequired && isAuthenticated);
  );
  return (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <div className="py-6">;
      <div className="flex justify-between items-center px-6 mb-6">;
        <h2 className="text-xl font-bold">Menu</h2>;
        <Button variant="ghost" size="icon" onClick={onClose}>;
          <X className="h-5 w-5" />;
        </Button>;
      </div>;
      <nav className="space-y-1">;
              "flex items-center px-6 py-3 text-base font-medium"
              item && item.matches(location && location.pathname)
=======

      <nav className="space-y-1">;

              "flex items-center px-6 py-3 text-base font-medium"
              item && item.matches(location && location.pathname)

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
            onClick={onClose}>;
            <div className="relative mr-4">;
              <item && item.icon className="h-5 w-5" />;
              {item && item.badge && item && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              )}
            </div>;
            {item.name}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              )}
            </div>;
            {item && item.name}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Link>;
        ))}





}
=======
=======
=======
      </nav>;
    </div>;
  );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Link } from './react-router-dom';
import { use_location } from './react-router-dom';
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
export interface MobileMenuProps {
  unread_count?: number;
  on_close: () => void;
}
export /**
 * MobileMenu - Function description
 */
function MobileMenu() {
  const location = use_location ();
  const { user } = use_auth ();
  const is_authenticated = !!user;
;
<<<<<<< HEAD
  const nav_items = [;
    {
      name: "Home",
      href: "/",
      icon: Home,
      matches: (path: string) => path === "/";
    }
    {
      name: "Browse",
      href: "/talent",
      icon: Search,
      matches: (path: string) => path.starts_with ("/talent") || path.starts_with ("/categories") || path.starts_with ("/marketplace");
    }
    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,
      matches: (path: string) => path.starts_with ("/community") || path.starts_with ("/forum");
    }
    {
      name: "Post Job",
      href: "/post - job",
      icon: BriefcaseIcon,
      matches: (path: string) => path.starts_with ("/post - job"),
      auth_required: true;
    }
    {
      name: "Messages",
      href: "/messages",
      icon: MessageSquare,
      matches: (path: string) => path.starts_with ("/messages") || path.starts_with ("/inbox"),
      badge: unread_count,
      auth_required: true;
    }
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
      matches: (path: string) => path.starts_with ("/dashboard"),
      auth_required: true;
    }
  ];
;
  // Filter items based on auth status;
  const visible_items = nav_items.filter (item =>;
    !item.auth_required || (item.auth_required && is_authenticated));
;
  return (
    <div className="py - 6">;
      <div className="flex justify - between items - center px - 6 mb - 6">;
        <h2 className="text - xl font - bold">Menu</h2>;
        <Button variant="ghost" size="icon" on_click={on_close}>;
          <X className="h - 5 w - 5" />;
        </Button>;
      </div>;
      <nav className="space - y-1">;
        {visible_items.map (item => (
          <Link;
            key={item.name}
            to={item.href}
            className={cn (
              "flex items - center px - 6 py - 3 text - base font - medium";
              item.matches (location.pathname);
                ? "bg - zion - purple / 20 text - zion - cyan border - l-4 border - zion - cyan";
                : "text - white hover:bg - zion - purple / 10 hover:text - zion - cyan")}
            on_click={on_close}
          >;
            <div className="relative mr - 4">;
              <item.icon className="h - 5 w - 5" />;
              {item.badge && item.badge > 0 && (
                <span className="absolute -top - 2 -right - 2 bg - zion - purple text - white text - xs rounded - full h - 4 w - 4 flex items - center justify - center">;
                  {item.badge > 9 ? '9+' : item.badge}
                </span>)}
            </div>;
            {item.name}
          </Link>))}
      </nav>;
    </div>);
}
<<<<<<< HEAD
  ),;}
 export interface MobileMenuProps {
  unreadCount?: number;
onClose: () => void 
}export function MobileMenu ({
  unreadCount = 0, onClose 
}: MobileMenuProps) {
  const location = useLocation ();
const {
  user 
}= useAuth ();
const isAuthenticated = !!user;
const navItems = [ {
  name: "Home";
href: "/";
icon: Home;
matches: (path: string) => path === "/" 
};
{
  name: "Browse";
href: "/talent";
icon: Search;
matches: (path: string) => path.startsWith ("/talent") || path.startsWith ("/categories") || path.startsWith ("/marketplace") 
};
{
  name: "Community";
href: "/community";
icon: MessageCircle;
matches: (path: string) => path.startsWith ("/community") || path.startsWith ("/forum") 
};
{
  name: "Post Job";
href: "/post-job";
icon: BriefcaseIcon;
matches: (path: string) => path.startsWith ("/post-job");
authRequired: true 
};
{
  name: "Messages";
href: "/messages";
icon: MessageSquare;
matches: (path: string) => path.startsWith ("/messages") || path.startsWith ("/inbox");
badge: unreadCount;
authRequired: true 
};
{
  name: "Dashboard";
href: "/dashboard";
icon: User;
matches: (path: string) => path.startsWith ("/dashboard");
authRequired: true 
}];
return () 
}onClick= {
  onClose 
}> {
  item.badge > 9 ? '9+' : item.badge 
}</span>) 
}</div> {
  item.name 
}</Link>) ) 
}</nav> </div>) 
}
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
      </nav>;
    </div>;
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
