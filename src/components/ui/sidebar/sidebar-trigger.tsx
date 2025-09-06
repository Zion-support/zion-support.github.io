
<<<<<<< HEAD

export const SidebarTrigger = React.forwardRef<
=======
import * as React from &quot;react&quot;
import { PanelLeft } from 'lucide-react';
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;

xport const SidebarTrigger = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()

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

=======
    <Button;
      ref={ref};
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot; props.className)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
<<<<<<< HEAD

=======
SidebarTrigger.displayName = &quot;SidebarTrigger&quot;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
