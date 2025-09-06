

}
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          props.className
        )}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        ref={ref}
        {...props}
      >;
        {props.children}
      </div>);
  }
// Check condition
if ( {) {
  $2
}
    return (
      <Sheet open={open_mobile} onOpenChange={setOpenMobile} {...props}>;
        <SheetContent;
          data - sidebar=&quot;sidebar & quot;
          data - mobile=&quot;true & quot;
          className=&quot;w-[--sidebar - width] bg - sidebar p - 0 text - sidebar - foreground [&>button]:hidden & quot;
          style={
            {
              &quot;--sidebar - width & quot;: &quot;18rem & quot;} as CSSProperties;
          }
          side={props.side}
        >;
          <div className=&quot;flex h - full w - full flex - col & quot;>{props.children}</div>;
        </SheetContent>;
      </Sheet>);
  }

=======
  return (

    <div;
      ref={ref}
className=&quot;group peer hidden md:block text - sidebar - foreground & quot;
      data - state={state}
      data - collapsible={state === &quot;collapsed & quot; ? props.collapsible : ""}
      data - variant={props.variant}
      data - side={props.side}
      data-state={state}
      data-collapsible={state === "collapsed" ? props.collapsible : ""}
      data-variant={props.variant}
      data-side={props.side}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    >;
      {/* This is what handles the sidebar gap on desktop */}
<div
        className={cn(

        )}
      />
      <div
        className={cn(

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
      >;
        <div;
          data - sidebar=&quot;sidebar";
          className="flex h - full w - full flex - col bg - sidebar group - data-[variant = floating]:rounded - lg group - data-[variant = floating]:border group - data-[variant = floating]:shadow & quot;
        >;
          {props.children}


Sidebar.displayName = "Sidebar"

export const SidebarRail = React.forwardRef<


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>((props, ref) => {
  const { toggleSidebar } = useSidebar()
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <button;
      ref={ref}


        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        props.className
      )}
      {...props}
    />
  )
})

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>((props, ref) => {
  return (
    <main
      ref={ref as SafeRef<HTMLDivElement>}
      className={cn(

=======

        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
