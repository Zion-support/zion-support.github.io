<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
export default AvatarMenu;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import React from 'react',
=======
import React from 'react';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import Link from 'next/link';
import { useAuth  } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
<<<<<<< HEAD
import { DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
  DropdownMenuSeparator;
  DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { User as UserIcon, Package } from 'lucide-react'
import { LogOut } from 'lucide-react', // Assuming lucide-react is used

<<<<<<< HEAD
export const AvatarMenu: React.FC;
=======
<<<<<<< HEAD
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,;
} from '@/components/ui/dropdown-menu';
import { User as UserIcon, Package } from 'lucide-react';
import { LogOut } from 'lucide-react'; // Assuming lucide-react is used
}

export const AvatarMenu: React.FC = () => {
  const { user, logout, avatarUrl } = useAuth();

  if (!user) return null;

  const initials = (user.displayName || user.name || 'U')
    .charAt(0)
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid='avatar-menu-trigger'>
        <button
          className='flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
          aria-label='Open user menu'
        >
          <Avatar className='h-8 w-8'>
            {avatarUrl ? (
              <AvatarImage
                src={avatarUrl}
                alt={user.displayName || user.name || 'User avatar'}
              />
=======
export const AvatarMenu: React.FC = () => {
  const { user, logout, avatarUrl } = useAuth(),

  if (!user) return null,

  const initials = (user.displayName || user.name || 'U').charAt(0).toUpperCase(),

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid="avatar-menu-trigger">
        <button
          className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Open user menu"
        >
          <Avatar className="h-8 w-8">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={user.displayName || user.name || 'User avatar'} />
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            ) : (
              <AvatarFallback>{initials}</AvatarFallback>
            )}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
<<<<<<< HEAD
      <DropdownMenuContent
        className='w-56'
        align='end'
        data-testid='avatar-menu-content'
      >
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>
              {user.displayName || user.name}
            </p>
            {user.email && (
              <p className='text-xs leading-none text-muted-foreground'>
                {user.email}
              </p>
=======
      <DropdownMenuContent className="w-56" align="end" data-testid="avatar-menu-content">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.displayName || user.name}
            </p>
            {user.email && (
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
<<<<<<< HEAD
          <Link href='/profile' className='flex items-center'>
            <UserIcon className='mr-2 h-4 w-4' />
=======
          <Link href="/profile" className="flex items-center">
            <UserIcon className="mr-2 h-4 w-4" />
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
<<<<<<< HEAD
          <Link href='/orders' className='flex items-center'>
            <Package className='mr-2 h-4 w-4' />
=======
          <Link href="/orders" className="flex items-center">
            <Package className="mr-2 h-4 w-4" />
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            <span>Orders</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
<<<<<<< HEAD
        <DropdownMenuItem
          onClick={logout}
          className='flex items-center cursor-pointer'
        >
          <LogOut className='mr-2 h-4 w-4' />
=======
        <DropdownMenuItem onClick={logout} className="flex items-center cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
<<<<<<< HEAD
  );
};
}

export default AvatarMenu;
"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  )
},

export default AvatarMenu,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
