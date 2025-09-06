
import React from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
=======
import {cn} from "@/lib/utils";
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
}
<<<<<<< HEAD
export function SidebarGroup({
  className
  children
  ...props
}: SidebarGroupProps) {
=======

export function SidebarGroup(): any ({ className, children, ...props }: SidebarGroupProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className={cn("mb-4", className)} {...props}>;
      {children}
<<<<<<< HEAD
    </div>
  );
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
