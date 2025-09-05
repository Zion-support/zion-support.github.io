import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"


const _Accordion = AccordionPrimitive.Root

const _AccordionItem = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(_({_className, _...props}, _ref) => (
  <AccordionPrimitive.Item
    ref={_ref}
    className={_cn("border-b", _className)}
    {_...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const _AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(_({_className, _children, _...props}, _ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={_ref}
      className={_cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", _className
      )}
      {_...props}
    >
      {_children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const _AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(_({_className, _children, _...props}, _ref) => (
  <AccordionPrimitive.Content
    ref={_ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {_...props}
  >
    <div className={_cn("pb-4 pt-0", _className)}>{_children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {_Accordion, _AccordionItem, _AccordionTrigger, _AccordionContent}
