import * as ResizablePrimitive from "react-resizable-panels"


const _ResizablePanelGroup = (_{_className, _...props}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={_cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col", _className
    )}
    {_...props}
  />
)

const _ResizablePanel = ResizablePrimitive.Panel

const _ResizableHandle = (_{_withHandle, _className, _...props}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {_withHandle?: boolean}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={_cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", _className
    )}
    {_...props}
  >
    {_withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export {_ResizablePanelGroup, _ResizablePanel, _ResizableHandle}
