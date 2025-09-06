<<<<<<< HEAD
import { GripVertical } from 'lucide-react'
<<<<<<< HEAD
import * as ResizablePrimitive from "react-resizable-panels"
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD
import { cn } from "@/lib/utils"

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
=======
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>;
);
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
=======

import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from &quot;react - resizable - panels & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
<<<<<<< HEAD
=======

;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
