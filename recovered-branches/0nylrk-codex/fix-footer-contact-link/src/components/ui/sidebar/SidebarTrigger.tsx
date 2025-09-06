
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import {useSidebar} from "./sidebar-context";
import {cn} from "@/lib/utils";
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from "lucide-react",
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {;
  const { open, toggleSidebar } = useSidebar();
=======
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Button
      variant="ghost"
      size="icon"
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
