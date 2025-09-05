
import React, {_forwardRef} from "react";

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {_className?: string;
  children?: React.ReactNode;
  asChild?: boolean;}

export const _SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(_({_className, _children, _asChild = false, _...props}, _ref) => {_const _Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "flex items-center w-full px-3 py-2 text-sm rounded-md font-medium transition-colors", _"text-muted-foreground hover:text-foreground hover:bg-accent", _"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", _className
        )}
        ref={_ref as any}
        {_...props}
      >
        {_children}
      </Comp>
    );
  }
);

SidebarMenuButton.displayName = "SidebarMenuButton";
