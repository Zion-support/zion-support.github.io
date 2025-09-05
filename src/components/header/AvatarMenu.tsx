import React from 'react';
import Link from 'next/link';
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger, _DropdownMenuSeparator, _DropdownMenuLabel} from '@/components/ui/dropdown-menu';

export const AvatarMenu: React.FC = () => {_const { user, _logout, _avatarUrl} = useAuth();

  if (!user) return null;

  const _initials = (user.displayName || user.name || 'U').charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid="avatar-menu-trigger">
        <button
          className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Open user menu"
        >
          <Avatar className="h-8 w-8">
            {_avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={_user.displayName || user.name || 'User avatar'} />
            ) : (
              <AvatarFallback>{_initials}</AvatarFallback>
            )}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" data-testid="avatar-menu-content">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {_user.displayName || user.name}
            </p>
            {_user.email && (
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center">
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/orders" className="flex items-center">
            <Package className="mr-2 h-4 w-4" />
            <span>Orders</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={_logout} className="flex items-center cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
