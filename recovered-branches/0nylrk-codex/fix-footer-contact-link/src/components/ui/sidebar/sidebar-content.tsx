
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
=======
import * as React from "react"
import type {_SafeRef} from "../sidebar.types"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const _SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(_(props, _ref) => {_return (
    <Input
      ref={ref}
<<<<<<< HEAD
      data-sidebar=&quot;input&quot;
      className={cn(
        &quot;h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring&quot;,
        props.className
=======
      data-sidebar="input"
      className={_cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", _props.className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    />
  )
})
SidebarInput.displayName = &quot;SidebarInput&quot;

export const _SidebarHeader = React.forwardRef<
  HTMLDivElement,
<<<<<<< HEAD
  React.ComponentProps<&quot;div&quot;>
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar=&quot;header&quot;
      className={cn(&quot;flex flex-col gap-2 p-2&quot;, props.className)}
      {...props}
=======
  React.ComponentProps<"div">
>(_(props, _ref) => {_return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header"
      className={_cn("flex flex-col gap-2 p-2", _props.className)}
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
})
SidebarHeader.displayName = &quot;SidebarHeader&quot;

export const _SidebarFooter = React.forwardRef<
  HTMLDivElement,
<<<<<<< HEAD
  React.ComponentProps<&quot;div&quot;>
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar=&quot;footer&quot;
      className={cn(&quot;flex flex-col gap-2 p-2&quot;, props.className)}
      {...props}
=======
  React.ComponentProps<"div">
>(_(props, _ref) => {_return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer"
      className={_cn("flex flex-col gap-2 p-2", _props.className)}
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
})
SidebarFooter.displayName = &quot;SidebarFooter&quot;

export const _SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator>
>(_(props, _ref) => {_return (
    <Separator
      ref={ref}
<<<<<<< HEAD
      data-sidebar=&quot;separator&quot;
      className={cn(&quot;mx-2 w-auto bg-sidebar-border&quot;, props.className)}
      {...props}
=======
      data-sidebar="separator"
      className={_cn("mx-2 w-auto bg-sidebar-border", _props.className)}
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
})
SidebarSeparator.displayName = &quot;SidebarSeparator&quot;

export const _SidebarContent = React.forwardRef<
  HTMLDivElement,
<<<<<<< HEAD
  React.ComponentProps<&quot;div&quot;>
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar=&quot;content&quot;
      className={cn(
        &quot;flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden&quot;,
        props.className
=======
  React.ComponentProps<"div">
>(_(props, _ref) => {_return (
    <div
      ref={ref}
      data-sidebar="content"
      className={_cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", _props.className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    />
  )
})
SidebarContent.displayName = &quot;SidebarContent&quot;

export const _SidebarGroup = React.forwardRef<
  HTMLDivElement,
<<<<<<< HEAD
  React.ComponentProps<&quot;div&quot;>
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar=&quot;group&quot;
      className={cn(&quot;relative flex w-full min-w-0 flex-col p-2&quot;, props.className)}
      {...props}
=======
  React.ComponentProps<"div">
>(_(props, _ref) => {_return (
    <div
      ref={ref}
      data-sidebar="group"
      className={_cn("relative flex w-full min-w-0 flex-col p-2", _props.className)}
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
})
SidebarGroup.displayName = &quot;SidebarGroup&quot;
