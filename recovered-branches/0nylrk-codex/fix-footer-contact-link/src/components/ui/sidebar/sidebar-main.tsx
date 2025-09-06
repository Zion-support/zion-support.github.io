

}
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

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

      data-state={state}
      data-collapsible={state === "collapsed" ? props.collapsible : ""}
      data-variant={props.variant}
      data-side={props.side}
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
    <button;
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title=&quot;Toggle Sidebar"
      className={cn(

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

