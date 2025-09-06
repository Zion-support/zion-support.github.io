
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";
<<<<<<< HEAD
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
=======
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React && React.ReactNode;

  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode
import React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode,;
  active?: boolean,;
  href?: string,;
  target?: string,;
  badge?: React.ReactNode;
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;
=======
import React, { forward_ref } from './react';
import { ChevronDown } from './lucide-react';
import { cn } from '@/lib / utils';
import { SafeRef } from '@/types / ref - types';
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}
const SidebarMenuItem = forward_ref < HTMLButtonElement, SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, class_name, ...props }, ref) => {
    // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      return (
        <a;
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent";
            active && "bg-accent font-medium text-accent-foreground"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",
            className
          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )
<<<<<<< HEAD
    }
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          <div className="flex items-center gap-2">;
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
<<<<<<< HEAD
    }
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent";
          active && "bg-accent font-medium text-accent-foreground"
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}>;
        <div className="flex items-center gap-2">;
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>;
    );
  }
<<<<<<< HEAD
);
SidebarMenuItem.displayName = "SidebarMenuItem";
),
),
<<<<<<< HEAD
=======


),
=======
=======
),


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

SidebarMenuItem.displayName = "SidebarMenuItem",

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode
}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>
      <div className="pl-2">{children}</div>
    </div>
  )
}
export { SidebarMenuItem, SidebarMenuGroup }

},

<<<<<<< HEAD
export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
=======
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  title: string,;
  children: React && React.ReactNode;
}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (
    <div className="space-y-1" {...props}>;
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>;
  );
<<<<<<< HEAD
},;
=======
};


=======
        type="button";
        className={cn (
          "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
          active && "bg - accent font - medium text - accent - foreground",
          class_name)}
        {...props}
      >;
        <div className="flex items - center gap - 2">;
          {icon && <span className="text - muted - foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>);
  }
);
;
SidebarMenuItem.display_name = "SidebarMenuItem";
;
interface SidebarMenuGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  title: string,
  children: React.ReactNode;
}
const SidebarMenuGroup: React.FC < SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className="space - y-1" {...props}>;
      <div className="rounded - md px - 3 py - 2 text - sm font - medium">{title}</div>;
      <div className="pl - 2">{children}</div>;
    </div>);
}
;
export { SidebarMenuItem, SidebarMenuGroup }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

},


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export { SidebarMenuItem, SidebarMenuGroup };
