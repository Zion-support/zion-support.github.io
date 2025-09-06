
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

}
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
<<<<<<< HEAD
=======

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import type { CSSProperties } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"
=======
import * as React from "react""
import type { CSSProperties } from "react""
import { Sheet, SheetContent } from "@/components/ui/sheet""
import { cn } from "@/lib/utils""
import { useSidebar } from "./sidebar-context""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { SafeRef } from "../sidebar.types"
"
export interface SidebarProps extends React.ComponentProps<"div"> {"
  side?: "left" | "right""
  variant?: "sidebar" | "floating" | "inset""
  collapsible?: "offcanvas" | "icon" | "none"
<<<<<<< HEAD

}
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
<<<<<<< HEAD
<<<<<<< HEAD

=======
  if (props.collapsible === "none") {

}
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (props.collapsible === &quot;none&quot;) {
=======
;
;
  if (props.collapsible === &quot;none&quot;) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return (
      <div;
        className={cn(
          &quot;flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground&quot;
<<<<<<< HEAD
;
  if (props.collapsible === &quot;none&quot;) {

  if (props.collapsible === "none") {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
  if (props.collapsible === &quot;none&quot;) {


;
  if (props.collapsible === &quot;none&quot;) {


  if (props.collapsible === "none") {
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


;
  if (props.collapsible === &quot;none&quot;) {}
;
  if (props.collapsible === &quot;none&quot;) {}
"
  if (props.collapsible === "none") {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return (
      <div;
        className={cn("
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          props.className
=======


          props.className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        )}

import * as React from &quot;react & quot;
import type { CSSProperties } from &quot;react & quot;
import { Sheet, SheetContent } from &quot;@/components / ui / sheet & quot;
import { cn } from &quot;@/lib / utils & quot;
import { use_sidebar } from &quot;./sidebar - context & quot;
import type { SafeRef } from &quot;../sidebar.types & quot;
;
export interface SidebarProps extends React.ComponentProps<&quot;div & quot;> {}
  side?: &quot;left & quot; | &quot;right & quot;
  variant?: &quot;sidebar & quot; | &quot;floating & quot; | &quot;inset & quot;
  collapsible?: &quot;offcanvas & quot; | &quot;icon & quot; | &quot;none & quot;
}
export const Sidebar = React.forward_ref < HTMLDivElement SidebarProps>((props, ref) => {};
  const { is_mobile, state, open_mobile, setOpenMobile } = use_sidebar ();
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <div;
        className={cn (
          &quot;flex h - full w-[--sidebar - width] flex - col bg - sidebar text - sidebar - foreground & quot;,
          props.class_name)}

<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        ref={ref}
        {...props}
      >;
        {props.children}

  }
// Check condition;
if ( {) {}
  $2;
}
    return (
  }

    <div;
      ref={ref}
className=&quot;group peer hidden md:block text - sidebar - foreground & quot;
      data - state={state}"
      data - collapsible={state === &quot;collapsed & quot; ? props.collapsible : ""}
      data - variant={props.variant}
      data - side={props.side}


<<<<<<< HEAD
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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  return (;
    <div;
      ref={ref}
className=&quot;group peer hidden md:block text-sidebar-foreground&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
  return (;
    <div;
      ref={ref}


className=&quot;group peer hidden md:block text-sidebar-foreground&quot;"
      className="group peer hidden md:block text-sidebar-foreground"

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      data-state={state}
=======

      data-state={state}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      data-collapsible={state === "collapsed" ? props.collapsible : ""}
      data-variant={props.variant}
      data-side={props.side}

    >;
      {/* This is what handles the sidebar gap on desktop */}
<<<<<<< HEAD


=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    >;
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          props.className
        )}
          props.className
        )}
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
        ref={ref}
        {...props}
      >;
<<<<<<< HEAD
        {props.children}    >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",        ref={ref}
        {...props}
      >;
        {props.children}    >;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        {props.children}
      </div>);
  }
// Check condition
if ( {) {
  $2
}
    return (
  }

  return (

    <div;
      ref={ref}
className=&quot;group peer hidden md:block text - sidebar - foreground & quot;
      data - state={state}
      data - collapsible={state === &quot;collapsed & quot; ? props.collapsible : ""}
      data - variant={props.variant}
      data - side={props.side}
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




    >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {/* This is what handles the sidebar gap on desktop */}
<div
        className={cn(
<<<<<<< HEAD

=======
=======
<div;
        className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear&quot;
          &quot;group-data-[collapsible=offcanvas]:w-0&quot;
          &quot;group-data-[side=right]:rotate-180&quot;
          props.variant === &quot;floating&quot; |props.variant === &quot;inset&quot;
            ? &quot;group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)))]&quot;"
            : &quot;group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
<<<<<<< HEAD
<<<<<<< HEAD
=======
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          props.variant === "floating" || props.variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear","
          "group-data-[collapsible=offcanvas]:w-0","
          "group-data-[side=right]:rotate-180","
          props.variant === "floating" || props.variant === "inset""
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)))]""
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        )}
      />
      <div;
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
=======
"
          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex","
          props.side === "left""
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants."
          props.variant === "floating" || props.variant === "inset""
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]""
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


        )}
      />
      <div
        className={cn(


          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
          props.side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          props.variant === "floating" || props.variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",


          props.className
        )}
