



import React from "react";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import {useSidebar} from "./sidebar-context";
import {cn} from "@/lib/utils";
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from "lucide-react",
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}


export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

<<<<<<< HEAD

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {;
  const { open, toggleSidebar } = useSidebar();
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <Button
      variant="ghost"
      size="icon"
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;
<<<<<<< HEAD
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  );
}
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
