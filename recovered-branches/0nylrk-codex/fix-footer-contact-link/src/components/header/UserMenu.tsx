
<<<<<<< HEAD
=======
import { Link  } from './react-router-dom';
import { use_auth  } from '@/hooks / use_auth';
import { use_toast  } from '@/hooks / use - toast';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';

>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

<<<<<<< HEAD


=======
import {}
import {
import {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
<<<<<<< HEAD



=======

  const handleSignOut = async () => {
    try {

      await logout ();
    } catch (error) {}

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger,;"
} from "@/components/ui/dropdown-menu";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function UserMenu() { return null; }
  const { user, logout } = useAuth();
  const { toast } = useToast();

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleSignOut = async () => {;
    try {;
      await logout();
    } catch (error) {;
      toast({;"
        title: "Error signing out","
        description: "There was an error signing you out. Please try again.",;"
        variant: "destructive",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      });
    }
  }

  const handleSignOut = async () => {
    try {
      await logout()
    } catch (error) {
      toast({

<<<<<<< HEAD

        title: "Error signing out",

=======
        title: "Error signing out",
        title: "Error signing out",
>>>>>>> origin/cursor/delete-old-data-records-6bba
        description: "There was an error signing you out. Please try again.",
        variant: "destructive"})
    }
  },


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (!user) {;

    return (
      <div className="hidden md: flex items-center space-x-4">
        <Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link>
        <Link
          to="/signup"

          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2">;

<<<<<<< HEAD
=======
import { Link } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { ;
  DropdownMenu,;
  DropdownMenuContent, ;
  DropdownMenuItem, ;
  DropdownMenuSeparator, ;
  DropdownMenuTrigger ;
} from "@/components/ui/dropdown-menu",;
;
export function UserMenu() {;
  const { user, logout } = useAuth(),;
  const { toast } = useToast(),;
;
  const handleSignOut = async () => {;
    try {;
      await logout(),;
    } catch (error) {;
      toast({;
        title:"Error signing out",;
        description:"There was an error signing you out. Please try again.",;
        variant:"destructive"}),;
    }
  },;
;
  if (!user) {;
    return (;
      <div className="hidden md:flex items-center space-x-4">;
        <Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link>;
        <Link ;
          to="/signup" ;
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2";
        >;

>>>>>>> origin/cursor/delete-old-data-records-6bba
          Register;
        </Link>;
      </div>;
    );

<<<<<<< HEAD
  }
=======
  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Avatar>

          <span className="sr-only">Open user menu</span>
        </Button>
      </DropdownMenuTrigger>"
      <DropdownMenuContent align="end">"
        <div className="grid gap-2 px-2 py-2">


<<<<<<< HEAD
=======
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>"
          <Link to="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>"
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>"
          <Link to="/saved-talents">Saved Talents</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>"

          <Link to="/wallet">Wallet</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
<<<<<<< HEAD
=======

  }  )
import { Link } from "react-router-dom";"
import { useToast } from "@/hooks/use-toast",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Link } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
export function UserMenu() {;
  const { user, logout } = useAuth(),;
  const { toast } = useToast(),;
  const handleSignOut = async () => {;
    try {;
      await logout();
    } catch (error) {;
      toast({;
        title: "Error signing out",
        description: "There was an error signing you out. Please try again.";
        variant: "destructive"});
    }
  };
  if (!user) {;
    return (;
      <div className="hidden md: flex items-center space-x-4">;
        <Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link>;
        <Link;
          to="/signup";
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2";
        >;
          Register;
        </Link>;
      </div>;
    );
  }
;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button variant="ghost" className="h-8 w-8 rounded-full">;
          <Avatar className="h-8 w-8">;

<<<<<<< HEAD
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />;
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <span className="sr-only">Open user menu</span>;
        </Button>;
      </DropdownMenuTrigger>;"
      <DropdownMenuContent align="end">;"
        <div className="grid gap-2 px-2 py-2">;


        <DropdownMenuSeparator />;
        <DropdownMenuItem asChild>;"
          <Link to="/dashboard">Dashboard</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;"
          <Link to="/profile">Profile</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;"
          <Link to="/saved-talents">Saved Talents</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;"
          <Link to="/wallet">Wallet</Link>;
        </DropdownMenuItem>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;


  );

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast ({
        title: "Error signing out",
        description: "There was an error signing you out. Please try again.",

        variant: "destructive",
      });
    }

  }
;
  // Check condition;
if ( {) {}
  $2;
}

        >;
          Register;
        </Link>;
      </div>);
  }
  return (
    <DropdownMenu>;

              alt={user.display_name || "User Avatar"}
            />;
            <AvatarFallback>;"
              {user.display_name?.char_at (0).toUpperCase () || "U"}
            </AvatarFallback>;

            {user.email}
          </div>;
        </div>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem as_child>;"
          <Link to="/dashboard">Dashboard</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem as_child>;"
          <Link to="/profile">Profile</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem as_child>;"
          <Link to="/saved - talents">Saved Talents</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem as_child>;"
          <Link to="/wallet">Wallet</Link>;
        </DropdownMenuItem>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem on_click={handleSignOut}>Sign Out</DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>);
<<<<<<< HEAD



=======


}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
;
      toast({;"
        title: "Error signing out",""
        description: "There was an error signing you out. Please try again.",;""
        variant: "destructive",;")
      });
"
        title: "Error signing out",""
        description: "There was an error signing you out. Please try again.",""
        variant: "destructive"})"
  },

<<<<<<< HEAD




=======

  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuSeparator;


}>Sign Out</DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) 
});
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
