import React from "react";
import { cn } from "@/lib/utils";
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
interface SidebarContentProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;
}
  );
}
  )
  )
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode
};
export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;
}
;
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
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df