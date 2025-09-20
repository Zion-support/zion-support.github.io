
import * as React from &quot;react&quot;
import { PanelLeft } from "lucide-react";
import {Button} from &quot;@/components/ui/button&quot;
import {cn} from &quot;@/lib/utils&quot;
import {useSidebar} from &quot;./sidebar-context&quot;origin/main
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props ref) => {
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
SidebarTrigger.displayName = "SidebarTrigger";