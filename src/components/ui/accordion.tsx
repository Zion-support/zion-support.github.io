<<<<<<< HEAD
import * as React from "react";
import { ElementRef, ComponentPropsWithoutRef } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from 'lucide-react';
;
import { cn } from "@/lib/utils";
;
const Accordion = AccordionPrimitive.Root;
;
const AccordionItem = React.forwardRef<;
  ElementRef<typeof AccordionPrimitive.Item>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
>(({ className, ...props }, ref) => (;
  <AccordionPrimitive.Item;
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />;
));
AccordionItem.displayName = "AccordionItem";
;
const AccordionTrigger = React.forwardRef<;
  ElementRef<typeof AccordionPrimitive.Trigger>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive.Header className="flex">;
    <AccordionPrimitive.Trigger;
      ref={ref}
      className={cn(;
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",;
        className;
      )}
      {...props}
    >;
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />;
    </AccordionPrimitive.Trigger>;
  </AccordionPrimitive.Header>;
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
;
const AccordionContent = React.forwardRef<;
  ElementRef<typeof AccordionPrimitive.Content>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive.Content;
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down";
    {...props}
  >;
    <div className={cn("pb-4 pt-0", className)}>{children}</div>;
  </AccordionPrimitive.Content>;
));
;
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
=======
import * as React from &quot;react&quot;
import { ElementRef, ComponentPropsWithoutRef } from &quot;react&quot;
import * as AccordionPrimitive from &quot;@radix-ui/react-accordion&quot;
import { ChevronDown } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;
const Accordion = AccordionPrimitive.Root,
const AccordionItem = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(_({className, _...props}, ref) => (
  <AccordionPrimitive.Item,
ref={ref}
    className={cn(&quot;border-b&quot;, className)}
    {...props}  />
))
AccordionItem.displayName = &quot;AccordionItem&quot;

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className=&quot;flex&quot;>
    <AccordionPrimitive.Trigger,
ref={ref}
      className={cn(
        &quot;flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180&quot;,
        className      )}
      {_...props}
    >
      {children}
      <ChevronDown className=&quot;h-4 w-4 shrink-0 transition-transform duration-200&quot; />    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName,
const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(_({className, children, _...props}, ref) => (
  <AccordionPrimitive.Content,
ref={ref}
    className=&quot;overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down&quot;
    {...props}
  >
    <div className={cn(&quot;pb-4 pt-0&quot;, className)}>{children}</div>  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName,
export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
