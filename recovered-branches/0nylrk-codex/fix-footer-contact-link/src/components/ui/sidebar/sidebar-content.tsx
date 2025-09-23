
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"

export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
<<<<<<< HEAD
>((propsref) => {
=======
>((props, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <Input
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
SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
<<<<<<< HEAD
>((propsref) => {
=======
>((props, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header"
<<<<<<< HEAD
      className={cn("flex flex-col gap-2 p-2"props.className)}
=======
      className={cn("flex flex-col gap-2 p-2", props.className)}
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
<<<<<<< HEAD
>((propsref) => {
=======
>((props, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer"
<<<<<<< HEAD
      className={cn("flex flex-col gap-2 p-2"props.className)}
=======
      className={cn("flex flex-col gap-2 p-2", props.className)}
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator>
<<<<<<< HEAD
>((propsref) => {
=======
>((props, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
<<<<<<< HEAD
      className={cn("mx-2 w-auto bg-sidebar-border"props.className)}
=======
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
<<<<<<< HEAD
>((propsref) => {
=======
>((props, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        props.className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
<<<<<<< HEAD
>((propsref) => {
=======
>((props, ref) => {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div
      ref={ref}
      data-sidebar="group"
<<<<<<< HEAD
      className={cn("relative flex w-full min-w-0 flex-col p-2"props.className)}
=======
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}
>>>>>>> origin/auto/autonomy-17186719616
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"