<div;
        className={cn (
=======



          props.className;
        )}

<div;
        className={cn ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          "duration - 200 relative h - svh w-[--sidebar - width] bg - transparent transition-[width] ease - linear & quot;,
          &quot;group - data-[collapsible = offcanvas]:w - 0&quot;,
          &quot;group - data-[side = right]:rotate - 180 & quot;,
          props.variant === &quot;floating & quot; || props.variant === &quot;inset & quot;
            ? &quot;group - data-[collapsible = icon]:w-[calc (var (--sidebar - width - icon)_ + _theme (spacing.4)))]&quot;"
            : &quot;group - data-[collapsible = icon]:w-[--sidebar - width - icon]")}
      />;
      <div;
        className={cn ("
          "duration - 200 fixed inset - y-0 z - 10 hidden h - svh w-[--sidebar - width] transition-[left, right, width] ease - linear md:flex & quot;,
          props.side === &quot;left & quot;
            ? &quot;left - 0 group - data-[collapsible = offcanvas]:left-[calc (var (--sidebar - width)*-1)]&quot;
            : &quot;right - 0 group - data-[collapsible = offcanvas]:right-[calc (var (--sidebar - width)*-1)]&quot;,
          // Adjust the padding for floating and inset variants.;
          props.variant === &quot;floating & quot; || props.variant === &quot;inset & quot;
            ? &quot;p - 2 group - data-[collapsible = icon]:w-[calc (var (--sidebar - width - icon)_ + _theme (spacing.4)_ + 2px)]&quot;
            : &quot;group - data-[collapsible = icon]:w-[--sidebar - width - icon] group - data-[side = left]:border - r group - data-[side = right]:border - l&quot;,
          props.class_name)}
<<<<<<< HEAD
        {...props}
      >;
        <div;
          data - sidebar=&quot;sidebar";
          className="flex h - full w - full flex - col bg - sidebar group - data-[variant = floating]:rounded - lg group - data-[variant = floating]:border group - data-[variant = floating]:shadow & quot;
        >;
          {props.children}
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
  return (
    <button;
      ref={ref}


        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



        {...props}
      >;
        <div;"
          data - sidebar=&quot;sidebar";"
          className="flex h - full w - full flex - col bg - sidebar group - data-[variant = floating]:rounded - lg group - data-[variant = floating]:border group - data-[variant = floating]:shadow & quot;

        >;
          {props.children}
>((props, ref) => {}
  const { toggleSidebar } = useSidebar()
  return (
    <button;
      ref={ref}


"
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex","
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize","
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize","
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar","
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2","
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


        props.className
=======

        props.className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      )}
      {...props}
    />
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
})



<<<<<<< HEAD
export const SidebarInset = React.forwardRef<


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
})


SidebarRail.displayName = "SidebarRail"

