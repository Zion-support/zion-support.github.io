<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import {useSidebar} from "./sidebar-context";
import {cn} from "@/lib/utils";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from "lucide-react",
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Button"
      variant="ghost""
      size="icon"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
  className?: string;
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Button } from "@/components/ui/button",;
import { Menu, X } from "lucide-react",;
import { useSidebar } from "./sidebar-context",;
=======
"
import React from "react",;"
import { Button } from "@/components/ui/button",;"
import { Menu, X } from "lucide-react",;"
import { useSidebar } from "./sidebar-context",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils",;
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
  className?: string;
}
;
export function SidebarTrigger() { return null; }
  const { open, toggleSidebar } = useSidebar();
  return (;
    <Button;"
      variant="ghost";"
      size="icon";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;
className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
=======
"
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;

"
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

;

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React from "react";""
import { Button } from "@/components/ui/button";""
import { Menu, X } from "lucide-react";""
import { useSidebar } from "./sidebar-context";""
import { cn } from "@/lib/utils";"
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {

    <Button;"
      variant="ghost"""
      size="icon"""
import React from "react",;""
import { Button } from "@/components/ui/button",;""
import { Menu, X } from "lucide-react",;""
import { useSidebar } from "./sidebar-context",;""
import { cn } from "@/lib/utils",;"
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;

      variant="ghost";""
      size="icon";""
      className={cn("", className)}"
      onClick={toggleSidebar}
      {...props}>;
"
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}"
      <span className="sr-only">Toggle Sidebar</span>"
pr-12325
    </Button>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
