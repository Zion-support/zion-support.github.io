

<<<<<<< HEAD

import * as React from "react"
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"

<<<<<<< HEAD


export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
export const SidebarInput = React.forwardRef<
=======
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>export const SidebarInput = React.forwardRef<
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
import * as React from &quot;react & quot;
import { Input } from &quot;@/components / ui / input & quot;
import { Separator } from &quot;@/components / ui / separator & quot;
import { cn } from &quot;@/lib / utils & quot;
import type { SafeRef } from &quot;../sidebar.types & quot;
;
export const SidebarInput = React.forward_ref<;
  React.ElementRef < typeof Input>,
  React.ComponentProps < typeof Input>;
>((props, ref) => {
<<<<<<< HEAD
  return (
      ref={ref}
      data-sidebar="input"

      className={cn(

        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",


        props.className
      )}
      {...props}
    />
  )
})

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
=======
  return (  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <Input;
      ref={ref}
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

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<

<<<<<<< HEAD
>((props, ref) => {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;footer & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}

<<<<<<< HEAD

SidebarFooter.displayName = "SidebarFooter"



=======
SidebarFooter.displayName = "SidebarFooter"

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
    />);
});
SidebarFooter.display_name = &quot;SidebarFooter & quot;
;
export const SidebarSeparator = React.forward_ref<;
  HTMLDivElement,
>((props, ref) => {
  return (

>((props, ref) => {
  return (
    <Separator;
      ref={ref}
      data - sidebar=&quot;separator & quot;
      className={cn (&quot;mx - 2 w - auto bg - sidebar - border & quot;, props.class_name)}
      {...props}

<<<<<<< HEAD
    />);
});
SidebarSeparator.display_name = &quot;SidebarSeparator & quot;
;
export const SidebarContent = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<

<<<<<<< HEAD
>((props, ref) => {
  return (
    <div;
      ref={ref}

      data-sidebar="content"
      className={cn(

        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",


        props.className
=======
  return (
    <div;
      ref={ref}        props.className
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      )}
      {...props}
    />
  )
<<<<<<< HEAD
})

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
=======
})>((props, ref) => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export const SidebarGroup = React.forwardRef<
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
      {...props}
    />
  )
})
SidebarGroup.displayName = &quot;SidebarGroup&quot;
SidebarGroup.displayName = "SidebarGroup"

