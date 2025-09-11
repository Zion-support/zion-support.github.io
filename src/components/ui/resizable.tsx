<<<<<<< HEAD
<<<<<<< HEAD
import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;


import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { GripVertical } from 'lucide-react'
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as ResizablePrimitive from "react-resizable-panels"

<<<<<<< HEAD
import { cn } from "@/lib/utils"
=======
import { GripVertical } from 'lucide-react'

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const ResizablePanelGroup = ({
onst ResizablePanelGroup = ({
=======

const ResizablePanelGroup = ({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
ursor/fix-website-loading-errors-and-merge-6662
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",


      className
<<<<<<< HEAD
=======
    )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-website-loading-errors-and-merge-6662
      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",


      className
<<<<<<< HEAD
=======
    )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from &quot;react - resizable - panels & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
=======

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
