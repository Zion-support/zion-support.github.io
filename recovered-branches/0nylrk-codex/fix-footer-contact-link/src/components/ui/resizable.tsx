<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { GripVertical } from "lucide-react"
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { GripVertical } from "lucide-react""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { GripVertical } from "lucide-react"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { GripVertical } from "lucide-react"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import * as ResizablePrimitive from "react-resizable-panels"
"
import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const ResizablePanelGroup = ({
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
<<<<<<< HEAD
    className={cn(
<<<<<<< HEAD

&quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
    className={cn(      className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    className={cn(

      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",

"flex h-full w-full data-[panel-group-direction=vertical]:flex-col",

      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )}
    {...props}
  />
)
const ResizablePanel = ResizablePrimitive.Panel;
const ResizableHandle = ({}
  withHandle;
  className;
  ...props;
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {}
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle;
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

&quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======

"relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",

      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )}
    {...props}
  >
    {withHandle && (
"
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">"
        <GripVertical className="h-2.5 w-2.5" />
=======
<div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>;
);
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { GripVertical } from &quot;lucide-react & quot;
import * as ResizablePrimitive from &quot;react - resizable - panels & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

;
;
const ResizablePanelGroup = ({}
  class_name,
  ...props;
}: React.ComponentProps < typeof ResizablePrimitive.PanelGroup>) =>: any (
  <ResizablePrimitive.PanelGroup;
    className={cn(

"
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col","
      className;)
    )}
    {...props}
/>);
const ResizablePanel = ResizablePrimitive.Panel;
const ResizableHandle = ({}
  with_handle,
  class_name,
  ...props;
}: React.ComponentProps < typeof ResizablePrimitive.PanelResizeHandle> & {}
  class_name,
}: React.ComponentProps < typeof ResizablePrimitive.PanelGroup>) =>: any (
    className={cn (
      &quot;flex h - full w - full data-[panel - group - direction = vertical]:flex - col & quot;,)
      class_name)}
  />);

}: React.ComponentProps < typeof ResizablePrimitive.PanelResizeHandle> & {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  with_handle?: boolean;
}) =>: any (
      &quot;relative flex w - px items - center justify - center bg - border after:absolute after:inset - y-0 after:left - 1/2 after:w - 1 after:-translate - x-1 / 2 focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring focus - visible:ring - offset - 1 data-[panel - group - direction = vertical]:h - px data-[panel - group - direction = vertical]:w - full data-[panel - group - direction = vertical]:after:left - 0 data-[panel - group - direction = vertical]:after:h - 1 data-[panel - group - direction = vertical]:after:w - full data-[panel - group - direction = vertical]:after:-translate - y-1 / 2 data-[panel - group - direction = vertical]:after:translate - x-0 [&[data - panel - group - direction = vertical]>div]:rotate - 90 & quot;,

      <div className=&quot;z - 10 flex h - 4 w - 3 items - center justify - center rounded - sm border bg - border & quot;>;
        <GripVertical className=&quot;h - 2.5 w - 2.5 & quot; />;
)
      </div>)}
  </ResizablePrimitive.PanelResizeHandle>);
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
<<<<<<< HEAD
<<<<<<< HEAD
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
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
