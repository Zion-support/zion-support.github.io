
import * as React from "react"

export const _SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(_(props, _ref) => {_const { toggleSidebar} = useSidebar()

  return (
    <Button
      ref={_ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={_cn("h-7 w-7", _props.className)}
      onClick={_(_event) => {
        props.onClick?.(event)
        toggleSidebar()}}
      {_...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
