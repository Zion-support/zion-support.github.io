<<<<<<< HEAD

import * as React from "react"
import { PanelLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"
=======
import * as React from "react"
import { PanelLeft } from 'lucide-react'

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()

<<<<<<< HEAD
=======
import * as React from &quot;react & quot;
import { PanelLeft } from 'lucide-react';
import { Button } from &quot;@/components / ui / button & quot;
import { cn } from &quot;@/lib / utils & quot;
import { use_sidebar } from &quot;./sidebar - context & quot;
;
export const SidebarTrigger = React.forward_ref<;
  React.ElementRef < typeof Button>,
  React.ComponentProps < typeof Button>;
>((props, ref) => {
  const { toggle_sidebar } = use_sidebar ();

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
=======

    >;
      <PanelLeft />;
      <span className=&quot;sr - only & quot;>Toggle Sidebar</span>;
    </Button>);
});
SidebarTrigger.display_name = &quot;SidebarTrigger & quot;
;


SidebarTrigger.displayName = "SidebarTrigger"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
