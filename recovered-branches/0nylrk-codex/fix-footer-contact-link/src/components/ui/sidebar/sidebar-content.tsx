
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"

export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
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
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header"
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer"
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator>
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
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
  return (
    <div
      ref={ref}
      data-sidebar="group"
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"
