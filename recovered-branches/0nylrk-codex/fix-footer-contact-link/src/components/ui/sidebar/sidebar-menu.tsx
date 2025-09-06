import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";
<<<<<<< HEAD
<<<<<<< HEAD
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React && React.ReactNode;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;
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
      return (
        <a;
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
<<<<<<< HEAD

            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
            active && "bg-accent font-medium text-accent-foreground",

            className
          )}>;
=======
=======
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
            active && "bg-accent font-medium text-accent-foreground",

            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
            active && "bg-accent font-medium text-accent-foreground",
            className
          )}>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",

<<<<<<< HEAD
=======
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent";
            active && "bg-accent font-medium text-accent-foreground"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD

=======
=======
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?:React.ReactNode,;
  active?:boolean,;
  href?:string,;
  target?:string,;
  badge?:React.ReactNode,;
}
;
const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;
      return (;
        <a;
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" :undefined}
          className={cn(;
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;
          <div className="flex items-center gap-2">;            {icon && <span className="text-muted-foreground">{icon}</span>}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            className
          )}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div className="flex items-center gap-2">;
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          className={cn (
            "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
            active && "bg - accent font - medium text - accent - foreground",
            class_name)}
        >;
          <div className="flex items - center gap - 2">;
            {icon && <span className="text - muted - foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>);
<<<<<<< HEAD

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
    return (
      <button;
        ref={ref}
<<<<<<< HEAD

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
          active && "bg-accent font-medium text-accent-foreground",

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          className
        )}
        {...props}>;
=======
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}>;
      ),;
=======

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
    return (
      <button;
        ref={ref}
          className
        )}
<<<<<<< HEAD
        {...props}
      >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        {...props}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className="flex items-center gap-2">;
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>;
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }


=======


          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent";
          active && "bg-accent font-medium text-accent-foreground"
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>
        </div>
        {badge && <span>{badge}</span>}
      </button>
    )
  }
);
SidebarMenuItem.displayName = "SidebarMenuItem";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
),
),
<<<<<<< HEAD



SidebarMenuItem.displayName = "SidebarMenuItem",

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

SidebarMenuItem.displayName = "SidebarMenuItem",


SidebarMenuItem.displayName = "SidebarMenuItem",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    );
  }

SidebarMenuItem.displayName = "SidebarMenuItem",

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD


=======
}
export { SidebarMenuItem, SidebarMenuGroup }

},

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
<<<<<<< HEAD

);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  title: string,;
  children: React && React.ReactNode;
}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
    ),;
  }
),;
;
SidebarMenuItem.displayName = "SidebarMenuItem",;
;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title:string,;
  children:React.ReactNode;
}
;
const SidebarMenuGroup:React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (;
  title: string,;
  children: React.ReactNode;
}
;
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="space-y-1" {...props}>;
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>;
<<<<<<< HEAD
  );
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};

);

<<<<<<< HEAD
=======
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

},


<<<<<<< HEAD
<<<<<<< HEAD
export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export { SidebarMenuItem, SidebarMenuGroup };
  ),;
},;
;
export { SidebarMenuItem, SidebarMenuGroup },; interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
active?: boolean;
href?: string;
target?: string;
badge?: React.ReactNode 
}const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps> ( ({
  icon, active, children, href, target, badge, className, ...props 
}, ref) => {
  if (href) {
  return (<a href= {
  href 
}target= {
  target 
}rel= {
  target === "blank" ? "noopener noreferrer" : undefined 
}className= {
  cn ("flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent";
active && "bg-accent font-medium text-accent-foreground";
className) 
}> <div className="flex items-center gap-2" > {
  icon && <span className="text-muted-foreground" > {
  icon 
}</span> 
}<span> {
  children 
}</span> </div> {
  badge && <span> {
  badge 
}</span> 
}</a>) 
}return (<button) 
}{
  ...props 
}> </div> {
  badge && <span> {
  badge 
}</span> 
}</button>) 
});
</div>) 
};
  );
},;
export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
