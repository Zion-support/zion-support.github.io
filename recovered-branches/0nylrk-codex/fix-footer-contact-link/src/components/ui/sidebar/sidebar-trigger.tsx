

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
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

=======
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", props.className)}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }}
      {...props}
<<<<<<< HEAD
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
