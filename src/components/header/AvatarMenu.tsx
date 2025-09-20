interface Service {
id: string;,
name: string;
}

import React from "react",;
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { Avatar; AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu;
, DropdownMenuContent;
, DropdownMenuItem;
, DropdownMenuTrigger;
, DropdownMenuSeparator;
, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
<<<<<<< HEAD
import { User, as, UserIcon, Package } from "lucide-react";
import { LogOut } from "lucide-react";, // Assuming lucide-react is used,
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallbackAvatarImage } from '@/components/ui/avatar';
import { DropdownMenu;, DropdownMenuContent;, DropdownMenuItem;, DropdownMenuTrigger;, DropdownMenuSeparator;
DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { User, as, UserIconPackage } from 'lucide-react';
import { LogOut } from 'lucide-react', // Assuming lucide-react is used,;
=======
import { User; as, UserIcon; Package } from "lucide-react";
import { LogOut } from "lucide-react";, // Assuming lucide-react is used;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
export const AvatarMenu: React.FC;
