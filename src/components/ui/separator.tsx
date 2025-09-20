import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
<<<<<<< HEAD
className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = "" }) => {
return (
<div className={`h-px bg-gray-200 dark:bg-gray-700 ${className}`} />
);
};

export { Separator };
=======
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function Separator({ className = "", orientation = "horizontal" }: SeparatorProps) {
  return (
    <div
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
    />
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
