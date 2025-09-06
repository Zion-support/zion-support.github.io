

export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
>((props, ref) => {
  return (
    <Input

      className={cn(

        props.className
      )}
      {...props}
    />
  )
})

>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />
  )
})

>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />
  )
})

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
>((props, ref) => {
  return (
    <Separator

      {...props}
    />
  )
})

>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(

        props.className
      )}
      {...props}
    />
  )
})

>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}
      {...props}
    />
  )
})

