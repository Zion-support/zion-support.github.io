
import React from "react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { MenuX } from "lucide-react";
=======
import { Menu, X } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

<<<<<<< HEAD
export function SidebarTrigger({ className...props }: SidebarTriggerProps) {
  const { opentoggleSidebar } = useSidebar();
=======
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <Button
      variant="ghost"
      size="icon"
<<<<<<< HEAD
      className={cn(""className)}
=======
      className={cn("", className)}
>>>>>>> origin/auto/autonomy-17186719616
      onClick={toggleSidebar}
      {...props}
    >
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
