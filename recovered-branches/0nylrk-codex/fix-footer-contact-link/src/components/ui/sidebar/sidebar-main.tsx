<<<<<<< HEAD



<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import type { CSSProperties } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"
import type { SafeRef } from "../sidebar.types"

export interface SidebarProps extends React.ComponentProps<"div"> {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"

<<<<<<< HEAD
}
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

=======
  if (props.collapsible === "none") {

}
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (props.collapsible === &quot;none&quot;) {
    return (
      <div
        className={cn(
          &quot;flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground&quot;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
  if (props.collapsible === &quot;none&quot;) {

  if (props.collapsible === "none") {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
  if (props.collapsible === &quot;none&quot;) {


;
  if (props.collapsible === &quot;none&quot;) {


  if (props.collapsible === "none") {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          props.className
        )}
=======
=======
          props.className
        )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          props.className
        )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import * as React from "react";
import type { CSSProperties } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import type { SafeRef } from "../sidebar.types";
;
export interface SidebarProps extends React.ComponentProps<"div"> {;
  side?:"left" | "right";
  variant?:"sidebar" | "floating" | "inset";
  collapsible?:"offcanvas" | "icon" | "none";
}
;
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {;
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
;
  if (props.collapsible === "none") {;
    return (;
      <div;
        className={cn(;
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",;
          props.className;
        )}
          props.className
        )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        ref={ref}
        {...props}
      >;
        {props.children}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
// Check condition
if ( {) {
  $2
}
    return (
  }
<<<<<<< HEAD

  return (

=======
  return (

  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div;
      ref={ref}
className=&quot;group peer hidden md:block text - sidebar - foreground & quot;
      data - state={state}
      data - collapsible={state === &quot;collapsed & quot; ? props.collapsible : ""}
      data - variant={props.variant}
      data - side={props.side}
<<<<<<< HEAD
=======

=======

      </div>;
    );
  }
if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": "18rem"} as CSSProperties
          }
          side={props.side}
        >
          <div className="flex h-full w-full flex-col">{props.children}</div>
        </SheetContent>
      </Sheet>
    )
  }
  return (;
    <div;
      ref={ref}
className=&quot;group peer hidden md:block text-sidebar-foreground&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
  return (;
    <div;
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD

=======
      className="group peer hidden md:block text-sidebar-foreground"
className=&quot;group peer hidden md:block text-sidebar-foreground&quot;
      className="group peer hidden md:block text-sidebar-foreground"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
className=&quot;group peer hidden md:block text-sidebar-foreground&quot;
      className="group peer hidden md:block text-sidebar-foreground"

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      data-state={state}
      data-collapsible={state === "collapsed" ? props.collapsible : ""}
      data-variant={props.variant}
      data-side={props.side}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    >;
      {/* This is what handles the sidebar gap on desktop */}


=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          props.variant === "floating" || props.variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        )}
      />
      <div
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD


=======
          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex&quot;
          props.side === &quot;left&quot;
            ? &quot;left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]&quot;
            : &quot;right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]&quot;
          // Adjust the padding for floating and inset variants.
          props.variant === &quot;floating&quot; |props.variant === &quot;inset&quot;
            ? &quot;p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]&quot;
            : &quot;group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
          props.side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          props.variant === "floating" || props.variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
<<<<<<< HEAD
=======
          props.className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
        >
          {props.children}
        </div>
      </div>
    </div>
  )
})
Sidebar.displayName = &quot;Sidebar&quot;
export const SidebarRail = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<&quot;button&quot;>
Sidebar.displayName = "Sidebar"

