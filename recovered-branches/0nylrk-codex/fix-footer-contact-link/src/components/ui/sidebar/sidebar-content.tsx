
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"

<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from &quot;react & quot;
import { Input } from &quot;@/components / ui / input & quot;
import { Separator } from &quot;@/components / ui / separator & quot;
import { cn } from &quot;@/lib / utils & quot;
import type { SafeRef } from &quot;../sidebar.types & quot;
;
export const SidebarInput = React.forward_ref<;
  React.ElementRef < typeof Input>,
  React.ComponentProps < typeof Input>;
<<<<<<< HEAD
>((props, ref) => {
  return (
      ref={ref}
      data-sidebar="input"

      className={cn(

        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",


<<<<<<< HEAD
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
>((props, ref) => {
  return (
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>((props, ref) => {
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Input
      ref={ref};
      data-sidebar=&quot;input&quot;
      ref={ref}
      data-sidebar="input"
      className={cn(
        &quot;h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring&quot;
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD

<<<<<<< HEAD
    <Input;
      ref={ref}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      data - sidebar=&quot;input & quot;
      className={cn (
        &quot;h - 8 w - full bg - background shadow - none focus - visible:ring - 2 focus - visible:ring - sidebar - ring & quot;,
        props.class_name)}
      {...props}
    />);
});
SidebarInput.display_name = &quot;SidebarInput & quot;
;
export const SidebarHeader = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<

>((props, ref) => {
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;header & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}

    />);
});
SidebarHeader.display_name = &quot;SidebarHeader & quot;
;
export const SidebarFooter = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<

>((props, ref) => {
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;footer & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}


SidebarFooter.displayName = "SidebarFooter"



export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
    />);
});
SidebarFooter.display_name = &quot;SidebarFooter & quot;
;
export const SidebarSeparator = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps < typeof Separator>;
>((props, ref) => {
  return (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
SidebarInput.displayName = &quot;SidebarInput&quot;
export const SidebarHeader = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", props.className)}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>((props, ref) => {
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;header & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {...props}
    />
  )
})
SidebarHeader.displayName = &quot;SidebarHeader&quot;
export const SidebarFooter = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", props.className)}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>((props, ref) => {
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;footer & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {...props}
    />
  )
})
SidebarFooter.displayName = &quot;SidebarFooter&quot;
SidebarFooter.displayName = "SidebarFooter"

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
<<<<<<< HEAD
>((props, ref) => {
  return (
=======
=======
    />);
});
SidebarFooter.display_name = &quot;SidebarFooter & quot;
;
export const SidebarSeparator = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps < typeof Separator>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>((props, ref) => {
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Separator
      ref={ref};
      data-sidebar=&quot;separator&quot;
      className={cn(&quot;mx-2 w-auto bg-sidebar-border&quot;, props.className)}
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
<<<<<<< HEAD
    <Separator;
      ref={ref}
      data - sidebar=&quot;separator & quot;
      className={cn (&quot;mx - 2 w - auto bg - sidebar - border & quot;, props.class_name)}
      {...props}
    />);
});
SidebarSeparator.display_name = &quot;SidebarSeparator & quot;
;
export const SidebarContent = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<

>((props, ref) => {
  return (
    <div;
      ref={ref}
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",


<<<<<<< HEAD
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {...props}
    />
  )
})
SidebarSeparator.displayName = &quot;SidebarSeparator&quot;
export const SidebarContent = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>((props, ref) => {
  return (
    <div;
      ref={ref}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      data-sidebar="content"
      className={cn(
        &quot;flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden&quot;
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD

      data - sidebar=&quot;content & quot;
      className={cn (
        &quot;flex min - h-0 flex - 1 flex - col gap - 2 overflow - auto group - data-[collapsible = icon]:overflow - hidden & quot;,
        props.class_name)}
      {...props}
    />);
});
SidebarContent.display_name = &quot;SidebarContent & quot;
;
export const SidebarGroup = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<

>((props, ref) => {
  return (
    <div;
      ref={ref}
      data - sidebar=&quot;group & quot;
      className={cn (&quot;relative flex w - full min - w-0 flex - col p - 2&quot;, props.class_name)}
      {...props}

    />);
});
SidebarGroup.display_name = &quot;SidebarGroup & quot;
;

SidebarGroup.displayName = "SidebarGroup"

<<<<<<< HEAD

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { SafeRef } from "../sidebar.types";
;
export const SidebarInput = React.forwardRef<;
  React.ElementRef<typeof Input>,;
  React.ComponentProps<typeof Input>;
>((props, ref) => {;
  return (;
    <Input;
      ref={ref}
      data-sidebar="input";
      className={cn(;
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",;
        props.className;
      )}
      {...props}
    />;
  );
});
SidebarInput.displayName = "SidebarInput";
;
export const SidebarHeader = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div">;
>((props, ref) => {;
  return (;
    <div;
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header";
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />;
  );
});
SidebarHeader.displayName = "SidebarHeader";
;
export const SidebarFooter = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div">;
>((props, ref) => {;
  return (;
    <div;
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer";
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />;
  );
});
SidebarFooter.displayName = "SidebarFooter";
;
export const SidebarSeparator = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<typeof Separator>;
>((props, ref) => {;
  return (;
    <Separator;
      ref={ref}
      data-sidebar="separator";
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
      {...props}
    />;
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
;
export const SidebarContent = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div">;
>((props, ref) => {;
  return (;
    <div;
      ref={ref}
      data-sidebar="content";
      className={cn(;
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",;
        props.className;
      )}
      {...props}
    />;
  );
});
SidebarContent.displayName = "SidebarContent";
;
export const SidebarGroup = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div">;
>((props, ref) => {;
  return (;
    <div;
      ref={ref}
      data-sidebar="group";
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}
      {...props}
    />;
  );
});
SidebarGroup.displayName = "SidebarGroup"; export const SidebarInput = React.forwardRef< React.ElementRef<typeof Input>;
React.ComponentProps<typeof Input> > ( (props, ref) => {
  return (<Input ref= {
  ref 
}) 
}{
  ...props 
}/>) 
}) SidebarInput.displayName = "SidebarInput" export const SidebarHeader = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarHeader.displayName = "SidebarHeader" export const SidebarFooter = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarFooter.displayName = "SidebarFooter" export const SidebarSeparator = React.forwardRef< HTMLDivElement;
React.ComponentProps<typeof Separator> > ( (props, ref) => {
  return (<Separator ref= {
  ref 
}/>) 
}) SidebarSeparator.displayName = "SidebarSeparator" export const SidebarContent = React.forwardRef< HTMLDivElement;
) 
}{
  ...props 
}/>) 
}) SidebarContent.displayName = "SidebarContent" export const SidebarGroup = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarGroup.displayName = "SidebarGroup" 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
SidebarContent.displayName = &quot;SidebarContent&quot;
export const SidebarGroup = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>((props, ref) => {
  return (
    <div;
      ref={ref}
      data - sidebar=&quot;group & quot;
      className={cn (&quot;relative flex w - full min - w-0 flex - col p - 2&quot;, props.class_name)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {...props}
    />
  )
})
SidebarGroup.displayName = &quot;SidebarGroup&quot;
SidebarGroup.displayName = "SidebarGroup"
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
