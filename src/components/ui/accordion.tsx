
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

const AccordionItem = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item

AccordionItem.displayName = "AccordionItem"

AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </AccordionPrimitive>  {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
      {...props}
    >;
      {children}

    </AccordionPrimitive.Trigger>
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
