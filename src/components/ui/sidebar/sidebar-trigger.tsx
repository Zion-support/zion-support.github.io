

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar()

      ref={ref}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      data - sidebar=&quot;trigger & quot;
      variant=&quot;ghost & quot;
      size=&quot;icon & quot;
      className={cn (&quot;h - 7 w - 7&quot;, props.class_name)}
      on_click={(event) => {
        props.on_click?.(event);
        toggle_sidebar ();

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      onClick={(event) => {
        props.onClick?.(event)
        toggleSidebar()
      }}
      {...props}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
