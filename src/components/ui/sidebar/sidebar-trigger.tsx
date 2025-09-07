

<<<<<<< HEAD
export const SidebarTrigger = React.forwardRef<

import * as React from &quot;react&quot;
import { PanelLeft } from 'lucide-react';
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
import * as React from "react"
import { PanelLeft } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
<<<<<<< HEAD
    <Button;
=======

      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }}
      {...props}
<<<<<<< HEAD
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
ursor/fix-website-loading-errors-and-merge-6662
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
SidebarTrigger.displayName = "SidebarTrigger"

SidebarTrigger.displayName = "SidebarTrigger"
=======

