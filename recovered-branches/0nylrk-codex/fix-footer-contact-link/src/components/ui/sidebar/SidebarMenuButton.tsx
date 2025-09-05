
import React, { forwardRef } from &quot;react&quot;;
import { Slot } from &quot;@radix-ui/react-slot&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : &quot;button&quot;;
    return (
      <Comp
        className={cn(
          &quot;flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors&quot;,
          &quot;text-muted-foreground hover:text-foreground hover:bg-accent&quot;,
          &quot;focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring&quot;,
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

SidebarMenuButton.displayName = &quot;SidebarMenuButton&quot;;
