
<<<<<<< HEAD
<<<<<<< HEAD
import React, { forwardRef } from "react",
import { Slot } from "@radix-ui/react-slot",
import { cn } from "@/lib/utils",
=======
import React, { forwardRef } from &quot;react&quot;;
import { Slot } from &quot;@radix-ui/react-slot&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children?: React.ReactNode,
  asChild?: boolean
}

export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
<<<<<<< HEAD
    const Comp = asChild ? Slot : "button",
=======
    const Comp = asChild ? Slot : &quot;button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    return (
      <Comp
        className={cn(
          &quot;flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors&quot;,
          &quot;text-muted-foreground hover:text-foreground hover:bg-accent&quot;,
          &quot;focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring&quot;,
          className
=======
import React, { forwardRef } from "react",;
import { Slot } from "@radix-ui/react-slot",;
import { cn } from "@/lib/utils",;
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {;
  className?: string,;
  children?: React.ReactNode,;
  asChild?: boolean;
}
;
export const SidebarMenuButton = forwardRef<HTMLButtonElement SidebarMenuButtonProps>(;
  ({ className, children, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? Slot : "button",;
    return (;
      <Comp;
        className={cn(;
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors",;
          "text-muted-foreground hover:text-foreground hover:bg-accent",;
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",;
          className;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
        ref={ref as any}
        {...props}
      >;
        {children}
      </Comp>;
    );
  }
<<<<<<< HEAD
),

<<<<<<< HEAD
SidebarMenuButton.displayName = "SidebarMenuButton",
=======
SidebarMenuButton.displayName = &quot;SidebarMenuButton&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
);
SidebarMenuButton.displayName = "SidebarMenuButton";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
