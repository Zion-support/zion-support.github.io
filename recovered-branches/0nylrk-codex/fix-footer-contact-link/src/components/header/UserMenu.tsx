
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
import { Link  } from './react-router-dom';
import { use_auth  } from '@/hooks / use_auth';
import { use_toast  } from '@/hooks / use - toast';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
==============import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";



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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Register;
        </Link>;
      </div>;
    );
  }
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
=======
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>



              src={user && user.avatarUrl || ""}
              alt={user && user.displayName || "User Avatar"}
            />;
            <AvatarFallback>;
              {user && user.displayName?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>;
=======
=======
  );
}  )
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          </Avatar>;
          <span className="sr-only">Open user menu</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end">;
        <div className="grid gap-2 px-2 py-2">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  );

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
}
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
