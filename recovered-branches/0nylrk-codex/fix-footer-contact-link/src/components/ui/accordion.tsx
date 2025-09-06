<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx


<<<<<<< HEAD
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';
const Accordion = AccordionPrimitive.Root;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
></typeof>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

========
<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
import * as AccordionPrimitive from '@radix - ui / react - accordion';
import {ChevronDown} from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx
const Accordion = AccordionPrimitive && AccordionPrimitive.Root;
const AccordionItem = React && React.forwardRef<;
  React && React.ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Item>,;
  React && React.ComponentPropsWithoutRef<typeof AccordionPrimitive && AccordionPrimitive.Item>;
></typeof>(({ className, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Item
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
    ref={ref}
    className={cn ('border - b', class_name)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx

  />

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
));
AccordionItem.displayName = 'AccordionItem';
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.T</typeof>rigger>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(

<<<<<<< HEAD
=======

        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        className
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx

<<<<<<< HEAD
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>
  React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive.Content>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
=======
========
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />;
    </AccordionPrimitive && AccordionPrimitive.Trigger>;
  </AccordionPrimitive && AccordionPrimitive.Header>;
));
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx
AccordionTrigger && AccordionTrigger.displayName = AccordionPrimitive && AccordionPrimitive.Trigger.displayName;
const AccordionContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Content>,;
  React && React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive && AccordionPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Content
    ref={ref}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

))


AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;


========
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive && AccordionPrimitive.Content>;
));
AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/accordion.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
