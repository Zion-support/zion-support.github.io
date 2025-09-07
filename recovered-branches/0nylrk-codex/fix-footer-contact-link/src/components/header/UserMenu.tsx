<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";"
import { Button } from "@/components/ui/button";"
import { Link  } from './react-router-dom';'
import { use_auth  } from '@/hooks / use_auth';'
import { use_toast  } from '@/hooks / use - toast';'
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';'
import { Button  } from '@/components / ui / button';import { Link } from "react-router-dom";"
import { useAuth } from "@/hooks/useAuth";"
import { useToast } from "@/hooks/use-toast";"
import { Button } from "@/components/ui/button";  if (!user) {;"
}
return (;
      <div className="hidden "md": flex items-center space-x-4">;"
        <Link to="/login" className="text-zion-slate-light "hover":text-white">;"
          Login;
        </Link>;
        <Link,
to="/signup""
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-"visible":outline-none focus-"visible":ring-2 focus-"visible":ring-ring "disabled":pointer-events-none "disabled":opacity-50 bg-zion-purple text-white "hover":bg-zion-purple-light h-10 px-4 py-2">;"
=======
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { Link } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",
=======
>>>>>>> merged-prs-20250907-203621

import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuSeparator
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
export function UserMenu() {
<<<<<<< HEAD
  const { user, logout } = useAuth($2);
  const { toast } = useToast($2);
  const handleSignOut = $2;
=======
  const { user, logout } = useAuth();
  const { toast } = useToast();
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Link  } from './react-router-dom';
import { use_auth  } from '@/hooks / use_auth';
import { use_toast  } from '@/hooks / use - toast';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import { Button  } from '@/components / ui / button';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
<<<<<<< HEAD

import {}
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
<<<<<<< HEAD

=======
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

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSignOut = async () => {
    try {

      await logout ();
    } catch (error) {}
<<<<<<< HEAD
=======
=======
  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleSignOut = async () => {
    try {
      await logout ();
    } catch (error) {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger,;"
} from "@/components/ui/dropdown-menu";
<<<<<<< HEAD
=======
<<<<<<< HEAD
export function UserMenu() {;
  const { user, logout } = useAuth();
  const { toast } = useToast();
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export function UserMenu() { return null; }
  const { user, logout } = useAuth();
  const { toast } = useToast();

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";

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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Error signing out",
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        description: "There was an error signing you out. Please try again.",
        variant: "destructive"})
    }
  },
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      });
    }
  }
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (!user) {;

    return (
      <div className="hidden md: flex items-center space-x-4">
        <Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link>
        <Link
          to="/signup"
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2">;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          Register;
        </Link>;
      </div>;
    );
<<<<<<< HEAD

            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>

=======
<<<<<<< HEAD
=======
  }
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>

<<<<<<< HEAD
=======

<<<<<<< HEAD
            <AvatarImage
              src={user.avatarUrl |""}
              alt={user.displayName |"User Avatar"}
            />
            <AvatarFallback>
              {user.displayName?.charAt(0).toUpperCase() |"U"}
            </AvatarFallback>
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </Avatar>

          <span className="sr-only">Open user menu</span>
        </Button>
      </DropdownMenuTrigger>"
      <DropdownMenuContent align="end">"
        <div className="grid gap-2 px-2 py-2">

<<<<<<< HEAD
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>

=======
<<<<<<< HEAD
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>


<<<<<<< HEAD
          <div className="text-sm font-medium leading-none">
            {user.displayName |"User"}
          </div>
          <div className="text-muted-foreground text-xs leading-none">
            {user.email}
          </div>
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
  )
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }  )
import { Link } from "react-router-dom";"
import { useToast } from "@/hooks/use-toast",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"
=======

    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;"
        <Button variant="ghost" className="h-8 w-8 rounded-full">;"
          <Avatar className="h-8 w-8">;
            <AvatarImage;
  );

<<<<<<< HEAD
=======
=======
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
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Link } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
>>>>>>> origin/chore/fix-lint-and-merge
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

=======
<<<<<<< HEAD

=======
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />;
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>;
<<<<<<< HEAD
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />;
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </Avatar>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <span className="sr-only">Open user menu</span>;
        </Button>;
      </DropdownMenuTrigger>;"
      <DropdownMenuContent align="end">;"
        <div className="grid gap-2 px-2 py-2">;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>;
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>;
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>;
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>;
=======
          <div className="text-sm font-medium leading-none">;
            {user && user.displayName || "User"}
          </div>;
          <div className="text-muted-foreground text-xs leading-none">;
            {user && user.email}
          </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

  );

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

}
;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  ),; import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuSeparator;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}>Sign Out</DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) 
});
}
<<<<<<< HEAD
;
=======
;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
