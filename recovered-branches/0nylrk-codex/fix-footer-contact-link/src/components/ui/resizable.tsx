<<<<<<< HEAD
<<<<<<< HEAD
import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
=======


>>>>>>> main
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
const ResizablePanelGroup = ({
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
=======
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",


>>>>>>> main
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
      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
=======
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",


>>>>>>> main
      className
    )}
    {...props}
  >
    {withHandle && (
<<<<<<< HEAD
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
=======
      <div className=&quot;z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border&quot;>
        <GripVertical className=&quot;h-2.5 w-2.5&quot; />
>>>>>>> main
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>;
);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

import { GripVertical } from &quot;lucide-react & quot;
import * as ResizablePrimitive from &quot;react - resizable - panels & quot;
;
import { cn } from &quot;@/lib / utils & quot;
=======

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;

>>>>>>> main
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> main
