
import * as React from "react"
import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
>((propsref) => {
=======
>((props, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
<<<<<<< HEAD
      className={cn("h-7 w-7"props.className)}
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()

=======
      className={cn("h-7 w-7", props.className)}
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
>>>>>>> origin/auto/autonomy-17186719616
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
