<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
=======
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"



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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
></typeof>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
;
import {cn} from '@/lib / utils';
;
const Accordion = AccordionPrimitive.Root;
;
const AccordionItem = React.forward_ref<;
  React.ElementRef < typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof AccordionPrimitive.Item>;
></typeof>(({ class_name, ...props }, ref) => (
  <AccordionPrimitive.Item;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    ref={ref}
    className={cn ('border - b', class_name)}
    {...props}

  />

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />

))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(

        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",


        className
<<<<<<< HEAD
        className
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        className
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180'
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
    </AccordionPrimitive>  {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>
  React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive.Content>
<<<<<<< HEAD
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />


      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />;
    </AccordionPrimitive && AccordionPrimitive.Trigger>;
  </AccordionPrimitive && AccordionPrimitive.Header>;
));
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
AccordionTrigger && AccordionTrigger.displayName = AccordionPrimitive && AccordionPrimitive.Trigger.displayName;

const AccordionContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Content>,;
  React && React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive && AccordionPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Content
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />;
    </AccordionPrimitive && AccordionPrimitive.Trigger>;
  </AccordionPrimitive && AccordionPrimitive.Header>;
));
    ref={ref}
<<<<<<< HEAD
=======
<<<<<<< HEAD
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive && AccordionPrimitive.Content>;
));
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
<<<<<<< HEAD
=======

))


AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;


    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive && AccordionPrimitive.Content>;
));
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
))


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;


  />));
AccordionItem.display_name = 'AccordionItem';
;
const AccordionTrigger = React.forward_ref<;
  React.ElementRef < typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof AccordionPrimitive.T</typeof > rigger>;
>(({ class_name, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>;
    <AccordionPrimitive.Trigger;
      ref={ref}
      className={cn (
        'flex flex - 1 items - center justify - between py - 4 font - medium transition - all hover:underline [&[data - state = open]>svg]:rotate - 180',
        class_name)}
    </AccordionPrimitive>  {...props}
    >;
      {children}
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
    ref={ref}
    className='overflow - hidden text - sm transition - all data-[state = closed]:animate - accordion - up data-[state = open]:animate - accordion - down';
    {...props}
  >;
    <div className={cn ('pb - 4 pt - 0', class_name)}>{children}</div>;
  </AccordionPrimitive.Content>));
;
AccordionContent.display_name = AccordionPrimitive.Content.display_name;
;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
