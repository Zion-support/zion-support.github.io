
import React, { forwardRef } from "react";
<<<<<<< HEAD
import { ChevronDown } from 'lucide-react'
=======
import { ChevronDown } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
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
  ({ icon, active, children, href, target, badge, className, ...props }, ref,) => {
    if (href) {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      return(<a
          href={href}
    return(<button
        ref={ref}
=======
      return (
        <a
          href = {href,}
          target = {target,}
          rel = {target === "_blank" ? "noopener noreferrer" : undefined,}
          className = {cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",
            className
          ),}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )
    }

    return (
      <button
        ref = {ref,}
        type="button"
        className = {cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
          className
        ),}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>
        </div>
        {badge && <span>{badge}</span>}
      </button>
    )
  }
),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

SidebarMenuItem.displayName = "SidebarMenuItem";


<<<<<<< HEAD
export { SidebarMenuItem, SidebarMenuGroup };
=======
=======
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props },) => {
  return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>
      <div className="pl-2">{children}</div>
    </div>
  )
},
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