export const SidebarInset = React.forwardRef<


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>((props, ref) => {
=======
>((props, ref) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <main;
      ref={ref as SafeRef<HTMLDivElement>}
      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>((props, ref) => {
  return (
    <main
      ref={ref as SafeRef<HTMLDivElement>}
      className={cn(


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "relative flex min-h-svh flex-1 flex-col bg-background&quot;
        &quot;peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow&quot;
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        props.className
=======
})        props.className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
})        props.className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
        "relative flex min-h-svh flex-1 flex-col bg-background","
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",





        props.className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        props.className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      data - sidebar=&quot;rail & quot;
      aria - label=&quot;Toggle Sidebar & quot;
      tab_index={-1}
<<<<<<< HEAD
      on_click={toggle_sidebar}"
      title=&quot;Toggle Sidebar";
      className={cn ("
=======
      on_click={toggle_sidebar}
      title=&quot;Toggle Sidebar";
      className={cn (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  HTMLDivElement,"
  React.ComponentProps<&quot;main">;
>((props, ref) => {}
  return (
    <main;
      ref={ref as SafeRef < HTMLDivElement>}
      className={cn ("
=======
  HTMLDivElement,
  React.ComponentProps<&quot;main">;
>((props, ref) => {
  return (
    <main;
      ref={ref as SafeRef < HTMLDivElement>}
      className={cn (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        "relative flex min - h-svh flex - 1 flex - col bg - background & quot;,
        &quot;peer - data-[variant = inset]:min - h-[calc (100svh - theme (spacing.4))] md:peer - data-[variant = inset]:m - 2 md:peer - data-[state = collapsed]:peer - data-[variant = inset]:ml - 2 md:peer - data-[variant = inset]:ml - 0 md:peer - data-[variant = inset]:rounded - xl md:peer - data-[variant = inset]:shadow & quot;,
        props.class_name)}
      {...props}
    />);
<<<<<<< HEAD
});"
SidebarInset.display_name = &quot;SidebarInset";


"
=======
});
SidebarInset.display_name = &quot;SidebarInset";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
SidebarInset.displayName = "SidebarInset"

    </div>;
  );
<<<<<<< HEAD
});"
Sidebar.displayName = "Sidebar";
;
export const SidebarRail = React.forwardRef<;
  HTMLButtonElement,;"
=======
});
Sidebar.displayName = "Sidebar";
;
export const SidebarRail = React.forwardRef<;
  HTMLButtonElement,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  React.ComponentProps<"button">;
>((props, ref) => {;
  const { toggleSidebar } = useSidebar();
;
  return (;
    <button;
<<<<<<< HEAD
      ref={ref}"
      data-sidebar="rail";"
      aria-label="Toggle Sidebar";
      tabIndex={-1}
      onClick={toggleSidebar}"
      title="Toggle Sidebar";
      className={cn(;"
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",;"
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",;"
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",;"
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",;"
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",;
        props.className;
      )}
      {...props}
    />;
  );
<<<<<<< HEAD
});"
SidebarRail.displayName = "SidebarRail";
;
export const SidebarInset = React.forwardRef<;
  HTMLDivElement,;"
=======
});
SidebarRail.displayName = "SidebarRail";
;
export const SidebarInset = React.forwardRef<;
  HTMLDivElement,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  React.ComponentProps<"main">;
>((props, ref) => {;
  return (;
    <main;
      ref={ref as SafeRef<HTMLDivElement>}
<<<<<<< HEAD
      className={cn(;"
        "relative flex min-h-svh flex-1 flex-col bg-background",;"
=======
      className={cn(;
        "relative flex min-h-svh flex-1 flex-col bg-background",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",;
        props.className;
      )}
      {...props}
    />;
  );
<<<<<<< HEAD
});"
SidebarInset.displayName = "SidebarInset";) 
}ref= {}
  ref;
}{}
  ...props;
}> {}
  props.children;
}</div>) 
}if (isMobile) {}
  return (<Sheet open= {}
  openMobile;
}onOpenChange= {}
  setOpenMobile;
}{}
  ...props;
}> <SheetContent;
}side= {}
  props.side;
}> </SheetContent> </Sheet>) 
}return (<div > {}
  /* This is what handles the sidebar gap on desktop */ 
}<div) 
}{}
  ...props "
}> <div data-sidebar="sidebar" className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow" > {}
  props.children;
}</div> </div> </div>) "
}) Sidebar.displayName = "Sidebar" export const SidebarRail = React.forwardRef< HTMLButtonElement;
) 
}{}
  ...props;
}/>) "
}) SidebarRail.displayName = "SidebarRail" export const SidebarInset = React.forwardRef< HTMLDivElement;
) 
}{}
  ...props;
}/>) "
}) SidebarInset.displayName = "SidebarInset" "
SidebarInset.displayName = &quot;SidebarInset""
SidebarInset.displayName = "SidebarInset"
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
