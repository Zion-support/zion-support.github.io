<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';
const Accordion = AccordionPrimitive.Root;
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
<<<<<<< HEAD

=======
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





import { cn } from "@/lib/utils"
;
const Accordion = AccordionPrimitive.Root;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
></typeof>(({ className, ...props }, ref) => (
<<<<<<< HEAD
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
    ref={ref}
    className={cn ('border - b', class_name)}
    {...props}

  />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    ref={ref}
=======
  <AccordionPrimitive.Item;
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

    ref={ref}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn('border-b', className)}
    {...props}
  />

<<<<<<< HEAD
));
AccordionItem.displayName = 'AccordionItem';
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.T</typeof>rigger>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
))
=======

))"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
))
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180'
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        className
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
>(({ className, children, ...props }, ref) => (
=======

>(({ className, children, ...props }, ref) => ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger;
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
      className={cn(

"
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",


        className;
        className;
'
AccordionItem && AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React && React.forwardRef<;
  React && React.ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Trigger>,;
  React && React.ComponentPropsWithoutRef<typeof AccordionPrimitive && AccordionPrimitive.T</typeof>rigger>;
>(({ className, children, ...props }, ref) => (;'
  <AccordionPrimitive && AccordionPrimitive.Header className='flex'>;
    <AccordionPrimitive&& AccordionPrimitive.Trigger;
      ref={ref}
      className={cn('
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',;
        className;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      )}
    </AccordionPrimitive>  {...props}
    >;
      {children}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
<<<<<<< HEAD
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180'
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
    </AccordionPrimitive>  {...props}
    >
      {children}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </AccordionPrimitive.Trigger>
=======
      className={cn(    </AccordionPrimitive.Trigger>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      className={cn(    </AccordionPrimitive.Trigger>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",


        className
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


    </AccordionPrimitive.Trigger>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>
  React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive.Content>
<<<<<<< HEAD
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />"
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />

<<<<<<< HEAD
"
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />"
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef<
<<<<<<< HEAD
<<<<<<< HEAD
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
=======
=======
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />;
    </AccordionPrimitive && AccordionPrimitive.Trigger>;
  </AccordionPrimitive && AccordionPrimitive.Header>;
));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


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
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />;
    </AccordionPrimitive && AccordionPrimitive.Trigger>;
  </AccordionPrimitive && AccordionPrimitive.Header>;
));
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
AccordionTrigger && AccordionTrigger.displayName = AccordionPrimitive && AccordionPrimitive.Trigger.displayName;

const AccordionContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AccordionPrimitive && AccordionPrimitive.Content>,;
  React && React.ComponentPropsWithoutR</typeof>ef<typeof AccordionPrimitive && AccordionPrimitive.Content>;
>(({ className, children, ...props }, ref) => (;
  <AccordionPrimitive&& AccordionPrimitive.Content'
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />;
    </AccordionPrimitive && AccordionPrimitive.Trigger>;
  </AccordionPrimitive && AccordionPrimitive.Header>;
));
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive && AccordionPrimitive.Content>;
));    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
=======
"
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {...props}
  >"
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

))

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

))

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;


    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}>;
=======

))


AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;


'
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive && AccordionPrimitive.Content>;
));"
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >"
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
<<<<<<< HEAD
<<<<<<< HEAD
=======

  />));'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
AccordionContent && AccordionContent.displayName = AccordionPrimitive && AccordionPrimitive.Content.displayName;


  />));
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
AccordionItem.display_name = 'AccordionItem';
;
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
<<<<<<< HEAD
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

AccordionContent.displayName = AccordionPrimitive.Content.displayName

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
AccordionContent.displayName = AccordionPrimitive.Content.displayName

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
AccordionContent.displayName = AccordionPrimitive.Content.displayName

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


AccordionContent.displayName = AccordionPrimitive.Content.displayName;
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
