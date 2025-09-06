

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
        ref={ref}
        {...props}
      >;
        {props.children}
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
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
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

