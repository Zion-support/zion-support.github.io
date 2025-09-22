
import React from 'react',;
import { Link } from 'react-router-dom',;
import { cn } from "@/lib/utils",;
import { NavLink } from "react-router-dom",;
;
interface MainNavigationProps {;
  className?:string,;
}
;
export function MainNavigation({ className } MainNavigationProps) {;
  return (;
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>;
      <NavLink;
        to="/";
        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover:text-primary",;
            isActive ? "text-zion-cyan" :"text-muted-foreground";
          );
        }
      >;
        Home;
      </NavLink>;

        Categories;
      </Link>;
      <NavLink;
        to="/partners";

        }
      >;
        Partner Program;
      </NavLink>;

            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
          );
        }
      >;
        Register;
      </NavLink>;
    </nav>;
