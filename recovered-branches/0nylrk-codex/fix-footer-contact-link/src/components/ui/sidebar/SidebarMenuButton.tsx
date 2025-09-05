
import React, { forwardRef } from "react",
import { Slot } from "@radix-ui/react-slot",
import { cn } from "@/lib/utils",interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children?: React.ReactNode,
  asChild?: boolean
}

export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button",    return (
      <Comp,
className={cn(
          &quot;flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors&quot;,
          &quot;text-muted-foreground hover:text-foreground hover:bg-accent&quot;,
          &quot;focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring&quot;,
          className,
import React, {forwardRef} from "react";

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {className?: string;
  children?: React.ReactNode;
  asChild?: boolean}

export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(_({className, children, asChild = false, _...props}, ref) => {const Comp = asChild ? Slot : "button";
    return (
      <Comp,
className={cn(
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors", _"text-muted-foreground hover:text-foreground hover:bg-accent", _"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", className
        )}
        ref={ref as any}
        {_...props}
      >
        {children}
      </Comp>
    )
  }
),

SidebarMenuButton.displayName = "SidebarMenuButton",