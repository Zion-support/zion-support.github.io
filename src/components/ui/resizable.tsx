<<<<<<< HEAD

=======
import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
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

=======
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
>>>>>>>       className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
>>>>>>>     )}
    {...props}
  >
    {withHandle && (
      <div className=&quot;z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border&quot;>
        <GripVertical className=&quot;h-2.5 w-2.5&quot; />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>;
);
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
