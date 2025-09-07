<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React && React.ReactNode;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
=======
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
<<<<<<< HEAD

=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { forwardRef } from "react",;

import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;

import { SafeRef } from "@/types/ref-types",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode,;
  active?: boolean,;
  href?: string,;
  target?: string,;

<<<<<<< HEAD
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;

import { SafeRef } from '@/types / ref - types';
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {}

interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {

  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}

            className
          )}

        >
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
            active && "bg-accent font-medium text-accent-foreground",

            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
            active && "bg-accent font-medium text-accent-foreground",
            className
          )}>;

            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",

>>>>>>> merged-prs-20250907-203621
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {
    if (href) {
      return (
        <a
<<<<<<< HEAD
          href = $2;
            active && "bg-accent font-medium text-accent-foreground",
            className
          )}
        >
          <div className = $2;
=======
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent";
            active && "bg-accent font-medium text-accent-foreground"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;

import { SafeRef } from '@/types / ref - types';
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {}

interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {

  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className
          )}

        >
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="flex items-center gap-2">

            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;"

            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            className;
          )}>;

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="flex items-center gap-2">;

            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          className={cn (
            "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
            active && "bg - accent font - medium text - accent - foreground",
            class_name)}
        >;

            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
    return (
      <button;
        ref={ref}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent","
          active && "bg-accent font-medium text-accent-foreground",

    }

    return (
      <button;
        ref={ref}
          className;
<<<<<<< HEAD
        )}

=======
        )}

=======
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"
>>>>>>> merged-prs-20250907-203621
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}>;
      ),;
    }
;
    return (;
      <button;
        ref={ref}
        type="button";
        className={cn(;
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
          active && "bg-accent font-medium text-accent-foreground",;
          className;
        )}
        {...props}
<<<<<<< HEAD
      >
        <div className = $2;
SidebarMenuItem.displayName = $2;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  children: React.ReactNode
}

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode
}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className = $2;
export { SidebarMenuItem, SidebarMenuGroup },
=======
      >;
        <div className="flex items-center gap-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    );
  }
"
SidebarMenuItem.displayName = "SidebarMenuItem",

),
),

<<<<<<< HEAD
=======
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
<<<<<<< HEAD
);
SidebarMenuItem.displayName = "SidebarMenuItem";
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
),
),
<<<<<<< HEAD

SidebarMenuItem.displayName = "SidebarMenuItem",


SidebarMenuItem.displayName = "SidebarMenuItem",

=======



SidebarMenuItem.displayName = "SidebarMenuItem",

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode

}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {}
  return ("
    <div className="space-y-1" {...props}>"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>"
      <div className="pl-2">{children}</div>
    </div>
  )
<<<<<<< HEAD

export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;

SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;

  title: string,;
  children: React && React.ReactNode;
}
=======
<<<<<<< HEAD
}
export { SidebarMenuItem, SidebarMenuGroup }

},

export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;

);
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";
=======

export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;

SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;

  title: string,;
  children: React && React.ReactNode;
}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;

};

);

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (
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
=======

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="space-y-1" {...props}>;
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>;
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
        type="button";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        className={cn (
          "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
          active && "bg - accent font - medium text - accent - foreground",
          class_name)}
        {...props}
      >;

          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>);
  });
;"
SidebarMenuItem.display_name = "SidebarMenuItem";
;
interface SidebarMenuGroupProps extends React.HTMLAttributes < HTMLDivElement> {}
  title: string,
  children: React.ReactNode;
}

    </div>);
}
;
<<<<<<< HEAD
export { SidebarMenuItem, SidebarMenuGroup };
;
=======
<<<<<<< HEAD
export { SidebarMenuItem, SidebarMenuGroup };
;
=======
export { SidebarMenuItem, SidebarMenuGroup }
;

},


export { SidebarMenuItem, SidebarMenuGroup };
<<<<<<< HEAD
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
