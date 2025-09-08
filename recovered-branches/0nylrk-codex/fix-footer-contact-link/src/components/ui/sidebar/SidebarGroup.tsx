import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React && React.ReactNode;
}

import React from "react";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function SidebarGroup({
  className,
  children,
  ...props
}: SidebarGroupProps) {
  return (

    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}
;
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

"
    <div className={cn("mb-4", className)} {...props}>;
      {children}

export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;

    <div className={cn("mb-4", className)} {...props}>;
      {children}

    </div>;
  );
}

}

;

    <div className={cn("mb-4", className)} {...props}>;
      {children}
import React from './react';'
import { cn  } from '@/lib / utils';


<<<<<<< HEAD


=======
      {children}
    </div>);
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
