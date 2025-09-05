
import * as React from "react"
import type {_CSSProperties} from "react"
import type {_SafeRef} from "../sidebar.types"

export interface SidebarProps extends React.ComponentProps<"div"> {_side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"}

export const _Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(_(props, _ref) => {_const { isMobile, _state, _openMobile, _setOpenMobile} = useSidebar()

  if (props.collapsible === "none") {_return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", _props.className
        )}
        ref={_ref}
        {_...props}
      >
        {_props.children}
      </div>
    )
  }

  if (isMobile) {_return (
      <Sheet open={openMobile} onOpenChange={_setOpenMobile} {_...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={_{
              "--sidebar-width": "18rem"} as CSSProperties
          }
          side={_props.side}
        >
          <div className="flex h-full w-full flex-col">{_props.children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      ref={_ref}
      className="group peer hidden md:block text-sidebar-foreground"
      data-state={_state}
      data-collapsible={_state === "collapsed" ? props.collapsible : ""}
      data-variant={_props.variant}
      data-side={_props.side}
    >
      {_/* This is what handles the sidebar gap on desktop */}
      <div
        className={_cn(
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear", _"group-data-[collapsible=offcanvas]:w-0", _"group-data-[side=right]:rotate-180", _props.variant === "floating" || props.variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
        )}
      />
      <div
        className={_cn(
          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left, _right, _width] ease-linear md:flex", _props.side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", _// Adjust the padding for floating and inset variants.
          props.variant === "floating" || props.variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", _props.className
        )}
        {_...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
        >
          {_props.children}
        </div>
      </div>
    </div>
  )
})
Sidebar.displayName = "Sidebar"

export const _SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(_(props, _ref) => {_const { toggleSidebar} = useSidebar()

  return (
    <button
      ref={_ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={_-1}
      onClick={_toggleSidebar}
      title="Toggle Sidebar"
      className={_cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", _"[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", _"[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", _"group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", _"[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", _"[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", _props.className
      )}
      {_...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

export const _SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(_(props, _ref) => {_return (
    <main
      ref={ref as SafeRef<HTMLDivElement>}
      className={_cn(
        "relative flex min-h-svh flex-1 flex-col bg-background", _"peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", _props.className
      )}
      {_...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"
