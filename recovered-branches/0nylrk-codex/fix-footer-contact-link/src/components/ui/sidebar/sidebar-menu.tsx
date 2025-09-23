
<<<<<<< HEAD
import React{ forwardRef } from "react";
=======
import React, { forwardRef } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}

<<<<<<< HEAD
const SidebarMenuItem = forwardRef<HTMLButtonElementSidebarMenuItemProps>(
  ({ iconactivechildrenhreftargetbadgeclassName...props }ref) => {
=======
const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",
            className
          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>
        </div>
        {badge && <span>{badge}</span>}
      </button>
    );
  }
);

SidebarMenuItem.displayName = "SidebarMenuItem";

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

<<<<<<< HEAD
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ titlechildren...props }) => {
=======
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>
      <div className="pl-2">{children}</div>
    </div>
  );
};

<<<<<<< HEAD
export { SidebarMenuItemSidebarMenuGroup };
=======
export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> origin/auto/autonomy-17186719616
