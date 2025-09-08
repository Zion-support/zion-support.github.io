import React from "react";
import { cn } from "@/lib/utils";
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React && React.ReactNode;
}

import React from "react";

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {

}

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

"
    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}

export function SidebarContent({ className, children, ...props }: SidebarContentProps) {;
  return (;

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}

    </div>;
  );
}

}

;

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>;
      {children}
import React from './react';'
import { cn  } from '@/lib / utils';


<<<<<<< HEAD


=======
      {children}
    </div>);
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
