
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { PanelLeft } from &quot;lucide-react&quot;
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
=======
=======


>>>>>>> main
import * as React from "react"
import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
<<<<<<< HEAD
  return (
    <Button
<<<<<<< HEAD
      ref={ref};
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot;, props.className)}
=======
=======

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
    <Button;
      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();
=======
  return (
    <Button

>>>>>>> main
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
=======
SidebarTrigger.displayName = "SidebarTrigger"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }}
      {...props}

    >;
      <PanelLeft />;
      <span className=&quot;sr - only & quot;>Toggle Sidebar</span>;
    </Button>);
});
SidebarTrigger.display_name = &quot;SidebarTrigger & quot;
;

=======

SidebarTrigger.displayName = "SidebarTrigger"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
