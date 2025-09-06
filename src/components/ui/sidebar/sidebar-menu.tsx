
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


export { SidebarMenuItem, SidebarMenuGroup };
=======

export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
