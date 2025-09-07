
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"

export const SidebarInput = $2;
  React.ComponentProps<typeof Input>
>((props, ref) => {
  return (
    <Input
      ref = $2;
        props.className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = $2;
  React.ComponentProps<"div">
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
SidebarHeader.displayName = $2;
  React.ComponentProps<"div">
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
SidebarFooter.displayName = $2;
  React.ComponentProps<typeof Separator>
>((props, ref) => {
  return (
    <Separator
      ref={ref};
      data-sidebar=&quot;separator&quot;
      className={cn(&quot;mx-2 w-auto bg-sidebar-border&quot;, props.className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = $2;
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref = $2;
        props.className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = $2;
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