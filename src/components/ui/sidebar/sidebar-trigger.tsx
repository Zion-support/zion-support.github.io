
<<<<<<< HEAD
import * as React from "react";
import { PanelLeft } from 'lucide-react';
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
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
=======
import * as React from &quot;react&quot;
import { PanelLeft } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(_(props, ref) => {const { toggleSidebar} = useSidebar()

  return (
    <Button,
ref={ref}
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot;, props.className)}
      onClick={(event) => {        props.onClick?.(event)
        toggleSidebar()}}
      {_...props}
    >
      <PanelLeft />
      <span className=&quot;sr-only&quot;>Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
