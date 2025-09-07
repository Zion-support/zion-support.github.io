import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
<<<<<<< HEAD
  icon?: React && React.ReactNode;

  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;


import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
=======
  icon?: React && React.ReactNode;interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
<<<<<<< HEAD
  badge?: React.ReactNode

import React, { forwardRef } from "react",;
=======
  badge?: React.ReactNodeimport React, { forwardRef } from "react",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode,;
  active?: boolean,;
  href?: string,;
  target?: string,;
<<<<<<< HEAD
  badge?: React.ReactNode;

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

            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
            active && "bg-accent font-medium text-accent-foreground",

            className
          )}>;

            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",

            className
          )}
=======
  badge?: React.ReactNode;          )}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )

<<<<<<< HEAD

          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;

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
            className
          )}>;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <div className="flex items-center gap-2">;
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          className={cn (
            "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
            active && "bg - accent font - medium text - accent - foreground",
            class_name)}
        >;
<<<<<<< HEAD
          <div className="flex items - center gap - 2">;
            {icon && <span className="text - muted - foreground">{icon}</span>}
=======
          <div className="flex items - center gap-2">;
            {icon && <span className="text - muted-foreground">{icon}</span>}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>);
<<<<<<< HEAD



    }
    return (
      <button;
        ref={ref}

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
          active && "bg-accent font-medium text-accent-foreground",


          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",

          className
        )}
        {...props}>;
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}>;
      ),;

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
    }
=======
          className
        )}
        {...props}>;    }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    return (
      <button;
        ref={ref}
          className
        )}
        {...props}
      >;
<<<<<<< HEAD
        {...props}>;
        <div className="flex items-center gap-2">;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>;
    );
  }

<<<<<<< HEAD

),
),



SidebarMenuItem.displayName = "SidebarMenuItem",


SidebarMenuItem.displayName = "SidebarMenuItem",


SidebarMenuItem.displayName = "SidebarMenuItem",

    );
=======
SidebarMenuItem.displayName = "SidebarMenuItem",
),
),

SidebarMenuItem.displayName = "SidebarMenuItem",

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }

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
<<<<<<< HEAD


export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;

);
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  title: string,;
  children: React && React.ReactNode;
}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
<<<<<<< HEAD
  return (
    <div className="space-y-1" {...props}>;
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>;
  );
};

);

        type="button";
=======
  return (        type="button";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        className={cn (
          "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
          active && "bg - accent font - medium text - accent - foreground",
          class_name)}
        {...props}
      >;
<<<<<<< HEAD
        <div className="flex items - center gap - 2">;
          {icon && <span className="text - muted - foreground">{icon}</span>}
=======
        <div className="flex items - center gap-2">;
          {icon && <span className="text - muted-foreground">{icon}</span>}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="space - y-1" {...props}>;
      <div className="rounded - md px - 3 py - 2 text - sm font - medium">{title}</div>;
      <div className="pl - 2">{children}</div>;
=======
    <div className="space-y-1" {...props}>;
      <div className="rounded - md px - 3 py - 2 text - sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    </div>);
}
;
export { SidebarMenuItem, SidebarMenuGroup }
;

},

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export { SidebarMenuItem, SidebarMenuGroup };
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
<<<<<<< HEAD
export { SidebarMenuItem, SidebarMenuGroup };
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
