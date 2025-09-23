
import * as React from "react"
import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
>((props, ref) => {
=======
>((propsref) => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
<<<<<<< HEAD
      className={cn("h-7 w-7", props.className)}
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
=======
      className={cn("h-7 w-7"props.className)}
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
