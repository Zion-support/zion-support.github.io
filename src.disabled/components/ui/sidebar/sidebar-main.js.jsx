
  collapsed' ? props.collapsible: '} data-variant={props.variant} data-side={props.side} > {}
  ' <div'';
  ' className={cn(''';
  ';duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear;
  ', group-data-[collapsible=offcanvas]: w-0, group-data-[side=right]: rotate-180,
  , '';
  ' props.variant === 'floating;
  ' || props.variant === 'inset'''';
  ' ? 'group-data-[collapsible=icon]: w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]''';
  ' :group-data-[collapsible=icon]: w-[--sidebar-width-icon] )}
,
   />' <div'';
  ' className={cn(''';
  ';duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left, right,width] ease-linear md: flex, ,
  ';
  ' props.side === 'left'''';
  ' ? 'left-0 group-data-[collapsible=offcanvas]: left-[calc(var(--sidebar-width)*-1)]''';
  ' : 'right-0 group-data-[collapsible=offcanvas]: right-[calc(var(--sidebar-width)*-1)], '';
  '';

