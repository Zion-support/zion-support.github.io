import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroupContent({
  className,
  children,
  ...props
}: SidebarGroupContentProps) {
  return (

    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  );
}
;
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {;
  return (;

    <div className={cn("space-y-1", className)} {...props}>;
      {children}

    </div>;
  );
}

}

;

    <div className={cn("space-y-1", className)} {...props}>;
      {children}
import React from './react';
import { cn  } from '@/lib / utils';
interface SidebarGroupContentProps;
  extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * SidebarGroupContent - Function description
 */
function SidebarGroupContent() {
  return (
    <div className={cn ("space - y-1", class_name)} {...props}>;
      {children}
    </div>);
}
;