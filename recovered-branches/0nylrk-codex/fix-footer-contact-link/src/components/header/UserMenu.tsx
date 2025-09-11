
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuSeparator
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
export function UserMenu() {
  const { user, logout } = useAuth();
  const { toast } = useToast();
<<<<<<< HEAD
=======

import { Link  } from './react-router-dom';
import { use_auth  } from '@/hooks / use_auth';
import { use_toast  } from '@/hooks / use - toast';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
<<<<<<< HEAD
<<<<<<< HEAD
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
;
export /**
 * UserMenu - Function description
 */
function UserMenu() {
  const { user, logout } = use_auth ();
  const { toast } = use_toast ();
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSignOut = async () => {
    try {
      await logout ();
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";
<<<<<<< HEAD
<<<<<<< HEAD
export function UserMenu() {;
  const { user, logout } = useAuth();
  const { toast } = useToast();
=======

export function UserMenu() {;
  const { user, logout } = useAuth();
  const { toast } = useToast();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleSignOut = async () => {;
    try {;
      await logout();
    } catch (error) {;
      toast({;
        title: "Error signing out",;
        description: "There was an error signing you out. Please try again.",;
        variant: "destructive",;
<<<<<<< HEAD
  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function UserMenu() {;
  const { user, logout } = useAuth();
  const { toast } = useToast();
import { Link } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",

export function UserMenu() {
  const { user, logout } = useAuth(),
  const { toast } = useToast(),

  const handleSignOut = async () => {
    try {
      await logout()
    } catch (error) {
      toast({
        title: "Error signing out"
        description: "There was an error signing you out. Please try again."
        variant: "destructive"
      });
    }
  }
<<<<<<< HEAD
=======

      });
    }
  }
=======
      toast({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Error signing out",
        description: "There was an error signing you out. Please try again.",
        variant: "destructive"})
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
      });
    }
  }
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!user) {;
    return (
      <div className="hidden md: flex items-center space-x-4">;
        <Link to="/login" className="text-zion-slate-light hover:text-white">;
          Login;
        </Link>;
        <Link
          to="/signup"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2">;
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Register;
        </Link>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD

  if (!user) {
    return (
      <div className="hidden md: flex items-center space-x-4">
        <Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link>
        <Link 
          to="/signup" 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2"
        >
          Register
        </Link>
      </div>
    )
  }
  return (
=======
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <AvatarImage
              src={user.avatarUrl |""}
              alt={user.displayName |"User Avatar"}
            />
            <AvatarFallback>
              {user.displayName?.charAt(0).toUpperCase() |"U"}
            </AvatarFallback>
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Avatar>
          <span className="sr-only">Open user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="grid gap-2 px-2 py-2">
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="text-sm font-medium leading-none">
            {user.displayName |"User"}
          </div>
          <div className="text-muted-foreground text-xs leading-none">
            {user.email}
          </div>
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/saved-talents">Saved Talents</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/wallet">Wallet</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
<<<<<<< HEAD
<<<<<<< HEAD
;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button variant="ghost" className="h-8 w-8 rounded-full">;
          <Avatar className="h-8 w-8">;
  );
}
=======

              src={user && user.avatarUrl || ""}
              alt={user && user.displayName || "User Avatar"}
            />;
            <AvatarFallback>;
              {user && user.displayName?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
import { Link } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
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
        title: "Error signing out",;
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
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />;
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>;
<<<<<<< HEAD
<<<<<<< HEAD
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />;
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Avatar>;
          <span className="sr-only">Open user menu</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end">;
        <div className="grid gap-2 px-2 py-2">;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>;
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>;
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>;
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="text-sm font-medium leading-none">;
            {user && user.displayName || "User"}
          </div>;
          <div className="text-muted-foreground text-xs leading-none">;
            {user && user.email}
          </div>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem asChild>;
          <Link to="/dashboard">Dashboard</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;
          <Link to="/profile">Profile</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;
          <Link to="/saved-talents">Saved Talents</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;
          <Link to="/wallet">Wallet</Link>;
        </DropdownMenuItem>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast ({
        title: "Error signing out",
        description: "There was an error signing you out. Please try again.",
        variant: "destructive",
      });
    }
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="hidden md: flex items - center space - x-4">;
        <Link to="/login" className="text - zion - slate - light hover:text - white">;
          Login;
        </Link>;
        <Link;
          to="/signup";
          className="inline - flex items - center justify - center rounded - md text - sm font - medium ring - offset - background transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring disabled:pointer - events - none disabled:opacity - 50 bg - zion - purple text - white hover:bg - zion - purple - light h - 10 px - 4 py - 2";
        >;
          Register;
        </Link>;
      </div>);
  }
  return (
    <DropdownMenu>;
      <DropdownMenuTrigger as_child>;
        <Button variant="ghost" className="h - 8 w - 8 rounded - full">;
          <Avatar className="h - 8 w - 8">;
            <AvatarImage;
              src={user.avatar_url || ""}
              alt={user.display_name || "User Avatar"}
            />;
            <AvatarFallback>;
              {user.display_name?.char_at (0).toUpperCase () || "U"}
            </AvatarFallback>;
          </Avatar>;
          <span className="sr - only">Open user menu</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end">;
        <div className="grid gap - 2 px - 2 py - 2">;
          <div className="text - sm font - medium leading - none">;
            {user.display_name || "User"}
          </div>;
          <div className="text - muted - foreground text - xs leading - none">;
            {user.email}
          </div>;
        </div>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem as_child>;
          <Link to="/dashboard">Dashboard</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem as_child>;
          <Link to="/profile">Profile</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem as_child>;
          <Link to="/saved - talents">Saved Talents</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem as_child>;
          <Link to="/wallet">Wallet</Link>;
        </DropdownMenuItem>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem on_click={handleSignOut}>Sign Out</DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>);
<<<<<<< HEAD
}
;

<<<<<<< HEAD
  ),; import {
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuSeparator;
DropdownMenuTrigger export function UserMenu () {
  const {
  user, logout 
}= useAuth ();
const {
  toast 
}= useToast ();
const handleSignOut = async () => {
  try {
  await logout () 
}catch (error) {
  toast ({
  
}
};
<Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link> /signup"className=" inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2"> Register </Link> </div> return (<DropdownMenu> <DropdownMenuTrigger asChild> </Avatar> <span className="sr-only">Open user menu</span> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"> <div className="grid gap-2 px-2 py-2"> </div> <DropdownMenuSeparator /> <DropdownMenuItem asChild> <Link to=" /dashboard">Dashboard</Link> </DropdownMenuItem> <DropdownMenuItem asChild> <Link to=" /profile">Profile</Link> </DropdownMenuItem> <DropdownMenuItem asChild> <Link to=" /saved-talents">Saved Talents</Link> </DropdownMenuItem> <DropdownMenuItem asChild> <Link to=" /wallet">Wallet</Link> </DropdownMenuItem> <DropdownMenuSeparator /> <DropdownMenuItem onClick= {
  handleSignOut 
}>Sign Out</DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) 
}
  );
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
=======
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
