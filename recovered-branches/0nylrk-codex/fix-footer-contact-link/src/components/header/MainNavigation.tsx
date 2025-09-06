

interface MainNavigationProps {
  className?: string
}
export function MainNavigation({ className }: MainNavigationProps) {
  return (


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface MainNavigationProps {
  class_name?: string;
}

import {Link} from 'react-router-dom';
import {cn} from "@/lib/utils";
import {NavLink} from "react-router-dom";
interface MainNavigationProps {;
  className?: string;
}

export function MainNavigation(): any ({ className }: MainNavigationProps) {;
  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>;
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
        }
      >;
        Home;
      </NavLink>;

        className={({ isActive }) =>;
          cn(;
            "text-sm font-medium transition-colors hover: text-primary",;
            isActive ? "text-zion-cyan" : "text-muted-foreground";
          );

=======
      <Link to="/talent" className="text - zion - slate - light hover:text - white transition - colors">;
        Find Talent;
      </Link>;
      <Link to="/services" className="text - zion - slate - light hover:text - white transition - colors">;
        Services;
      </Link>;
      <Link to="/equipment" className="text - zion - slate - light hover:text - white transition - colors">;
        Equipment;
      </Link>;
      <Link to="/blog" className="text - zion - slate - light hover:text - white transition - colors">;
        Blog;
      </Link>;
      <Link to="/categories" className="text - zion - slate - light hover:text - white transition - colors">;
        Categories;
      </Link>;
      <NavLink;
        to="/partners";
        className={({ is_active }) =>;
          cn (
            "text - sm font - medium transition - colors hover: text - primary",
            is_active ? "text - zion - cyan" : "text - muted - foreground");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
      >;
        Partner Program;
      </NavLink>;

            isActive ? "text-zion-cyan" : "text-muted-foreground",;
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light";
          );
        }
      >;
        Register;
      </NavLink>;
    </nav>;
  );
}

=======
      <NavLink;
        to="/signup";
        className={({ is_active }) =>;
          cn (
            "text - sm font - medium transition - colors hover: text - primary";
            is_active ? "text - zion - cyan" : "text - muted - foreground",
            "bg - zion - purple px - 4 py - 2 rounded - md hover:bg - zion - purple - light");
        }
      >;
        Register;
      </NavLink>;
    </nav>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

            "text-sm font-medium transition-colors hover:text-primary",
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Home
      </NavLink>
      <Link to="/talent" className="text-zion-slate-light hover:text-white transition-colors">
        Find Talent
      </Link>
      <Link to="/services" className="text-zion-slate-light hover:text-white transition-colors">
        Services
      </Link>
      <Link to="/equipment" className="text-zion-slate-light hover:text-white transition-colors">
        Equipment
      </Link>
      <Link to="/blog" className="text-zion-slate-light hover:text-white transition-colors">
        Blog
      </Link>
      <Link to="/categories" className="text-zion-slate-light hover:text-white transition-colors">
        Categories
      </Link>
      <NavLink
        to="/partners"
        className={({ isActive }) =>
          cn(

=======
            "text-sm font-medium transition-colors hover:text-primary",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Partner Program
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>

<<<<<<< HEAD
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
          )
        }
      >
        Register
      </NavLink>
    </nav>
  )
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
