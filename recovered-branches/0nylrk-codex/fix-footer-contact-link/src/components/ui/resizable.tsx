<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/resizable.tsx

=======


=======
import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const ResizablePanelGroup = ({
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      className
    )}
    {...props}
  />
)
const ResizablePanel = ResizablePrimitive.Panel
const ResizableHandle = ({
  withHandle
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      className
    )}
    {...props}
  >
    {withHandle && (
<<<<<<< HEAD
      <div className=&quot;z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border&quot;>
        <GripVertical className=&quot;h-2.5 w-2.5&quot; />
=======
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>;
);
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

;

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/resizable.tsx
import { GripVertical } from &quot;lucide-react & quot;
import * as ResizablePrimitive from &quot;react - resizable - panels & quot;
;
import { cn } from &quot;@/lib / utils & quot;
=======

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
const ResizablePanelGroup = ({
  class_name,
  ...props;
}: React.ComponentProps < typeof ResizablePrimitive.PanelGroup>) =>: any (
  <ResizablePrimitive.PanelGroup;
    className={cn (
      &quot;flex h - full w - full data-[panel - group - direction = vertical]:flex - col & quot;,
      class_name)}
    {...props}
  />);
const ResizablePanel = ResizablePrimitive.Panel;
const ResizableHandle = ({
  with_handle,
  class_name,
  ...props;
}: React.ComponentProps < typeof ResizablePrimitive.PanelResizeHandle> & {
  with_handle?: boolean;
}) =>: any (
  <ResizablePrimitive.PanelResizeHandle;
    className={cn (
      &quot;relative flex w - px items - center justify - center bg - border after:absolute after:inset - y-0 after:left - 1/2 after:w - 1 after:-translate - x-1 / 2 focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring focus - visible:ring - offset - 1 data-[panel - group - direction = vertical]:h - px data-[panel - group - direction = vertical]:w - full data-[panel - group - direction = vertical]:after:left - 0 data-[panel - group - direction = vertical]:after:h - 1 data-[panel - group - direction = vertical]:after:w - full data-[panel - group - direction = vertical]:after:-translate - y-1 / 2 data-[panel - group - direction = vertical]:after:translate - x-0 [&[data - panel - group - direction = vertical]>div]:rotate - 90 & quot;,
      class_name)}
    {...props}
  >;
    {with_handle && (
      <div className=&quot;z - 10 flex h - 4 w - 3 items - center justify - center rounded - sm border bg - border & quot;>;
        <GripVertical className=&quot;h - 2.5 w - 2.5 & quot; />;
      </div>)}
  </ResizablePrimitive.PanelResizeHandle>);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/resizable.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
=======
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
;
import { cn } from "@/lib/utils";
;
const ResizablePanelGroup = ({;
  className,;
  ...props;
} React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (;
  <ResizablePrimitive.PanelGroup;
    className={cn(;
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",;
      className;
    )}
    {...props}
  />;
);
;
const ResizablePanel = ResizablePrimitive.Panel;
;
const ResizableHandle = ({;
  withHandle,;
  className,;
  ...props;
} React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {;
  withHandle?:boolean;
}) => (;
  <ResizablePrimitive.PanelResizeHandle;
    className={cn(;
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",;
      className;
    )}
    {...props}
  >;
    {withHandle && (;
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">;
        <GripVertical className="h-2.5 w-2.5" />;
      </div>;
    )}
  </ResizablePrimitive.PanelResizeHandle>;
);
;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } const ResizablePanelGroup = ({
  className, ...props 
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (<ResizablePrimitive.PanelGroup) 
}{
  ...props 
}/>) const ResizablePanel = ResizablePrimitive.Panel const ResizableHandle = ({
  withHandle, className, ...props 
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean 
}) => (<ResizablePrimitive.PanelResizeHandle) 
}{
  ...props 
}> </div>) 
}</ResizablePrimitive.PanelResizeHandle>) export {
  ResizablePanelGroup, ResizablePanel, ResizableHandle 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/resizable.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
