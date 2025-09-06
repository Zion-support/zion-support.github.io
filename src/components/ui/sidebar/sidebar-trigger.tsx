<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from "react"
import { PanelLeft } from 'lucide-react'


export const SidebarTrigger = React.forwardRef<
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import * as React from &quot;react&quot;
import { PanelLeft } from 'lucide-react';
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
<<<<<<< HEAD
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;

xport const SidebarTrigger = React.forwardRef<
=======
import * as React from "react"
import { PanelLeft } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
<<<<<<< HEAD
    <Button;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();
<<<<<<< HEAD
  return (
    <Button;
      ref={ref};
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot; props.className)}
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
ursor/fix-website-loading-errors-and-merge-6662
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
SidebarTrigger.displayName = "SidebarTrigger"

SidebarTrigger.displayName = "SidebarTrigger"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
