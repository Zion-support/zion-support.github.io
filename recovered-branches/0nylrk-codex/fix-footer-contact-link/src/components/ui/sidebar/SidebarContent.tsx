import React from "react";
import { cn } from "@/lib/utils";
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD

export function SidebarContent({
  className,
  children,
  ...props
}: SidebarContentProps) {
  return (

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>
      {children}
    </div>
  );
}
;
export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}

<<<<<<< HEAD
    </div>;
  );
}

=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

;


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}
import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarContentProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarContent - Function description
 */
function SidebarContent() {
  return (
    <div className={cn ("flex - 1 px - 2 py - 4", class_name)} {...props}>;
      {children}
    </div>);
}
<<<<<<< HEAD
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
