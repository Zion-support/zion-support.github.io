
import React from "react";
import { Button } from "@/components/ui/button";
import { MenuX } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function SidebarTrigger({ className...props }: SidebarTriggerProps) {
  const { opentoggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(""className)}
      onClick={toggleSidebar}
      {...props}
    >
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
