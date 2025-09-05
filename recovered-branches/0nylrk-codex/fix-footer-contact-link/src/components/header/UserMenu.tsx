
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
=======
import { Link } from &quot;react-router-dom&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
<<<<<<< HEAD
} from "@/components/ui/dropdown-menu",
=======
} from &quot;@/components/ui/dropdown-menu&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function UserMenu() {
  const { user, logout } = useAuth(),
  const { toast } = useToast(),

  const handleSignOut = async () => {
    try {
      await logout()
    } catch (error) {
      toast({
<<<<<<< HEAD
        title: "Error signing out",
        description: "There was an error signing you out. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Error signing out&quot;,
        description: &quot;There was an error signing you out. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuSeparator, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

export function UserMenu() {_const { user, _logout} = useAuth();
  const {_toast} = useToast();

  const _handleSignOut = async () => {_try {
      await logout();} catch (error) {_toast({
        title: "Error signing out", _description: "There was an error signing you out. Please try again.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  if (!user) {
    return (
<<<<<<< HEAD
      <div className="hidden md: flex items-center space-x-4">
=======
  if (!user) {_return (
      <div className="hidden md:flex items-center space-x-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link>
=======
      <div className=&quot;hidden md:flex items-center space-x-4&quot;>
        <Link to=&quot;/login&quot; className=&quot;text-zion-slate-light hover:text-white&quot;>Login</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        <Link 
          to=&quot;/signup&quot; 
          className=&quot;inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2&quot;
        >
          Register
        </Link>
      </div>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
        <Button variant=&quot;ghost&quot; className=&quot;h-8 w-8 rounded-full&quot;>
          <Avatar className=&quot;h-8 w-8&quot;>
            <AvatarImage src={user.avatarUrl || "&quot;} alt={user.displayName || &quot;User Avatar&quot;} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || &quot;U"}</AvatarFallback>
=======
        <Button variant="ghost" className="h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={_user.avatarUrl || ""} alt={_user.displayName || "User Avatar"} />
            <AvatarFallback>{_user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Avatar>
          <span className="sr-only&quot;>Open user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align=&quot;end">
        <div className="grid gap-2 px-2 py-2">
<<<<<<< HEAD
          <div className="text-sm font-medium leading-none&quot;>{user.displayName || &quot;User"}</div>
          <div className="text-muted-foreground text-xs leading-none&quot;>{user.email}</div>
=======
          <div className="text-sm font-medium leading-none">{_user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{_user.email}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to=&quot;/dashboard&quot;>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to=&quot;/profile&quot;>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to=&quot;/saved-talents&quot;>Saved Talents</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to=&quot;/wallet">Wallet</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={_handleSignOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
