import { GripVertical } from 'lucide-react'
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as ResizablePrimitive from "react-resizable-panels"


const ResizablePanelGroup = ({
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
