<<<<<<< HEAD
import * as React from "react"
import { PanelLeft } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"
=======

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
  return (
<<<<<<< HEAD
    <Button
      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();
  return (

    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
