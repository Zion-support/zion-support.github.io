<<<<<<< HEAD


=======
import * as React from 'react'
import {ElementRef, ComponentPropsWithoutRef} from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {ChevronDown} from 'lucide-react'
import {cn} from '@/lib/utils'
const Accordion = AccordionPrimitive.Root
onst AccordionItem = React.forwardRef<
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const AccordionItem = React.forwardRef<
>>>>>>>   ElementRef<typeof AccordionPrimitive.Item>
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
></typeof>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
import * as React from 'react';
import {ElementRef, ComponentPropsWithoutRef} from 'react';
import * as AccordionPrimitive from '@radix - ui / react - accordion';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib / utils';
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forward_ref<;
  ElementRef < typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef < typeof AccordionPrimitive.Item>;
></typeof>(({ class_name, ...props }, ref) => (
  <AccordionPrimitive.Item;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ('border - b', class_name)}
    {...props}
  />
))
<<<<<<< HEAD

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>

>(({ className, children, ...props }, ref) => (
=======
const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>
  ComponentPropsWithoutRef<typeof AccordionPrimitive.T</typeof>rigger>
onst AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>>>>>>> >(({ className, children, ...props }, ref) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </AccordionPrimitive>  {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
<<<<<<< HEAD

=======
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {...props}
    >;
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
<<<<<<< HEAD

    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>

>(({ className, children, ...props }, ref) => (
=======
>>>>>>>     </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>
  ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive.Content>
onst AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>>>>>>> >(({ className, children, ...props }, ref) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
<<<<<<< HEAD

=======
AccordionContent.displayName = AccordionPrimitive.Content.displayName
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
AccordionContent.displayName = AccordionPrimitive.Content.displayName

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(

import React from 'react';
import * as React from 'react';
import {ElementRef, ComponentPropsWithoutRef} from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown} from 'lucide-react';

import {cn} from '@/lib/utils';

const Accordion = AccordionPrimitive && AccordionPrimitive.Root;

const AccordionItem = React && React.forwardRef<;
  ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Item>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive && AccordionPrimitive.Item>;
></typeof>(({ className, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />;
));
AccordionItem && AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React && React.forwardRef<;
  ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Trigger>,;
  ComponentPropsWithoutRef<typeof AccordionPrimitive && AccordionPrimitive.T</typeof>rigger>;
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




    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName





const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
  />));
AccordionItem.display_name = 'AccordionItem';
const AccordionTrigger = React.forward_ref<;
  ElementRef < typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef < typeof AccordionPrimitive.T</typeof > rigger>;
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
const AccordionContent = React.forward_ref<;
  ElementRef < typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutR</typeof > ef < typeof AccordionPrimitive.Content>;
>(({ class_name, children, ...props }, ref) => (
  <AccordionPrimitive.Content;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className='overflow - hidden text - sm transition - all data-[state = closed]:animate - accordion - up data-[state = open]:animate - accordion - down';
    {...props}

      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />;
    </AccordionPrimitive && AccordionPrimitive.Trigger>;
  </AccordionPrimitive && AccordionPrimitive.Header>;
));
AccordionTrigger && AccordionTrigger.displayName = AccordionPrimitive && AccordionPrimitive.Trigger.displayName;

const AccordionContent = React && React.forwardRef<;
  ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Content>,;
  ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive && AccordionPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive && AccordionPrimitive.Content>;
));

AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  >;
    <div className={cn ('pb - 4 pt - 0', class_name)}>{children}</div>;
  </AccordionPrimitive.Content>));
AccordionContent.display_name = AccordionPrimitive.Content.display_name;
xport { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
