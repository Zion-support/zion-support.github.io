


<<<<<<< HEAD
import * as React from &quot;react&quot;
import { PanelLeft } from &quot;lucide-react&quot;
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  return (
    <Button
<<<<<<< HEAD
      ref={ref};
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot;, props.className)}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import * as React from "react";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
;
export const SidebarTrigger = React.forwardRef<;
  React.ElementRef<typeof Button>,;
  React.ComponentProps<typeof Button>;
>((props, ref) => {;
  const { toggleSidebar } = useSidebar();
;
  return (;
    <Button;
      ref={ref}
      data-sidebar="trigger";
      variant="ghost";
      size="icon";
      className={cn("h-7 w-7", props.className)}
      onClick={(event) => {;
        props.onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >;
      <PanelLeft />;

SidebarTrigger.displayName = "SidebarTrigger"

<<<<<<< HEAD
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  );
});
SidebarTrigger.displayName = "SidebarTrigger"; export const SidebarTrigger = React.forwardRef< React.ElementRef<typeof Button>;
React.ComponentProps<typeof Button> > ( (props, ref) => {
  const {
  toggleSidebar 
}= useSidebar () return (<Button props.onClick?. (event) toggleSidebar () 
}
}{
  ...props 
}> <PanelLeft /> <span className="sr-only" >Toggle Sidebar</span> </Button>) 
}) SidebarTrigger.displayName = "SidebarTrigger" 
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
SidebarTrigger.displayName = "SidebarTrigger"
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
