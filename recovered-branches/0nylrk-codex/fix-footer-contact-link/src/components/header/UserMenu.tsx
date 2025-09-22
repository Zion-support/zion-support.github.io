import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";"
import { Button } from "@/components/ui/button";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link  } from './react-router-dom';
import { use_auth  } from '@/hooks / use_auth';
import { use_toast  } from '@/hooks / use - toast';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
<<<<<<< HEAD
import { Button  } from '@/components / ui / button';
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
=======
"
import { Link } from "react-router-dom";"
import { useAuth } from "@/hooks/useAuth";"
import { useToast } from "@/hooks/use-toast";"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button";

import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const handleSignOut = async () => {
    try {
=======
import {}
  const handleSignOut = async () => {}
    try {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      await logout ();
    } catch (error) {}
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger,;"
} from "@/components/ui/dropdown-menu";

export function UserMenu() { return null; }
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {;
    try {;
      await logout();
    } catch (error) {;
      toast({;"
        title: "Error signing out",;"
        description: "There was an error signing you out. Please try again.",;"
        variant: "destructive",;

      });
    }
  }

const handleSignOut = async () => {
    try {
      await logout()
    } catch (error) {
      toast({

        title: "Error signing out",
        description: "There was an error signing you out. Please try again.",
        variant: "destructive"})
    }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (!user) {;
=======
import { Button  } from '@/components / ui / button';
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,

  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";

import {
  const handleSignOut = async () => {
    try {
      await logout ();
    } catch (error) {

import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuSeparator,;
  DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";

export function UserMenu() {;
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {;
    try {;
      await logout();
    } catch (error) {;
      toast({;
        title: "Error signing out",;
        description: "There was an error signing you out. Please try again.",;
        variant: "destructive",;

      });
    }
  }

        title: "Error signing out",
        description: "There was an error signing you out. Please try again.",
        variant: "destructive"})
    }
  },

      });
    }
  }
  if (!user) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
          Register;
        </Link>;
      </div>;
    );
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

    <DropdownMenu>
      <DropdownMenuTrigger asChild>"
        <Button variant="ghost" className="h-8 w-8 rounded-full">"
          <Avatar className="h-8 w-8">
<<<<<<< HEAD
<<<<<<< HEAD
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </Avatar>
=======
"
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />"
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>

          </Avatar>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <span className="sr-only">Open user menu</span>
        </Button>
      </DropdownMenuTrigger>"
      <DropdownMenuContent align="end">"
        <div className="grid gap-2 px-2 py-2">

          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>"
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Link to="/wallet">Wallet</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;"
        <Button variant="ghost" className="h-8 w-8 rounded-full">;"
          <Avatar className="h-8 w-8">;
            <AvatarImage;
  );
<<<<<<< HEAD
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )
=======

              src={user && user.avatarUrl || ""}
              alt={user && user.displayName || "User Avatar"}
            />;
            <AvatarFallback>;
              {user && user.displayName?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button variant="ghost" className="h-8 w-8 rounded-full">;
          <Avatar className="h-8 w-8">;
            <AvatarImage
  );
}
  )
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<AvatarImage          </Avatar>;
=======
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />;
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>;

          </Avatar>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <span className="sr-only">Open user menu</span>;
        </Button>;
      </DropdownMenuTrigger>;"
      <DropdownMenuContent align="end">;"
        <div className="grid gap-2 px-2 py-2">;
<div className="text-sm font-medium leading-none">;
            {user && user.displayName || "User"}
          </div>;
          <div className="text-muted-foreground text-xs leading-none">;
            {user && user.email}
</div>;        </div>;
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );

      toast ({
        title: "Error signing out",
        description: "There was an error signing you out. Please try again.",
=======

      toast ({"
        title: "Error signing out","
        description: "There was an error signing you out. Please try again.","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive",
      });
    }
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
;
  // Check condition;
if ( {) {}
  $2;
}
return (
      <div className="hidden md: flex items - center space-x-4">;
        <Link to="/login" className="text - zion - slate - light hover:text-white">;
          Login;
        </Link>;
        <Link;
          to="/signup";
<<<<<<< HEAD
          className="inline - flex items - center justify - center rounded - md text - sm font - medium ring - offset - background transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring disabled:pointer - events - none disabled:opacity - 50 bg - zion - purple text - white hover:bg - zion - purple - light h - 10 px - 4 py-2";
=======
          className="inline - flex items - center justify - center rounded - md text - sm font - medium ring - offset - background transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring disabled:pointer - events - none disabled:opacity - 50 bg - zion - purple text - white hover:bg - zion - purple - light h - 10 px - 4 py-2";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        >;
          Register;
        </Link>;
      </div>);
  }
  return (
    <DropdownMenu>;
<DropdownMenuTrigger as_child>;
        <Button variant="ghost" className="h - 8 w - 8 rounded-full">;
          <Avatar className="h - 8 w-8">;
            <AvatarImage;
              src={user.avatar_url || ""}
              alt={user.display_name || "User Avatar"}
            />;
            <AvatarFallback>;"
              {user.display_name?.char_at (0).toUpperCase () || "U"}
            </AvatarFallback>;
</Avatar>;
          <span className="sr-only">Open user menu</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end">;
        <div className="grid gap - 2 px - 2 py-2">;
          <div className="text - sm font - medium leading-none">;
            {user.display_name || "User"}
          </div>;
<<<<<<< HEAD
          <div className="text - muted - foreground text - xs leading-none">;
=======
          <div className="text - muted - foreground text - xs leading-none">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
;
}
;
      toast({;"
        title: "Error signing out",;""
        description: "There was an error signing you out. Please try again.",;""
        variant: "destructive",;")
      });
