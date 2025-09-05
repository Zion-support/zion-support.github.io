
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Menu, X } from "lucide-react",;
import { useSidebar } from "./sidebar-context",;
import { cn } from "@/lib/utils",;
;
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
  className?:string,;
}
;
export function SidebarTrigger({ className, ...props } SidebarTriggerProps) {;
  const { open, toggleSidebar } = useSidebar(),;
;
  return (;
    <Button;
      variant="ghost";
      size="icon";
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
      {open ? <X className="h-4 w-4" /> :<Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  ),;
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from "lucide-react",
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

  return (
    <Button
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
import React from "react";

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {_className?: string;}

export function SidebarTrigger(_{_className, _...props}: SidebarTriggerProps) {_const { open, _toggleSidebar} = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={_cn("", _className)}
      onClick={_toggleSidebar}
      {_...props}
    >
      {_open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
