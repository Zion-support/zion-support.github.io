



import React, { forwardRef } from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
interface SidebarMenuButtonProps extends React && React.ButtonHTMLAttributes<HTMLButtonElement> {;

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


          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors"
          "text-muted-foreground hover: text-foreground hover:bg-accent"


          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          className





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



        )}
        ref={ref as any}
        {...props}>;
        {children}
      </Comp>;
    );
  }

);
SidebarMenuButton.displayName = "SidebarMenuButton";

),

SidebarMenuButton.displayName = "SidebarMenuButton",
);



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


SidebarMenuButton.displayName = "SidebarMenuButton";

