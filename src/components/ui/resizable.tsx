


const ResizablePanelGroup = ({
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(

      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
=======


>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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

import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from &quot;react - resizable - panels & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

;
<<<<<<< HEAD
