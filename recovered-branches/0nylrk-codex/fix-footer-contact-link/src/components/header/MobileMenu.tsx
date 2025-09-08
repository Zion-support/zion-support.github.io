<<<<<<< HEAD

unreadCount?: number;
export interface MobileMenuProps {;

export function MobileMenu(): any ({ unreadCount = 0, onClose }: MobileMenuProps) {;
  const location = useLocation();
  const { user } = useAuth();

  const isAuthenticated = !!user;


=======
unreadCount?: number;
export interface MobileMenuProps {;

  unreadCount?: number;}
  onClose: () => void;}
}
export function MobileMenu(): any ({ unreadCount = 0, onClose }: MobileMenuProps) {;}
  const location = useLocation();}
  const { user } = useAuth();
  const isAuthenticated = !!user;  unreadCount?: number,

  onClose: () => void;
}

export function MobileMenu(): any ({ unreadCount = 0, onClose }: MobileMenuProps) {;
  const location = useLocation();
  const { user } = useAuth();


import { Link } from "react-router-dom",
import { useLocation } from "react-router-dom",
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth",


import { Button } from "@/components/ui/button",

  const location = useLocation(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const navItems = [
    {
      name: "Home"

      href: "/"
      icon: Home"
      matches: (path: string) => path === "/"


<<<<<<< HEAD
=======
    {
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      name: "Post Job"
      href: "/post-job"
      icon: BriefcaseIcon
      matches: (path: string) => path.startsWith("/post-job")

<<<<<<< HEAD
      authRequired: true


    {



    {
      name: "Dashboard"



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  ],

  const navItems = [;

      matches: (path: string) => path && path.startsWith("/messages") || path && path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    };

      matches: (path: string) => path && path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ];
  ];
  // Filter items based on auth status
  const visibleItems = navItems.filter(item =>
    !item.authRequired |(item.authRequired && isAuthenticated)
  );
  ],

<<<<<<< HEAD

  // Filter items based on auth status
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

  return (

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Link

            key={item.name}
            to={item.href}
            className={cn(

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              item.matches(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"

            )}

            onClick={onClose}
          >

<<<<<<< HEAD
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">

=======

                  {item.badge > 9 ? '9+' : item.badge}
                </span>

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    },;

      matches: (path: string) => path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ],;
  // Filter items based on auth status;
  const visibleItems = navItems.filter(item =>;
    !item.authRequired || (item.authRequired && isAuthenticated);
  );
  return (;

<<<<<<< HEAD


          <X className="h-5 w-5" />;
        </Button>;
      </div>;


      <nav className="space-y-1">;


              "flex items-center px-6 py-3 text-base font-medium"
              item && item.matches(location && location.pathname)

                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
=======
          <X className="h-5 w-5" />;
        </Button>;
      </div>;

      <nav className="space-y-1">;

              "flex items-center px-6 py-3 text-base font-medium"
              item && item.matches(location && location.pathname)

          <Link

            key={item && item.name}
            to={item && item.href}
            className={cn(                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
>>>>>>> origin/cursor/delete-old-data-records-6bba

            )}
            onClick={onClose}>;"
            <div className="relative mr-4">;"
              <item && item.icon className="h-5 w-5" />;
              {item && item.badge && item && item.badge > 0 && (;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}

                </span>;
<<<<<<< HEAD



              )}
            </div>;
            {item.name}

=======
    <div className="py-6">;
      <div className="flex justify-between items-center px-6 mb-6">;
        <h2 className="text-xl font-bold">Menu</h2>;
        <Button variant="ghost" size="icon" onClick={onClose}>;
          <X className="h-5 w-5" />;
        </Button>;
      </div>;
        {visibleItems && visibleItems.map(item => (;
          <Link
            key={item && item.name}
            to={item && item.href}
            className={cn(
              "flex items-center px-6 py-3 text-base font-medium"
              item && item.matches(location && location.pathname)

            )}
            onClick={onClose}>;"
            <div className="relative mr-4">;"
              <item && item.icon className="h-5 w-5" />;
              {item && item.badge && item && item.badge > 0 && (;"
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item && item.badge > 9 ? '9+' : item && item.badge}

                </span>;

            </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Link>;

            </div>;
          </Link>;

<<<<<<< HEAD



=======


      </nav>;
    </div>;



}
}
      </nav>;
    </div>;
  );

      </nav>;
    </div>;"
    <div className="py - 6">;"
      <div className="flex justify - between items - center px - 6 mb - 6">;"
        <h2 className="text - xl font - bold">Menu</h2>;""
        <Button variant="ghost" size="icon" on_click={on_close}>;"
          <X className="h - 5 w - 5" />;"

}
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Link } from './react-router-dom';
import { use_location } from './react-router-dom';
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';

import { Button } from '@/components / ui / button';
export interface MobileMenuProps {};
  unread_count?: number;
  on_close: () => void;
}
export /**;
 * MobileMenu - Function description;
 */
function MobileMenu() {}
  const location = use_location ();
  const { user } = use_auth ();
  const is_authenticated = !!user;
;

            on_click={on_close}
            <div className="relative mr - 4">;"
              <item.icon className="h - 5 w - 5" />;"
                <span className="absolute -top - 2 -right - 2 bg - zion - purple text - white text - xs rounded - full h - 4 w - 4 flex items - center justify - center">;"
</span>

                </span>)}
          ))}
    </div>);

<<<<<<< HEAD
}



=======

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
}) ) 
}</nav> </div>) 
              )}
            </div>
pr-12325
          </Link>
      </nav>
    </div>
      </nav>;
      </nav>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
