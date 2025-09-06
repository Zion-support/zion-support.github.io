import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';
const Accordion = AccordionPrimitive.Root;
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
  />
));
AccordionItem.displayName = 'AccordionItem';
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.T</typeof>rigger>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180'
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
AccordionItem && AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof AccordionPrimitive && AccordionPrimitive.T</typeof>rigger>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive && AccordionPrimitive.Header className='flex'>;
    <AccordionPrimitive&& AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',;
        className;
      )}
    </AccordionPrimitive>  {...props}
    >;
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>
  React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive.Content>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
AccordionTrigger && AccordionTrigger.displayName = AccordionPrimitive && AccordionPrimitive.Trigger.displayName;

const AccordionContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Content>,;
  React && React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive && AccordionPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Content
    ref={ref}

    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
))


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
