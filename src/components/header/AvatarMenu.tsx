<<<<<<< HEAD
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
=======
import React from 'react';
import Link from 'next/link';
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger, _DropdownMenuSeparator, _DropdownMenuLabel} from '@/components/ui/dropdown-menu';

export const AvatarMenu: React.FC = () => {_const { user, _logout, _avatarUrl} = useAuth();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!user) return null,

<<<<<<< HEAD
  const initials = (user.displayName || user.name || 'U').charAt(0).toUpperCase(),
=======
  const _initials = (user.displayName || user.name || 'U').charAt(0).toUpperCase();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid=&quot;avatar-menu-trigger&quot;>
        <button
          className=&quot;flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2&quot;
          aria-label=&quot;Open user menu&quot;
        >
<<<<<<< HEAD
          <Avatar className=&quot;h-8 w-8&quot;>
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={user.displayName || user.name || 'User avatar'} />
=======
          <Avatar className="h-8 w-8">
            {_avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={_user.displayName || user.name || 'User avatar'} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ) : (
              <AvatarFallback>{_initials}</AvatarFallback>
            )}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
<<<<<<< HEAD
      <DropdownMenuContent className=&quot;w-56&quot; align=&quot;end&quot; data-testid=&quot;avatar-menu-content&quot;>
        <DropdownMenuLabel className=&quot;font-normal&quot;>
          <div className=&quot;flex flex-col space-y-1&quot;>
            <p className=&quot;text-sm font-medium leading-none&quot;>
              {user.displayName || user.name}
            </p>
            {user.email && (
              <p className=&quot;text-xs leading-none text-muted-foreground&quot;>
=======
      <DropdownMenuContent className="w-56" align="end" data-testid="avatar-menu-content">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {_user.displayName || user.name}
            </p>
            {_user.email && (
              <p className="text-xs leading-none text-muted-foreground">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                {user.email}
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
<<<<<<< HEAD
        <DropdownMenuItem onClick={logout} className=&quot;flex items-center cursor-pointer&quot;>
          <LogOut className=&quot;mr-2 h-4 w-4&quot; />
=======
        <DropdownMenuItem onClick={_logout} className="flex items-center cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
},

export default AvatarMenu,
