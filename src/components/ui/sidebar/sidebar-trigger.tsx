<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from "react"
import { PanelLeft } from 'lucide-react'

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

export const SidebarTrigger = React.forwardRef<
=======
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from &quot;react&quot;
import { PanelLeft } from 'lucide-react';
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;

xport const SidebarTrigger = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from "react"
import { PanelLeft } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

export const SidebarTrigger = React.forwardRef<
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
<<<<<<< HEAD

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
    <Button;
      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    <Button;
      ref={ref};
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot; props.className)}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
SidebarTrigger.displayName = "SidebarTrigger"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

SidebarTrigger.displayName = "SidebarTrigger"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
