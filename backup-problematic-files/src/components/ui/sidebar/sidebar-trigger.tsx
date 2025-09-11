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
    <Button;
      ref={ref}
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();
      }}
      {...props}
    >;
      <PanelLeft />;
      <span className=&quot;sr - only & quot;>Toggle Sidebar</span>;
    </Button>);
});
SidebarTrigger.display_name = &quot;SidebarTrigger & quot;
;