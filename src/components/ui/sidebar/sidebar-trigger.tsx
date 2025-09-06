<<<<<<< HEAD
=======
import * as React from "react"
import { PanelLeft } from 'lucide-react'

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
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

  return (
    <Button
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();
<<<<<<< HEAD
=======
  return (

    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======

    >;
      <PanelLeft />;
      <span className=&quot;sr - only & quot;>Toggle Sidebar</span>;
    </Button>);
});
SidebarTrigger.display_name = &quot;SidebarTrigger & quot;
;


SidebarTrigger.displayName = "SidebarTrigger"
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