export const SidebarRail = React.forwardRef<
  HTMLButtonElement,;
  React.ComponentProps<&quot;button&quot;>
  HTMLButtonElement,
  React.ComponentProps<"button">
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

          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
          props.side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          props.variant === "floating" || props.variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


          props.className
        )}
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
<div;
        className={cn (
          "duration - 200 relative h - svh w-[--sidebar - width] bg - transparent transition-[width] ease - linear & quot;,
          &quot;group - data-[collapsible = offcanvas]:w - 0&quot;,
          &quot;group - data-[side = right]:rotate - 180 & quot;,
          props.variant === &quot;floating & quot; || props.variant === &quot;inset & quot;
            ? &quot;group - data-[collapsible = icon]:w-[calc (var (--sidebar - width - icon)_ + _theme (spacing.4)))]&quot;
            : &quot;group - data-[collapsible = icon]:w-[--sidebar - width - icon]")}
      />;
      <div;
        className={cn (
          "duration - 200 fixed inset - y-0 z - 10 hidden h - svh w-[--sidebar - width] transition-[left, right, width] ease - linear md:flex & quot;,
          props.side === &quot;left & quot;
            ? &quot;left - 0 group - data-[collapsible = offcanvas]:left-[calc (var (--sidebar - width)*-1)]&quot;
            : &quot;right - 0 group - data-[collapsible = offcanvas]:right-[calc (var (--sidebar - width)*-1)]&quot;,
          // Adjust the padding for floating and inset variants.;
          props.variant === &quot;floating & quot; || props.variant === &quot;inset & quot;
            ? &quot;p - 2 group - data-[collapsible = icon]:w-[calc (var (--sidebar - width - icon)_ + _theme (spacing.4)_ + 2px)]&quot;
            : &quot;group - data-[collapsible = icon]:w-[--sidebar - width - icon] group - data-[side = left]:border - r group - data-[side = right]:border - l&quot;,
          props.class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {...props}
      >;
        <div;
          data - sidebar=&quot;sidebar";
          className="flex h - full w - full flex - col bg - sidebar group - data-[variant = floating]:rounded - lg group - data-[variant = floating]:border group - data-[variant = floating]:shadow & quot;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        >;
          {props.children}
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
  return (
    <button;
      ref={ref}
<<<<<<< HEAD


=======
;
  if (isMobile) {;
    return (;
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>;
        <SheetContent;
          data-sidebar="sidebar";
          data-mobile="true";
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden";
          style={;
            {;
              "--sidebar-width":"18rem"} as CSSProperties;
          }
          side={props.side}
        >;
          <div className="flex h-full w-full flex-col">{props.children}</div>;
        </SheetContent>;
      </Sheet>;
    );  }
;
  return (;
    <div;
      ref={ref}
      className="group peer hidden md:block text-sidebar-foreground";
      data-state={state}
      data-collapsible={state === "collapsed" ? props.collapsible :""}
      data-variant={props.variant}
      data-side={props.side}
    >;
      {/* This is what handles the sidebar gap on desktop */}
      <div;
        className={cn(;
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",;
          "group-data-[collapsible=offcanvas]:w-0",;
          "group-data-[side=right]:rotate-180",;
          props.variant === "floating" || props.variant === "inset";
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)))]";
            :"group-data-[collapsible=icon]:w-[--sidebar-width-icon]";
        )}
      />;
      <div;
        className={cn(;
          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",;
          props.side === "left";
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]";
            :"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",;
          // Adjust the padding for floating and inset variants.;
          props.variant === "floating" || props.variant === "inset";
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]";
            :"group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",;
          props.className;
        )}
        {...props}
      >;
        <div;
          data-sidebar="sidebar";
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow";
        >;
          {props.children}
        </div>;
      </div>;
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex&quot;
        &quot;[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize&quot;
        &quot;[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize&quot;
        &quot;group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar&quot;
        &quot;[[data-side=left][data-collapsible=offcanvas]_&]:-right-2&quot;
        &quot;[[data-side=right][data-collapsible=offcanvas]_&]:-left-2&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD


SidebarRail.displayName = "SidebarRail"

export const SidebarInset = React.forwardRef<


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
SidebarRail.displayName = &quot;SidebarRail&quot;
export const SidebarInset = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;main">
SidebarRail.displayName = "SidebarRail"

export const SidebarInset = React.forwardRef<
  HTMLDivElement,;
  React.ComponentProps<&quot;main">
  HTMLDivElement,
  React.ComponentProps<"main">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>((props, ref) => {
  return (
    <main
      ref={ref as SafeRef<HTMLDivElement>}
      className={cn(
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",


<<<<<<< HEAD
=======
        "relative flex min-h-svh flex-1 flex-col bg-background&quot;
        &quot;peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow&quot;
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      data - sidebar=&quot;rail & quot;
      aria - label=&quot;Toggle Sidebar & quot;
      tab_index={-1}
      on_click={toggle_sidebar}
      title=&quot;Toggle Sidebar";
      className={cn (
        "absolute inset - y-0 z - 20 hidden w - 4 -translate - x-1 / 2 transition - all ease - linear after:absolute after:inset - y-0 after:left - 1/2 after:w-[2px] hover:after:bg - sidebar - border group - data-[side = left]:-right - 4 group - data-[side = right]:left - 0 sm:flex & quot;,
        &quot;[[data - side = left]_&]:cursor - w-resize [[data - side = right]_&]:cursor - e-resize & quot;,
        &quot;[[data - side = left][data - state = collapsed]_&]:cursor - e-resize [[data - side = right][data - state = collapsed]_&]:cursor - w-resize & quot;,
        &quot;group - data-[collapsible = offcanvas]:translate - x-0 group - data-[collapsible = offcanvas]:after:left - full group - data-[collapsible = offcanvas]:hover:bg - sidebar & quot;,
        &quot;[[data - side = left][data - collapsible = offcanvas]_&]:-right - 2&quot;,
        &quot;[[data - side = right][data - collapsible = offcanvas]_&]:-left - 2&quot;,
        props.class_name)}
      {...props}
    />);
});
SidebarRail.display_name = &quot;SidebarRail & quot;
;
export const SidebarInset = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;main">;
>((props, ref) => {
  return (
    <main;
      ref={ref as SafeRef < HTMLDivElement>}
      className={cn (
        "relative flex min - h-svh flex - 1 flex - col bg - background & quot;,
        &quot;peer - data-[variant = inset]:min - h-[calc (100svh - theme (spacing.4))] md:peer - data-[variant = inset]:m - 2 md:peer - data-[state = collapsed]:peer - data-[variant = inset]:ml - 2 md:peer - data-[variant = inset]:ml - 0 md:peer - data-[variant = inset]:rounded - xl md:peer - data-[variant = inset]:shadow & quot;,
        props.class_name)}
      {...props}
    />);
});
SidebarInset.display_name = &quot;SidebarInset";

<<<<<<< HEAD
=======

SidebarInset.displayName = "SidebarInset"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
SidebarInset.displayName = "SidebarInset"

    </div>;
  );
});
Sidebar.displayName = "Sidebar";
;
export const SidebarRail = React.forwardRef<;
  HTMLButtonElement,;
  React.ComponentProps<"button">;
>((props, ref) => {;
  const { toggleSidebar } = useSidebar();
;
  return (;
    <button;
      ref={ref}
      data-sidebar="rail";
      aria-label="Toggle Sidebar";
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar";
      className={cn(;
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",;
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",;
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",;
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",;
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",;
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",;
        props.className;
      )}
      {...props}
    />;
  );
});
SidebarRail.displayName = "SidebarRail";
;
export const SidebarInset = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"main">;
>((props, ref) => {;
  return (;
    <main;
      ref={ref as SafeRef<HTMLDivElement>}
      className={cn(;
        "relative flex min-h-svh flex-1 flex-col bg-background",;
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",;
        props.className;
      )}
      {...props}
    />;
  );
});
SidebarInset.displayName = "SidebarInset";) 
}ref= {
  ref 
}{
  ...props 
}> {
  props.children 
}</div>) 
}if (isMobile) {
  return (<Sheet open= {
  openMobile 
}onOpenChange= {
  setOpenMobile 
}{
  ...props 
}> <SheetContent 
}side= {
  props.side 
}> </SheetContent> </Sheet>) 
}return (<div > {
  /* This is what handles the sidebar gap on desktop */ 
}<div) 
}{
  ...props 
}> <div data-sidebar="sidebar" className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow" > {
  props.children 
}</div> </div> </div>) 
}) Sidebar.displayName = "Sidebar" export const SidebarRail = React.forwardRef< HTMLButtonElement;
) 
}{
  ...props 
}/>) 
}) SidebarRail.displayName = "SidebarRail" export const SidebarInset = React.forwardRef< HTMLDivElement;
) 
}{
  ...props 
}/>) 
}) SidebarInset.displayName = "SidebarInset" 
SidebarInset.displayName = &quot;SidebarInset"
SidebarInset.displayName = "SidebarInset"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
