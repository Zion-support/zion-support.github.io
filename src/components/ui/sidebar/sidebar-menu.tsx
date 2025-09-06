<<<<<<< HEAD
return (<a;
          href={href}
    return(<button
        ref={ref}
SidebarMenuItem.display_name = "SidebarMenuItem";
export { SidebarMenuItem, SidebarMenuGroup }
export { SidebarMenuItem, SidebarMenuGroup }
}
export { SidebarMenuItem, SidebarMenuGroup }
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";
export { SidebarMenuItem, SidebarMenuGroup };
export { SidebarMenuItem, SidebarMenuGroup };
};
export { SidebarMenuItem, SidebarMenuGroup };
import { cn } from "@/lib/utils","
import { SafeRef } from "@/types/ref-types","
import React, { forwardRef } from "react","
import { ChevronDown } from 'lucide-react''
import { cn } from "@/lib/utils","
import { SafeRef } from "@/types/ref-types","
=======

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode
import React, { forwardRef } from "react",;
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode,;
  active?: boolean,;
  href?: string,;
  target?: string,;
  badge?: React.ReactNode;
}
;
const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;
      return (;
        <a;
          href={href}
          target={target}
<<<<<<< HEAD
          rel={target === "_blank" ? "noopener noreferrer" : undefined}"
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent","
            active && "bg-accent font-medium text-accent-foreground",",
            className
          )}
        >
          <div className="flex items-center gap-2">"
            {icon && <span className="text-muted-foreground">{icon}</span>}"
=======
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",
            className
          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )
<<<<<<< HEAD
          rel={target === "_blank" ? "noopener noreferrer" : undefined}"
=======
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          className={cn(;
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;
          <div className="flex items-center gap-2">;
<<<<<<< HEAD
            {icon && <span className="text-muted-foreground">{icon}</span>}"
=======
            {icon && <span className="text-muted-foreground">{icon}</span>}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
    }
;
    return (;
      <button;
        ref={ref}
<<<<<<< HEAD
        type="button""
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent","
          active && "bg-accent font-medium text-accent-foreground",",
=======
        type="button"
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          className
        )}
        {...props}
      >
<<<<<<< HEAD
        <div className="flex items-center gap-2">"
          {icon && <span className="text-muted-foreground">{icon}</span>}"
=======
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          <span>{children}</span>
        </div>
        {badge && <span>{badge}</span>}
      </button>;
    );
  }
),
<<<<<<< HEAD
SidebarMenuItem.displayName = "SidebarMenuItem","
=======

SidebarMenuItem.displayName = "SidebarMenuItem",

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  children: React.ReactNode
}
<<<<<<< HEAD
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className="space-y-1" {...props}>"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>"
      <div className="pl-2">{children}</div>"
    </div>
  )
},
=======

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>
      <div className="pl-2">{children}</div>
    </div>
  )
},

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title: string,;
  children: React.ReactNode;
}
;
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (;
    <div className="space-y-1" {...props}>;
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>;
  );
},;
export { SidebarMenuItem, SidebarMenuGroup };
