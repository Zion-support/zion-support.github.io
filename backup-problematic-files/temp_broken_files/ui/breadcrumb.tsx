
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";
 ;
import { cn } from "@/lib/utils";
 ;
const Breadcrumb = React.forwardRef<;
  HTMLElement,;
  React.ComponentPropsWithoutRef<"nav"> & {;
    separator?:React.ReactNode;  }
>(({ className, separator, ...props }, ref) => (;
  <nav;
    ref={ref}
    aria-label="breadcrumb";
    className={cn(;
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",;
      className;
    )}
    {...props}
  />;
));

    ref={ref}
    className={cn("flex items-center gap-1.5", className)}
    {...props}
  />;
));

    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />;
));

    <Comp;
      ref={ref}
      className={cn("transition-colors hover:text-zion-cyan", className)}
      {...props}

  >;
    {children || <ChevronRight className="h-4 w-4" />}
  </li>;
);

    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >;
