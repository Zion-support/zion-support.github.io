



import React from "react";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import {useSidebar} from "./sidebar-context";
import {cn} from "@/lib/utils";
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from "lucide-react",
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}


<<<<<<< HEAD
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),


export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {;
  const { open, toggleSidebar } = useSidebar();
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <Button
      variant="ghost"
      size="icon"
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;
<<<<<<< HEAD
=======
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
