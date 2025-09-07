

<<<<<<< HEAD

import * as React from "react"
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
<<<<<<< HEAD
  const { toggleSidebar } = useSidebar()

import * as React from &quot;react & quot;
import { PanelLeft } from &quot;lucide-react & quot;
import { Button } from &quot;@/components / ui / button & quot;
import { cn } from &quot;@/lib / utils & quot;
import { use_sidebar } from &quot;./sidebar - context & quot;
;
export const SidebarTrigger = React.forward_ref<;
  React.ElementRef < typeof Button>,
  React.ComponentProps < typeof Button>;
>((props, ref) => {
  const { toggle_sidebar } = use_sidebar ();

  return (
=======
  const { toggleSidebar } = useSidebar()  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <Button;
      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();
<<<<<<< HEAD
      ref={ref}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}

      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }}
      {...props}

    >;
      <PanelLeft />;
      <span className=&quot;sr - only & quot;>Toggle Sidebar</span>;
    </Button>);
});
SidebarTrigger.display_name = &quot;SidebarTrigger & quot;
<<<<<<< HEAD
;


SidebarTrigger.displayName = "SidebarTrigger"

      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }}
=======
;      }}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
SidebarTrigger.displayName = "SidebarTrigger"
<<<<<<< HEAD
      }}
      {...props}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
