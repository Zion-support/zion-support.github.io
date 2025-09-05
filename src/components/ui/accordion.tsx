<<<<<<< HEAD
import * as React from &quot;react&quot;
import { ElementRef, ComponentPropsWithoutRef } from &quot;react&quot;
import * as AccordionPrimitive from &quot;@radix-ui/react-accordion&quot;
import { ChevronDown } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Accordion = AccordionPrimitive.Root

const _AccordionItem = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(_({_className, _...props}, _ref) => (
  <AccordionPrimitive.Item
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;border-b&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("border-b", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
AccordionItem.displayName = &quot;AccordionItem&quot;

const _AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
<<<<<<< HEAD
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className=&quot;flex&quot;>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        &quot;flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180&quot;,
        className
=======
>(_({_className, _children, _...props}, _ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={_ref}
      className={_cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    >
<<<<<<< HEAD
      {children}
      <ChevronDown className=&quot;h-4 w-4 shrink-0 transition-transform duration-200&quot; />
=======
      {_children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const _AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(_({_className, _children, _...props}, _ref) => (
  <AccordionPrimitive.Content
<<<<<<< HEAD
    ref={ref}
    className=&quot;overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down&quot;
    {...props}
  >
    <div className={cn(&quot;pb-4 pt-0&quot;, className)}>{children}</div>
=======
    ref={_ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {_...props}
  >
    <div className={_cn("pb-4 pt-0", _className)}>{_children}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {_Accordion, _AccordionItem, _AccordionTrigger, _AccordionContent}
