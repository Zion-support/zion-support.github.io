<<<<<<< HEAD
import * as React from 'react'
import {ElementRef, ComponentPropsWithoutRef} from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {ChevronDown} from 'lucide-react'
import {cn} from '@/lib/utils'
const Accordion = AccordionPrimitive.Root
=======
import * as React from "react"
import { ElementRef, ComponentPropsWithoutRef } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const AccordionItem = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
<<<<<<< HEAD
AccordionItem.displayName = 'AccordionItem'
const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>
  ComponentPropsWithoutRef<typeof AccordionPrimitive.T</typeof>rigger>
=======
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
<<<<<<< HEAD
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180'
        className
      )}
    </AccordionPrimitive>  {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
=======
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >;
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
<<<<<<< HEAD
const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>
  ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive.Content>
=======

const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
<<<<<<< HEAD
AccordionContent.displayName = AccordionPrimitive.Content.displayName
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
=======

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
