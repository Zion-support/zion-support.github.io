<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React && React.ReactNode;
=======
import React, { forwardRef } from "react";"
import {ChevronDown} from "lucide-react";"
import {cn} from "@/lib/utils";"
import {SafeRef} from "@/types/ref-types";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
=======
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
<<<<<<< HEAD
  icon?: React && React.ReactNode;interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React && React.ReactNode;interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  icon?: React && React.ReactNode;

  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  badge?: React.ReactNode
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { forwardRef } from "react",;
=======
  badge?: React.ReactNodeimport React, { forwardRef } from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  badge?: React.ReactNodeimport React, { forwardRef } from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  badge?: React.ReactNode

import React, { forwardRef } from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;
=======
"
import React, { forwardRef } from "react","
import { ChevronDown } from "lucide-react",";
import { cn } from "@/lib/utils";"
import { SafeRef } from "@/types/ref-types";"
import { cn } from "@/lib/utils","
import { SafeRef } from "@/types/ref-types",

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {}
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,;
  badge?: React.ReactNode;
"
import React, { forwardRef } from "react",;"
import { ChevronDown } from "lucide-react",;"
import { cn } from "@/lib/utils",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SafeRef } from "@/types/ref-types",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode,;
  active?: boolean,;
  href?: string,;
  target?: string,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  badge?: React.ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  badge?: React.ReactNode;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { forward_ref } from './react';
import { ChevronDown } from './lucide-react';
import { cn } from '@/lib / utils';
=======
import React, { forward_ref } from './react';'
import { ChevronDown } from './lucide-react';'
import { cn } from '@/lib / utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SafeRef } from '@/types / ref - types';
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {}
=======
import React, { forward_ref } from './react';
import { ChevronDown } from './lucide-react';
import { cn } from '@/lib / utils';
import { SafeRef } from '@/types / ref - types';
=======

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}
<<<<<<< HEAD
const SidebarMenuItem = forward_ref < HTMLButtonElement, SidebarMenuItemProps>(
<<<<<<< HEAD
  ({ icon, active, children, href, target, badge, class_name, ...props }, ref) => {}
    // Check condition;
if ( {) {}
  $2;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return (
        <a;
          href={href}
          target={target}"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}

"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent","
            active && "bg-accent font-medium text-accent-foreground",




<<<<<<< HEAD
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
<<<<<<< HEAD

=======
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent";
            active && "bg-accent font-medium text-accent-foreground"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
            active && "bg-accent font-medium text-accent-foreground",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            className
          )}
=======
  badge?: React.ReactNode;          )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  badge?: React.ReactNode;          )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        >
          <div className="flex items-center gap-2">
=======
            className;
          )}
        >"
          <div className="flex items-center gap-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;"
=======
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


            className;
          )}>;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
            className
          )}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="flex items-center gap-2">;
=======
"
          <div className="flex items-center gap-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          className={cn (
            "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
            active && "bg - accent font - medium text - accent - foreground",
            class_name)}
        >;
<<<<<<< HEAD
          <div className="flex items - center gap-2">;
            {icon && <span className="text - muted-foreground">{icon}</span>}
=======
          className={cn ("
            "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";"
            active && "bg - accent font - medium text - accent - foreground",
            class_name)}
        >;"
          <div className="flex items - center gap - 2">;"
            {icon && <span className="text - muted - foreground">{icon}</span>}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="flex items - center gap - 2">;
            {icon && <span className="text - muted - foreground">{icon}</span>}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>);
<<<<<<< HEAD
<<<<<<< HEAD
          className
        )}
        {...props}>;    }
=======






=======



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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
    return (
      <button;
        ref={ref}

"
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent","
          active && "bg-accent font-medium text-accent-foreground",


    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return (
      <button;
        ref={ref}
          className;
        )}
<<<<<<< HEAD
        {...props}
      >;
<<<<<<< HEAD
=======
"
        <div className="flex items-center gap-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        {...props}>;
        <div className="flex items-center gap-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
),
),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD

SidebarMenuItem.displayName = "SidebarMenuItem",

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

SidebarMenuItem.displayName = "SidebarMenuItem",


SidebarMenuItem.displayName = "SidebarMenuItem",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    );
  }
"
SidebarMenuItem.displayName = "SidebarMenuItem",
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
),
),
<<<<<<< HEAD

<<<<<<< HEAD
SidebarMenuItem.displayName = "SidebarMenuItem",

  }

SidebarMenuItem.displayName = "SidebarMenuItem",

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======



SidebarMenuItem.displayName = "SidebarMenuItem",


SidebarMenuItem.displayName = "SidebarMenuItem",


SidebarMenuItem.displayName = "SidebarMenuItem",

    );
  }

SidebarMenuItem.displayName = "SidebarMenuItem",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode
=======

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
  title: string;
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {}
  return ("
    <div className="space-y-1" {...props}>"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>"
      <div className="pl-2">{children}</div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
}
export { SidebarMenuItem, SidebarMenuGroup }

=======
},

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

export { SidebarMenuItem, SidebarMenuGroup },;
),;"
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

);
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title: string,;
  children: React && React.ReactNode;
}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
"
    <div className="space-y-1" {...props}>;"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;"
      <div className="pl-2">{children}</div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
},;

export { SidebarMenuItem, SidebarMenuGroup };
export { SidebarMenuItem, SidebarMenuGroup };
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
  );
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
    <div className="space-y-1" {...props}>;
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>;
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

);

<<<<<<< HEAD


"
        type="button";
<<<<<<< HEAD
=======
  return (        type="button";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (        type="button";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        type="button";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        className={cn (
          "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
          active && "bg - accent font - medium text - accent - foreground",
          class_name)}
        {...props}
      >;
<<<<<<< HEAD
        <div className="flex items - center gap-2">;
          {icon && <span className="text - muted-foreground">{icon}</span>}
=======
        className={cn ("
          "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";"
          active && "bg - accent font - medium text - accent - foreground",
          class_name)}
        {...props}
      >;"
        <div className="flex items - center gap - 2">;"
          {icon && <span className="text - muted - foreground">{icon}</span>}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="flex items - center gap - 2">;
          {icon && <span className="text - muted - foreground">{icon}</span>}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>);
  }
);
;"
SidebarMenuItem.display_name = "SidebarMenuItem";
;
interface SidebarMenuGroupProps extends React.HTMLAttributes < HTMLDivElement> {}
  title: string,
  children: React.ReactNode;
}
<<<<<<< HEAD
const SidebarMenuGroup: React.FC < SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
<<<<<<< HEAD
    <div className="space-y-1" {...props}>;
      <div className="rounded - md px - 3 py - 2 text - sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
=======
const SidebarMenuGroup: React.FC < SidebarMenuGroupProps> = ({ title, children, ...props }) => {}
  return ("
    <div className="space - y-1" {...props}>;"
      <div className="rounded - md px - 3 py - 2 text - sm font - medium">{title}</div>;"
      <div className="pl - 2">{children}</div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <div className="space - y-1" {...props}>;
      <div className="rounded - md px - 3 py - 2 text - sm font - medium">{title}</div>;
      <div className="pl - 2">{children}</div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </div>);
}
;
export { SidebarMenuItem, SidebarMenuGroup };
;
<<<<<<< HEAD

},


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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




},




export { SidebarMenuItem, SidebarMenuGroup };

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export { SidebarMenuItem, SidebarMenuGroup };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
