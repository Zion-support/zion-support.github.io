

}
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
  if (props.collapsible === &quot;none&quot;) {
    return (
      <div
        className={cn(
          &quot;flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground&quot;
;
  if (props.collapsible === &quot;none&quot;) {

  if (props.collapsible === "none") {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>((props, ref) => {
  return (
    <main
      ref={ref as SafeRef<HTMLDivElement>}
      className={cn(

=======
        "relative flex min-h-svh flex-1 flex-col bg-background&quot;
        &quot;peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow&quot;
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
