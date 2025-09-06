

<<<<<<< HEAD
import {cn} from "@/lib/utils";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React from "react",
import { cn } from "@/lib/utils",

<<<<<<< HEAD
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
=======

=======
import {cn} from "@/lib/utils";
interface SidebarProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className?: string;
  children?: React && React.ReactNode;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}


export function Sidebar(): any ({ className, children, ...props }: SidebarProps) {;
  return (
    <div
<<<<<<< HEAD

        className
=======
=======

      className={cn(;
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200";

        className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      className={cn(
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        className

import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  children?: React.ReactNode;
}
;
export function Sidebar({ className, children, ...props }: SidebarProps) {;
  return (;
    <div;
      className={cn(;
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200";
        className;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
      {...props}>;
      {children}

    </div>;
  );
}

=======
import React from './react';
import { cn } from '@/lib / utils';
interface SidebarProps extends React.HTMLAttributes < HTMLDivElement> {
  class_name?: string;
  children?: React.ReactNode;
}
export /**
 * Sidebar - Function description
 */
function Sidebar() {
  return (
    <div;
      className={cn (
        "flex flex - col h - screen bg - background border - r border - border shrink - 0 w - 64 overflow - y-auto transition - all duration - 200";
        class_name)}
      {...props}
    >;
      {children}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
