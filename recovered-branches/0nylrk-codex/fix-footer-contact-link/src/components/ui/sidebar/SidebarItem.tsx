
import React from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
=======
import {cn} from "@/lib/utils";
interface SidebarItemProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
  active?: boolean;
}
<<<<<<< HEAD
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
=======

export function SidebarItem(): any ({ className, children, active, ...props }: SidebarItemProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div

      className={cn(
<<<<<<< HEAD
        "flex items-center px-3 py-2 text-sm font-medium rounded-md";
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground"

=======
        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        className
      )}
      {...props}>;
      {children}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
