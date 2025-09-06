
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
=======
=======


>>>>>>> main
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
>((props, ref) => {
  return (
    <Input
<<<<<<< HEAD
      ref={ref};
      data-sidebar=&quot;input&quot;
=======
      ref={ref}
      data-sidebar="input"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      className={cn(
<<<<<<< HEAD
        &quot;h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring&quot;
=======
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
=======
import * as React from &quot;react & quot;
import { Input } from &quot;@/components / ui / input & quot;
import { Separator } from &quot;@/components / ui / separator & quot;
import { cn } from &quot;@/lib / utils & quot;
import type { SafeRef } from &quot;../sidebar.types & quot;
;
export const SidebarInput = React.forward_ref<;
  React.ElementRef < typeof Input>,
  React.ComponentProps < typeof Input>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>((props, ref) => {
  return (

    <Input

      ref={ref}
      data-sidebar="input"

      className={cn(

        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",


>>>>>>> main
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
SidebarInput.displayName = &quot;SidebarInput&quot;
export const SidebarHeader = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
=======
SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
=======
  HTMLDivElement,
  React.ComponentProps<"div">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />
  )
})
<<<<<<< HEAD
SidebarHeader.displayName = &quot;SidebarHeader&quot;
export const SidebarFooter = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
=======
SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
=======
  HTMLDivElement,
  React.ComponentProps<"div">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />
  )
})
<<<<<<< HEAD
SidebarFooter.displayName = &quot;SidebarFooter&quot;
=======
SidebarFooter.displayName = "SidebarFooter"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
>((props, ref) => {
  return (
    <Separator
<<<<<<< HEAD
      ref={ref};
      data-sidebar=&quot;separator&quot;
      className={cn(&quot;mx-2 w-auto bg-sidebar-border&quot;, props.className)}
=======
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      {...props}
    />
  )
})
<<<<<<< HEAD
SidebarSeparator.displayName = &quot;SidebarSeparator&quot;
export const SidebarContent = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
=======
SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
=======
  HTMLDivElement,
  React.ComponentProps<"div">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
<<<<<<< HEAD
        &quot;flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden&quot;
=======
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

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

=======

SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======

SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

    <Separator

      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}


      {...props}

    />);
});
SidebarSeparator.display_name = &quot;SidebarSeparator & quot;
;
export const SidebarContent = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

=======

SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>((props, ref) => {
  return (
    <div;
      ref={ref}

      data-sidebar="content"
      className={cn(

        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",


>>>>>>> main
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
SidebarContent.displayName = &quot;SidebarContent&quot;
export const SidebarGroup = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
=======
SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
=======
  HTMLDivElement,
  React.ComponentProps<"div">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
SidebarGroup.displayName = &quot;SidebarGroup&quot;
=======
SidebarGroup.displayName = "SidebarGroup"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

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

=======

SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======

SidebarGroup.displayName = "SidebarGroup"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
