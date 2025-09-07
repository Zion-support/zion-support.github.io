

import { GripVertical } from "lucide-react"""
import * as ResizablePrimitive from "react-resizable-panels"""
import { cn } from "@/lib/utils""
const ResizablePanelGroup = ({
  className;
  ...props;)
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
</typeof>
  <ResizablePrimitive.PanelGroup;
    className={cn(

"
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col","
      className;)
    )}
    {...props}
  />

}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  <ResizablePrimitive.PanelResizeHandle;

      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90","

      <div className=&quot;z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border&quot;>
</div>
        <GripVertical className=&quot;h-2.5 w-2.5&quot; />
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">"
</div>"
        <GripVertical className="h-2.5 w-2.5" />"

  </ResizablePrimitive.PanelResizeHandle>;)
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

import { GripVertical } from &quot;lucide-react & quot;
import * as ResizablePrimitive from &quot;react - resizable - panels & quot;
import { cn } from &quot;@/lib / utils & quot;



  class_name,
}: React.ComponentProps < typeof ResizablePrimitive.PanelGroup>) =>: any (
    className={cn (
      &quot;flex h - full w - full data-[panel - group - direction = vertical]:flex - col & quot;,)
      class_name)}
  />);

}: React.ComponentProps < typeof ResizablePrimitive.PanelResizeHandle> & {
  with_handle?: boolean;
}) =>: any (
      &quot;relative flex w - px items - center justify - center bg - border after:absolute after:inset - y-0 after:left - 1/2 after:w - 1 after:-translate - x-1 / 2 focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring focus - visible:ring - offset - 1 data-[panel - group - direction = vertical]:h - px data-[panel - group - direction = vertical]:w - full data-[panel - group - direction = vertical]:after:left - 0 data-[panel - group - direction = vertical]:after:h - 1 data-[panel - group - direction = vertical]:after:w - full data-[panel - group - direction = vertical]:after:-translate - y-1 / 2 data-[panel - group - direction = vertical]:after:translate - x-0 [&[data - panel - group - direction = vertical]>div]:rotate - 90 & quot;,

      <div className=&quot;z - 10 flex h - 4 w - 3 items - center justify - center rounded - sm border bg - border & quot;>;
        <GripVertical className=&quot;h - 2.5 w - 2.5 & quot; />;
)
      </div>)}
  </ResizablePrimitive.PanelResizeHandle>);