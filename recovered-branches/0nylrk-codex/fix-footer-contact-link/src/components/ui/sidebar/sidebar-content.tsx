
import * as React from "react"
import type {_SafeRef} from "../sidebar.types"

export const _SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(_(props, _ref) => {_return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={_cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", _props.className
      )}
      {_...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

export const _SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(_(props, _ref) => {_return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header"
      className={_cn("flex flex-col gap-2 p-2", _props.className)}
      {_...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

export const _SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(_(props, _ref) => {_return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer"
      className={_cn("flex flex-col gap-2 p-2", _props.className)}
      {_...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

export const _SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator>
>(_(props, _ref) => {_return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={_cn("mx-2 w-auto bg-sidebar-border", _props.className)}
      {_...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

export const _SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(_(props, _ref) => {_return (
    <div
      ref={ref}
      data-sidebar="content"
      className={_cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", _props.className
      )}
      {_...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

export const _SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(_(props, _ref) => {_return (
    <div
      ref={ref}
      data-sidebar="group"
      className={_cn("relative flex w-full min-w-0 flex-col p-2", _props.className)}
      {_...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"
