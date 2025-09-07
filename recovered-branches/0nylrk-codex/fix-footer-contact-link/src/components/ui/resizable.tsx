import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;

<<<<<<< HEAD
=======

<<<<<<< HEAD
import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
import { GripVertical } from &quot;lucide-react&quot;
import * as ResizablePrimitive from &quot;react-resizable-panels&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { GripVertical } from "lucide-react"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import * as ResizablePrimitive from "react-resizable-panels"
"
import { cn } from "@/lib/utils"

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const ResizablePanelGroup = ({
  className
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
<<<<<<< HEAD
=======
    className={cn(

<<<<<<< HEAD
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",


      &quot;flex h-full w-full data-[panel-group-direction=vertical]:flex-col&quot;
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
=======

      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className
<<<<<<< HEAD
=======
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
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",


      &quot;relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90&quot;
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
=======

      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className

    )}
    {...props}
  >
    {withHandle && (
<<<<<<< HEAD

=======
<<<<<<< HEAD
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
=======
      <div className=&quot;z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border&quot;>
        <GripVertical className=&quot;h-2.5 w-2.5&quot; />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>;
);
<<<<<<< HEAD
=======

<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { GripVertical } from &quot;lucide-react & quot;
import * as ResizablePrimitive from &quot;react - resizable - panels & quot;
;
import { cn } from &quot;@/lib / utils & quot;

<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

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

=======
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;

<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
;
import { cn } from "@/lib/utils";
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
=======
    {with_handle && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className=&quot;z - 10 flex h - 4 w - 3 items - center justify - center rounded - sm border bg - border & quot;>;
        <GripVertical className=&quot;h - 2.5 w - 2.5 & quot; />;
)
      </div>)}
  </ResizablePrimitive.PanelResizeHandle>);
<<<<<<< HEAD
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
