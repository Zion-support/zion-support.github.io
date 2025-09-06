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
  DropdownMenuLabel} from '@/components/ui/dropdown-menu',
import { User as UserIcon, Package } from 'lucide-react'
import { LogOut } from 'lucide-react', // Assuming lucide-react is used

export const AvatarMenu: React.FC = () => {
  const { user, logout, avatarUrl } = useAuth($2);
  if (!user) return null,

  const initials = (user.displayName || user.name || 'U').charAt(0).toUpperCase($2);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid = $2;
export default AvatarMenu,
