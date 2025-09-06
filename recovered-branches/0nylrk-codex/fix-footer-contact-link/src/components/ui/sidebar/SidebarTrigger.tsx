import React from "react";
<<<<<<< HEAD
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import {useSidebar} from "./sidebar-context";
import {cn} from "@/lib/utils";
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from "lucide-react",
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",
=======
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),


export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {;
  const { open, toggleSidebar } = useSidebar();
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <Button
      variant="ghost"
      size="icon"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Menu, X } from "lucide-react",;
import { useSidebar } from "./sidebar-context",;
import { cn } from "@/lib/utils",;
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
  className?: string;
}
;
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {;
  const { open, toggleSidebar } = useSidebar();
  return (;
    <Button;
      variant="ghost";
      size="icon";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5




      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
