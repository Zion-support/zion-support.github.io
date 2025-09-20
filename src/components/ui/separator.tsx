import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
className?: string;
orientation?: "horizontal" | "vertical";
}

export function Separator({ className = "", orientation = "horizontal" }: SeparatorProps) {
<<<<<<< HEAD
  return (
    <div
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
    />
  );
}
      {...props}
    />
  )
);
};

export { Separator };
=======
return (
<div;
className={cn(
"shrink-0 bg-border",
orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
className;
)}
/>;
);
}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
