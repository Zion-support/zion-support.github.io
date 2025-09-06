<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React, { forwardRef } from "react";
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {
    if (href) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      return(<a
          href={href}
    return(<button
        ref={ref}

SidebarMenuItem.displayName = "SidebarMenuItem";

<<<<<<< HEAD

export { SidebarMenuItem, SidebarMenuGroup };
=======
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  children: React.ReactNode
}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>
      <div className="pl-2">{children}</div>
    </div>
  )
};
<<<<<<< HEAD
"
=======

<<<<<<< HEAD
    return(<button
        ref={ref}
<<<<<<< HEAD


SidebarMenuItem.displayName = "SidebarMenuItem";

<<<<<<< HEAD


export { SidebarMenuItem, SidebarMenuGroup };

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
