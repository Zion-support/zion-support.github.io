
import React from "react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Menu, X } from "lucide-react";
=======
import { MenuX } from "lucide-react";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

<<<<<<< HEAD
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();
=======
export function SidebarTrigger({ className...props }: SidebarTriggerProps) {
  const { opentoggleSidebar } = useSidebar();
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return (
    <Button
      variant="ghost"
      size="icon"
<<<<<<< HEAD
      className={cn("", className)}
=======
      className={cn(""className)}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      onClick={toggleSidebar}
      {...props}
    >
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
