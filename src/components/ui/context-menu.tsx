const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ class_name, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
      className
    {...props}
  >;
    {children}
  </ContextMenuPrimitive.SubTrigger>
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      className
    {...props}
  />;
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
const ContextMenuContent = React.forwardRef<;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
  <ContextMenuPrimitive.Portal>;
    <ContextMenuPrimitive.Content;
      ref={ref}
        className
      {...props}
    />;
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef<;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
    inset?: boolean;
  }
>(({ class_name, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item;
    ref={ref}
      className
    {...props}
  />;
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
const ContextMenuCheckboxItem = React.forwardRef<;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
    inset?: boolean;
  }
>(({ class_name, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label;
    ref={ref}
      className
    {...props}
  />;
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
const ContextMenuSeparator = React.forwardRef<;
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
