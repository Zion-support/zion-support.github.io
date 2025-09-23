
<<<<<<< HEAD
import React{ forwardRef } from "react";
=======
import React, { forwardRef } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

<<<<<<< HEAD
export const SidebarMenuButton = forwardRef<HTMLButtonElementSidebarMenuButtonProps>(
  ({ classNamechildrenasChild = false...props }ref) => {
    const Comp = asChild ? Slot : "button";

=======
export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
>>>>>>> origin/auto/autonomy-17186719616
    return (
      <Comp
        className={cn(
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-accent",
<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
        )}
        ref={ref as any}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

SidebarMenuButton.displayName = "SidebarMenuButton";
