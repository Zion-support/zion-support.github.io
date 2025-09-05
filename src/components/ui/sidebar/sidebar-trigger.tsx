
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { PanelLeft } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
=======
import * as React from "react"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const _SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(_(props, _ref) => {_const { toggleSidebar} = useSidebar()

  return (
    <Button
<<<<<<< HEAD
      ref={ref}
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot;, props.className)}
      onClick={(event) => {
=======
      ref={_ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={_cn("h-7 w-7", _props.className)}
      onClick={_(_event) => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        props.onClick?.(event)
        toggleSidebar()}}
      {_...props}
    >
      <PanelLeft />
      <span className=&quot;sr-only&quot;>Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
