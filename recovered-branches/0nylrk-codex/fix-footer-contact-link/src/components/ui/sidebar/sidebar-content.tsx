
import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
>((props, ref) => {
  return (
    <Input;
      ref={ref}
      data-sidebar=&quot;input&quot;
      className={cn(
        &quot;h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring&quot;
        props.className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = &quot;SidebarInput&quot;
export const SidebarHeader = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
>((props, ref) => {
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;header & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}
    />
  )
})
SidebarHeader.displayName = &quot;SidebarHeader&quot;
export const SidebarFooter = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
>((props, ref) => {
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;footer & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}
    />
  )
})
SidebarFooter.displayName = &quot;SidebarFooter&quot;
export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
>((props, ref) => {
  return (
    <Separator;
      ref={ref}
      data - sidebar=&quot;separator & quot;
      className={cn (&quot;mx - 2 w - auto bg - sidebar - border & quot;, props.class_name)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = &quot;SidebarSeparator&quot;
export const SidebarContent = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
>((props, ref) => {
  return (
    <div;
      ref={ref}
      data-sidebar=&quot;content&quot;
      className={cn(
        &quot;flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden&quot;
        props.className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = &quot;SidebarContent&quot;
export const SidebarGroup = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
>((props, ref) => {
  return (
    <div;
      ref={ref}
      data - sidebar=&quot;group & quot;
      className={cn (&quot;relative flex w - full min - w-0 flex - col p - 2&quot;, props.class_name)}
      {...props}
    />
  )
})
SidebarGroup.displayName = &quot;SidebarGroup&quot;
