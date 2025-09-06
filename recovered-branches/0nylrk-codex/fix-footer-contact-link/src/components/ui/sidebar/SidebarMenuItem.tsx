
import React from 'react';
import { cn  } from '@/lib/utils';
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement>  {className?: string;
  children?: React.ReactNode;interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement>  {className?: string;
  children?: React.ReactNode;
}export function SidebarMenuItem() {return (<li className={cn("", className)} {...props}>;
      {children}import React from "react",import { cn } from "@/lib/utils",import { cn } from '@/lib/utils';
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLLIElement>  {className?: string;
  children?: React && React.ReactNode;import { cn } from "@/lib/utils",interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement>  {className?: string;
  children?: React.ReactNode;
  className?: string;
  children?: React && React.ReactNode;
export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {return (<li;
      className={cn("", className)}{...props}>;
      {children}
    </li>;
  )}</li>)}</li>;
  )}</li>)}
    </li>;
    </li>)}
  )}}
export function SidebarMenuItem() {return (<li className={cn("", className)} {...props}>;
      {children}
    </li>;
  )}
  )})}</li>)}
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenuItem({
  className,
  children,
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}


export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {;
  return (
    <li
      className={cn("", className)} 
      {...props}>;
      {children}
    </li>;
  );
}

    </li>);
}
    </li>
  );
}
;

}
export function SidebarMenuItem({
  className
  children
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}
    </li>
  );
}
  )
}
;
  )
}
;
    </li>);
}
