<<<<<<< HEAD
<<<<<<< HEAD

=======
import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
=======
import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
=======
import { GripVertical } from 'lucide-react'
<<<<<<< HEAD
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
import * as ResizablePrimitive from "react-resizable-panels"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const ResizablePanelGroup = ({
=======
onst ResizablePanelGroup = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
=======
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
>>>>>>>     )}
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

=======
      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
=======
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
>>>>>>>     )}
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

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

;
<<<<<<< HEAD

=======
>>>>>>> >>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
