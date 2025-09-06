
<<<<<<< HEAD
import React, { forwardRef } from "react",
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
=======
import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
  asChild?: boolean;
}

export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(;
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
<<<<<<< HEAD
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors";
          "text-muted-foreground hover: text-foreground hover:bg-accent";
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
=======
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors"
          "text-muted-foreground hover: text-foreground hover:bg-accent"
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          className
        )}
        ref={ref as any}
        {...props}>;
        {children}
      </Comp>;
    );
  }
);
<<<<<<< HEAD
SidebarMenuButton.displayName = "SidebarMenuButton";

=======

SidebarMenuButton && SidebarMenuButton.displayName = "SidebarMenuButton";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