"
        title: "Error signing out",""
        description: "There was an error signing you out. Please try again.",""
        variant: "destructive"})"
  },

),; import {
<<<<<<< HEAD
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuSeparator;
DropdownMenuTrigger export function UserMenu () {}
  const {};
  user, logout;
}= useAuth ();
const {}
  toast;
}= useToast ();
const handleSignOut = async () => {}
  try {}
  await logout () 
}catch (error) {}
  toast ({}
}
};"
<Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link> /signup"className=" inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2"> Register </Link> </div> return (<DropdownMenu> <DropdownMenuTrigger asChild> </Avatar> <span className="sr-only">Open user menu</span> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"> <div className="grid gap-2 px-2 py-2"> </div> <DropdownMenuSeparator /> <DropdownMenuItem asChild> <Link to=" /dashboard">Dashboard</Link> </DropdownMenuItem> <DropdownMenuItem asChild> <Link to=" /profile">Profile</Link> </DropdownMenuItem> <DropdownMenuItem asChild> <Link to=" /saved-talents">Saved Talents</Link> </DropdownMenuItem> <DropdownMenuItem asChild> <Link to=" /wallet">Wallet</Link> </DropdownMenuItem> <DropdownMenuSeparator /> <DropdownMenuItem onClick= {}
  handleSignOut;
}>Sign Out</DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) 
}
=======

  if (!user) {;
    return ("
      <div className="hidden md: flex items-center space-x-4">;"
</div>"
        <Link to="/login" className="text-zion-slate-light hover:text-white">;"

        ;
        <Link;"
          to="/signup"""
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2">;"

      </div>;
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-full">"
          <Avatar className="h-8 w-8">"
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />"
)"
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}"
          <span className="sr-only">Open user menu</span>"
      <DropdownMenuContent align="end">"
        <div className="grid gap-2 px-2 py-2">"
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>""
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>"
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link to="/dashboard">Dashboard"
          <Link to="/profile">Profile"
          <Link to="/saved-talents">Saved Talents"
          <Link to="/wallet">Wallet"

        <DropdownMenuItem onClick={handleSignOut}>Sign Out
            <AvatarFallback>;

    <DropdownMenu>;

      <DropdownMenuTrigger asChild>;
        <Button variant="ghost" className="h-8 w-8 rounded-full">;"
          <Avatar className="h-8 w-8">;"

            <AvatarImage;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
}
;
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { Link } from "react-router-dom",;""
import { useAuth } from "@/hooks/useAuth",;""
import { useToast } from "@/hooks/use-toast",;""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;""
import { Button } from "@/components/ui/button",;"

import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;

  DropdownMenuSeparator,;
  DropdownMenuTrigger;"
} from "@/components/ui/dropdown-menu",;"
  const { user, logout } = useAuth(),;
  const { toast } = useToast(),;
        <Link to="/login" className="text-zion-slate-light hover:text-white">Login;"
          to="/signup";""
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2";"
        >;

            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />;"
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"};"
          ;"
          <span className="sr-only">Open user menu</span>;"
      <DropdownMenuContent align="end">;"
        <div className="grid gap-2 px-2 py-2">;"
          <div className="text-sm font-medium leading-none">;"
          </div>;"
          <div className="text-muted-foreground text-xs leading-none">;"
        <DropdownMenuSeparator />;

        <DropdownMenuItem asChild>;
          <Link to="/dashboard">Dashboard;"
          <Link to="/profile">Profile;"
          <Link to="/saved-talents">Saved Talents;"
          <Link to="/wallet">Wallet;"

        <DropdownMenuItem onClick={handleSignOut}>Sign Out;
      <div className="hidden md: flex items - center space - x-4">;"
        <Link to="/login" className="text - zion - slate - light hover:text - white">;"

          className="inline - flex items - center justify - center rounded - md text - sm font - medium ring - offset - background transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring disabled:pointer - events - none disabled:opacity - 50 bg - zion - purple text - white hover:bg - zion - purple - light h - 10 px - 4 py - 2";"

      </div>);

      <DropdownMenuTrigger as_child>;
        <Button variant="ghost" className="h - 8 w - 8 rounded - full">;"
          <Avatar className="h - 8 w - 8">;"

            <AvatarImage;"
              src={user.avatar_url || ""}""
              alt={user.display_name || "User Avatar"}"
            />;

          <span className="sr - only">Open user menu</span>;"
        <div className="grid gap - 2 px - 2 py - 2">;"
          <div className="text - sm font - medium leading - none">;"
          <div className="text - muted - foreground text - xs leading - none">;"

        <DropdownMenuItem as_child>;
          <Link to="/saved - talents">Saved Talents;"

        <DropdownMenuItem on_click={handleSignOut}>Sign Out;
    );"
<Link to="/login" className="text-zion-slate-light hover:text-white">Login /signup"className=" inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2"> Register  </div> return (<DropdownMenu> <DropdownMenuTrigger asChild>  <span className="sr-only">Open user menu</span>   <DropdownMenuContent align=" end"> <div className="grid gap-2 px-2 py-2"> </div> <DropdownMenuSeparator /> <DropdownMenuItem asChild> <Link to=" /dashboard">Dashboard  <DropdownMenuItem asChild> <Link to=" /profile">Profile  <DropdownMenuItem asChild> <Link to=" /saved-talents">Saved Talents  <DropdownMenuItem asChild> <Link to=" /wallet">Wallet  <DropdownMenuSeparator /> <DropdownMenuItem onClick= {"
  handleSignOut;)
}>Sign Out  ) "
pr-12325
}>Sign Out</DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) "

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
