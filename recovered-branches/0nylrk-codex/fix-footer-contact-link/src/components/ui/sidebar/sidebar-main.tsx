
  if (props.collapsible === &quot;none&quot;) {
    return (
      <div
        className={cn(
          &quot;flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground&quot;
;
  if (props.collapsible === &quot;none&quot;) {


;
  if (props.collapsible === &quot;none&quot;) {


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
    <div;
      ref={ref}
;
  return (;
    <div;
      ref={ref}
className=&quot;group peer hidden md:block text-sidebar-foreground&quot;
      className="group peer hidden md:block text-sidebar-foreground"

      data-state={state}
      data-collapsible={state === "collapsed" ? props.collapsible : ""}
      data-variant={props.variant}
      data-side={props.side}
    >;
      {/* This is what handles the sidebar gap on desktop */}
        )}
      />
      <div
        className={cn(
        {...props}
      >;
        <div;
          data - sidebar=&quot;sidebar";
          className="flex h - full w - full flex - col bg - sidebar group - data-[variant = floating]:rounded - lg group - data-[variant = floating]:border group - data-[variant = floating]:shadow & quot;
        >;
          {props.children}


Sidebar.displayName = "Sidebar"

export const SidebarRail = React.forwardRef<


>((props, ref) => {
  const { toggleSidebar } = useSidebar()
        </div>;
      </div>;
    </div>);
});
Sidebar.display_name = &quot;Sidebar & quot;
;
export const SidebarRail = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps<&quot;button & quot;>;
>((props, ref) => {
  const { toggle_sidebar } = use_sidebar ();
  return (
    <button;
      ref={ref}


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
