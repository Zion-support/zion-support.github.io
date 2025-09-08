
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';
const Accordion = AccordionPrimitive.Root;
<<<<<<< HEAD

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

=======

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"


>>>>>>> origin/cursor/delete-old-data-records-6bba
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

<<<<<<< HEAD




=======

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';
const Accordion = AccordionPrimitive.Root;
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"


>>>>>>> origin/cursor/delete-old-data-records-6bba
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
></typeof>(({ className, ...props }, ref) => (

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
<<<<<<< HEAD


=======

    ref={ref}

    className={cn('border-b', className)}
    {...props}
  />


    ref={ref}

    className={cn('border-b', className)}
    {...props}
  />

>>>>>>> origin/cursor/delete-old-data-records-6bba
))

AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        className

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

    ref={ref}
    className={cn('border-b', className)}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.T</typeof>rigger>
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  <AccordionPrimitive.Header className="flex">"

    <AccordionPrimitive.Trigger;
      className={cn(


<<<<<<< HEAD


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




      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />





=======
    </AccordionPrimitive.Trigger>

>>>>>>> origin/cursor/delete-old-data-records-6bba
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef<

<<<<<<< HEAD
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>

>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
AccordionTrigger && AccordionTrigger.displayName = AccordionPrimitive && AccordionPrimitive.Trigger.displayName;
const AccordionContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Content>,;
  React && React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive && AccordionPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Content
<<<<<<< HEAD

    ref={ref}


=======
    ref={ref}
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

AccordionItem.display_name = 'AccordionItem';
;

  React && React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive && AccordionPrimitive.Content>;
  <AccordionPrimitive&& AccordionPrimitive.Content;

    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down""
  >"
    <div className={cn("pb-4 pt-0", className)}>{children}</div>"
  </AccordionPrimitive.Content>

AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;

    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down
    {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive && AccordionPrimitive.Content>;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

  />));"
AccordionItem.display_name = 'AccordionItem';
AccordionItem.display_name = 'AccordionItem';
;

  React && React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive && AccordionPrimitive.Content>;
  <AccordionPrimitive&& AccordionPrimitive.Content;

    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down""
  >"
    <div className={cn("pb-4 pt-0", className)}>{children}</div>"
  </AccordionPrimitive.Content>

AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;

    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down
    {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive && AccordionPrimitive.Content>;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

  />));"
AccordionItem.display_name = 'AccordionItem';
pr-12325
const AccordionTrigger = React.forward_ref<;
  React.ElementRef < typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof AccordionPrimitive.T</typeof > rigger>;
>(({ class_name, children, ...props }, ref) => ('
  <AccordionPrimitive.Header className='flex'>;
    <AccordionPrimitive.Trigger;
      ref={ref}
      className={cn ('
        'flex flex - 1 items - center justify - between py - 4 font - medium transition - all hover:underline [&[data - state = open]>svg]:rotate - 180',
        class_name)}
    </AccordionPrimitive>  {...props}
    >;
      {children}'
      <ChevronDown className='h - 4 w - 4 shrink - 0 transition - transform duration - 200' />;
    </AccordionPrimitive.Trigger>;
  </AccordionPrimitive.Header>));
AccordionTrigger.display_name = AccordionPrimitive.Trigger.display_name;
;
const AccordionContent = React.forward_ref<;
  React.ElementRef < typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutR</typeof > ef < typeof AccordionPrimitive.Content>;
>(({ class_name, children, ...props }, ref) => (
  <AccordionPrimitive.Content;
    ref={ref}'
    className='overflow - hidden text - sm transition - all data-[state = closed]:animate - accordion - up data-[state = open]:animate - accordion - down';
    {...props}
  >;'
    <div className={cn ('pb - 4 pt - 0', class_name)}>{children}</div>;
  </AccordionPrimitive.Content>));
;
AccordionContent.display_name = AccordionPrimitive.Content.display_name;
;

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
;

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const Accordion = AccordionPrimitive.Root;
;
const AccordionItem = React.forwardRef<;
  React.ElementRef<typeof AccordionPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
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
  React.ElementRef<typeof AccordionPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;
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
  React.ElementRef<typeof AccordionPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;
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
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } const Accordion = AccordionPrimitive.Root const AccordionItem = React.forwardRef< React.ElementRef<typeof AccordionPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> > ( ({
  className, ...props 
}, ref) => (<AccordionPrimitive.Item />) ) AccordionItem.displayName = "AccordionItem" const AccordionTrigger = React.forwardRef< React.ElementRef<typeof AccordionPrimitive.Trigger>;
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) 
}{
  ...props 
}> </AccordionPrimitive.Trigger> </AccordionPrimitive.Header>) ) AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName const AccordionContent = React.forwardRef< React.ElementRef<typeof AccordionPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> > ( ({
  className, children, ...props 
}, ref) => (<AccordionPrimitive.Content </AccordionPrimitive.Content>) ) AccordionContent.displayName = AccordionPrimitive.Content.displayName export {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent 
}
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
))


AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
