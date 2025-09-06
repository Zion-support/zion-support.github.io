
import * as React from "react"
import { PanelLeft } from 'lucide-react'
<<<<<<< HEAD
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
=======
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
<<<<<<< HEAD
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
=======
SidebarTrigger.displayName = "SidebarTrigger"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
