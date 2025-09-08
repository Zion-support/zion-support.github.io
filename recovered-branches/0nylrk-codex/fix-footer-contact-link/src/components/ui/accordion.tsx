const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
></typeof>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    className={cn ('border - b', class_name)}
    {...props}

  />
    ref={ref}

    className={cn('border-b', className)}
    {...props}
  />

));
AccordionItem.displayName = 'AccordionItem';
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.T</typeof>rigger>
>(({ className, children, ...props }, ref) => (

  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger;
      ref={ref}

>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>
  React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive.Content>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
AccordionTrigger && AccordionTrigger.displayName = AccordionPrimitive && AccordionPrimitive.Trigger.displayName;
