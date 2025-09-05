<<<<<<< HEAD
import React from 'react',;
import Link from 'next/link',;
import { useAuth } from '@/hooks/useAuth',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
  DropdownMenuSeparator,;
  DropdownMenuLabel} from '@/components/ui/dropdown-menu',;
import { User as UserIcon, Package } from 'lucide-react';
import { LogOut } from 'lucide-react', // Assuming lucide-react is used;
;
export const AvatarMenu:React.FC = () => {;
  const { user, logout, avatarUrl } = useAuth(),;
;
  if (!user) return null,;
;
  const initials = (user.displayName || user.name || 'U').charAt(0).toUpperCase(),;
;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild data-testid="avatar-menu-trigger">;
        <button;
          className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
          aria-label="Open user menu";
        >;
          <Avatar className="h-8 w-8">;
            {avatarUrl ? (;
              <AvatarImage src={avatarUrl} alt={user.displayName || user.name || 'User avatar'} />;
            ) :(;
              <AvatarFallback>{initials}</AvatarFallback>;
            )}
          </Avatar>;
        </button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent className="w-56" align="end" data-testid="avatar-menu-content">;
        <DropdownMenuLabel className="font-normal">;
          <div className="flex flex-col space-y-1">;
            <p className="text-sm font-medium leading-none">;
              {user.displayName || user.name}
            </p>;
            {user.email && (;
              <p className="text-xs leading-none text-muted-foreground">;
                {user.email}
              </p>;
            )}
          </div>;
        </DropdownMenuLabel>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem asChild>;
          <Link href="/profile" className="flex items-center">;
            <UserIcon className="mr-2 h-4 w-4" />;
            <span>Profile</span>;
          </Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;
          <Link href="/orders" className="flex items-center">;
            <Package className="mr-2 h-4 w-4" />;
            <span>Orders</span>;
          </Link>;
        </DropdownMenuItem>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={logout} className="flex items-center cursor-pointer">;
          <LogOut className="mr-2 h-4 w-4" />;
          <span>Logout</span>;
        </DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;
  ),;
},;
;
export default AvatarMenu,;
=======
import React from 'react',
import Link from 'next/link',
import { useAuth } from '@/hooks/useAuth',
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel} from '@/components/ui/dropdown-menu',
import { User as UserIcon, Package } from 'lucide-react'
import { LogOut } from 'lucide-react', // Assuming lucide-react is used

export const AvatarMenu: React.FC = () => {
  const { user, logout, avatarUrl } = useAuth(),
  if (!user) return null,

  const initials = (user.displayName || user.name || 'U').charAt(0).toUpperCase(),
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid=&quot;avatar-menu-trigger&quot;>
        <button
          className=&quot;flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2&quot;
          aria-label=&quot;Open user menu&quot;
        >
          <Avatar className=&quot;h-8 w-8&quot;>
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={user.displayName || user.name || 'User avatar'} />            ) : (
              <AvatarFallback>{_initials}</AvatarFallback>
            )}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=&quot;w-56&quot; align=&quot;end&quot; data-testid=&quot;avatar-menu-content&quot;>
        <DropdownMenuLabel className=&quot;font-normal&quot;>
          <div className=&quot;flex flex-col space-y-1&quot;>
            <p className=&quot;text-sm font-medium leading-none&quot;>
              {user.displayName || user.name}
            </p>
            {user.email && (
              <p className=&quot;text-xs leading-none text-muted-foreground&quot;>                {user.email}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href=&quot;/profile&quot; className=&quot;flex items-center&quot;>
            <UserIcon className=&quot;mr-2 h-4 w-4&quot; />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href=&quot;/orders&quot; className=&quot;flex items-center&quot;>
            <Package className=&quot;mr-2 h-4 w-4&quot; />
            <span>Orders</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className=&quot;flex items-center cursor-pointer&quot;>
          <LogOut className=&quot;mr-2 h-4 w-4&quot; />          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
},

export default AvatarMenu,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
