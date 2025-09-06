
import React, { forwardRef } from "react";
import { ChevronDown } from 'lucide-react'import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React && React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref,) => {;
    if (href) {;
      return (<a;
          href={href}
    return (<button;
        ref={ref}
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

export { SidebarMenuItem, SidebarMenuGroup };
export { SidebarMenuItem, SidebarMenuGroup };
};

export { SidebarMenuItem, SidebarMenuGroup };
