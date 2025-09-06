
import * as React from &quot;react&quot;
import { PanelLeft } from &quot;lucide-react&quot;
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref};
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot;, props.className)}
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className=&quot;sr-only&quot;>Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
