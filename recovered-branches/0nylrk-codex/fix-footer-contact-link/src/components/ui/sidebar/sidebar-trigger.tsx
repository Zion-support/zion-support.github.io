
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-trigger.tsx

=======


=======
import * as React from &quot;react&quot;
import { PanelLeft } from &quot;lucide-react&quot;
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import * as React from "react"
import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-trigger.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-trigger.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-trigger.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-trigger.tsx
  return (
    <Button

<<<<<<< HEAD
=======
  return (
    <Button
<<<<<<< HEAD
      ref={ref};
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot;, props.className)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }}
      {...props}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }}
      {...props}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
<<<<<<< HEAD

=======

========

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }}
      {...props}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-trigger.tsx
    >;
      <PanelLeft />;
<<<<<<< HEAD
      <span className=&quot;sr - only & quot;>Toggle Sidebar</span>;
    </Button>);
});
SidebarTrigger.display_name = &quot;SidebarTrigger & quot;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-trigger.tsx

=======

SidebarTrigger.displayName = "SidebarTrigger"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-trigger.tsx
=======
<<<<<<< HEAD
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
=======
SidebarTrigger.displayName = "SidebarTrigger"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
