<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),


<<<<<<< HEAD



  return (
    <Button
      variant="ghost"
      size="icon"


=======
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Button } from "@/components/ui/button",;
import { Menu, X } from "lucide-react",;
import { useSidebar } from "./sidebar-context",;

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
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;



=======
className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;
className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}

      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );

}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
