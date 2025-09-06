
import * as React from &quot;react&quot;
import type { CSSProperties } from &quot;react&quot;
import { Sheet, SheetContent } from &quot;@/components/ui/sheet&quot;
import { cn } from &quot;@/lib/utils&quot;
import { useSidebar } from &quot;./sidebar-context&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
export interface SidebarProps extends React.ComponentProps<&quot;div&quot;> {
  side?: &quot;left&quot; | &quot;right&quot;
  variant?: &quot;sidebar&quot; | &quot;floating&quot; | &quot;inset&quot;
  collapsible?: &quot;offcanvas&quot; | &quot;icon&quot; | &quot;none&quot;
  if (props.collapsible === "none") {
    return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          props.className
        )}
import * as React from &quot;react & quot;
import type { CSSProperties } from &quot;react & quot;
import { Sheet, SheetContent } from &quot;@/components / ui / sheet & quot;
import { cn } from &quot;@/lib / utils & quot;
import { use_sidebar } from &quot;./sidebar - context & quot;
import type { SafeRef } from &quot;../sidebar.types & quot;
;
export interface SidebarProps extends React.ComponentProps<&quot;div & quot;> {
  side?: &quot;left & quot; | &quot;right & quot;
  variant?: &quot;sidebar & quot; | &quot;floating & quot; | &quot;inset & quot;
  collapsible?: &quot;offcanvas & quot; | &quot;icon & quot; | &quot;none & quot;
}
export const Sidebar = React.forward_ref < HTMLDivElement SidebarProps>((props, ref) => {
  const { is_mobile, state, open_mobile, setOpenMobile } = use_sidebar ();
  // Check condition
if ( {) {
  $2
}
    return (
      <div;
        className={cn (
          &quot;flex h - full w-[--sidebar - width] flex - col bg - sidebar text - sidebar - foreground & quot;,
          props.class_name)}
        ref={ref}
        {...props}
      >;
        {props.children}
  }
// Check condition
if ( {) {
  $2
}
    return (
  }
  return (;
    <div;
      ref={ref}
;
  return (;
    <div;
      ref={ref}
      data-state={state}
      data-collapsible={state === "collapsed" ? props.collapsible : ""}
      data-variant={props.variant}
      data-side={props.side}
    >;
      {/* This is what handles the sidebar gap on desktop */}
<div
        className={cn(
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear&quot;
          &quot;group-data-[collapsible=offcanvas]:w-0&quot;
          &quot;group-data-[side=right]:rotate-180&quot;
          props.variant === &quot;floating&quot; |props.variant === &quot;inset&quot;
            ? &quot;group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)))]&quot;
            : &quot;group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
        )}
      />
      <div
        className={cn(
          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex&quot;
          props.side === &quot;left&quot;
            ? &quot;left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]&quot;
            : &quot;right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]&quot;
          // Adjust the padding for floating and inset variants.
          props.variant === &quot;floating&quot; |props.variant === &quot;inset&quot;
            ? &quot;p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]&quot;
            : &quot;group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l&quot;
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex&quot;
        &quot;[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize&quot;
        &quot;[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize&quot;
        &quot;group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar&quot;
        &quot;[[data-side=left][data-collapsible=offcanvas]_&]:-right-2&quot;
        &quot;[[data-side=right][data-collapsible=offcanvas]_&]:-left-2&quot;
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        props.className
      )}
      {...props}
    />
  )
})
>((props, ref) => {
  return (
    <main
      ref={ref as SafeRef<HTMLDivElement>}
      className={cn(
        props.className
      )}
      {...props}
    />
  )
})
