
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from "lucide-react",
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Menu, X } from &quot;lucide-react&quot;;
import { useSidebar } from &quot;./sidebar-context&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      {_open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
