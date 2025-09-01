import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { User as UserIcon, Package } from 'lucide-react'
import { LogOut } from 'lucide-react'; // Assuming lucide-react is used

export interface AvatarMenuProps {
  avatarUrl?: string;
  onLogout?: () => void}

export function AvatarMenu({ avatarUrl, onLogout }: AvatarMenuProps) {

  const initials = (user.displayName || 'U').charAt(0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={user.displayName || 'User'} />
          ) : (
            <AvatarFallback>{initials}</AvatarFallback>
          )}
        </>
      )}
    </Popover>
  )}
