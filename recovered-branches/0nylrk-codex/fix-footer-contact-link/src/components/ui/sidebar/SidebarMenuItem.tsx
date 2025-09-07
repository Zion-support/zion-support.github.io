interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode
<<<<<<< HEAD
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode
=======

import React from "react";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils",
import {cn} from "@/lib/utils";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLLIElement> {;
=======
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
>>>>>>> origin/chore/fix-lint-and-merge

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {;

<<<<<<< HEAD

import { cn } from "@/lib/utils",interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
=======
>>>>>>> origin/chore/fix-lint-and-merge
  className?: string;
  children?: React.ReactNode;
<<<<<<< HEAD
=======

}

export function SidebarMenuItem({}
  className,
  children,;
  ...props;
}: SidebarMenuItemProps) {}
  return ("
    <li className={cn("", className)} {...props}>
      {children}

import { cn } from "@/lib/utils";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {

  className?: string;
  children?: React.ReactNode;

  );
}
;

}
<<<<<<< HEAD
import React from "react";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string,
  children?: React.ReactNode
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
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