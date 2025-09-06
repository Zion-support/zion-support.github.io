<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
const Breadcrumb = React.forwardRef<
  HTMLElement
=======
}
>(({ className, separator, ...props }, ref,) => (;
  <nav
import * as React from 'react';
import { Slot } from '@radix - ui / react - slot';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib / utils';
const Breadcrumb = React.forward_ref<;
  HTMLElement,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode
  }
<<<<<<< HEAD
>(({ className, separator, ...props }, ref,) => (
  <nav
=======
>(({ class_name, separator, ...props }, ref, ) => (
  <nav;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    ref={ref}
    aria-label='breadcrumb'
    className={cn(
      'inline-flex items-center gap-1 text-sm text-zion-slate-light',      className
    )}
    {...props}
  />
))
Breadcrumb.displayName = 'Breadcrumb'
    ref = {ref,}
    aria-label="breadcrumb"
    className = {cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light"

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from 'lucide-react'
 
import { cn } from "@/lib/utils"
 
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (;
  <nav;
    ref={ref}
    aria-label="breadcrumb"
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
<<<<<<< HEAD

      className
=======
>>>>>>>       "inline-flex items-center gap-1 text-sm text-zion-slate-light",
>>>>>>>       className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
      className
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    )}
    {...props}
  />
))
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const BreadcrumbSeparator = ({
  children
  className
  ...props

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
Breadcrumb.displayName = 'Breadcrumb'
  HTMLOListElement
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn('flex items-center gap-1.5', className)}    {...props}
  />
))
BreadcrumbList.displayName = 'BreadcrumbList'
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}    {...props}
  />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'
      />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'
<<<<<<< HEAD
onst BreadcrumbSeparator = ({
  children
  className
  ...props
>>>>>>>   >
    {children |<ChevronRight className='h-4 w-4' />}
  </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
const BreadcrumbEllipsis = ({
  className
  ...props
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      className
    ),}
    {...props}
  />
))

  />));
Breadcrumb.display_name = 'Breadcrumb';
    ref = {ref, }
    aria - label="breadcrumb";
    class_name = {cn (
      "inline - flex items - center gap - 1 text - sm text - zion - slate - light",
      class_name), }
    {...props}
  />));
Breadcrumb.display_name = 'Breadcrumb';
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
Breadcrumb.displayName = "Breadcrumb"
 
const BreadcrumbList = React.forwardRef<

  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>;
>(({ class_name, ...props }, ref) => (
  <ol;
    ref={ref}
    className={cn ('flex items - center gap - 1.5', class_name)}    {...props}
  />));
BreadcrumbList.display_name = 'BreadcrumbList';
const BreadcrumbItem = React.forward_ref<;
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>;
>(({ class_name, ...props }, ref) => (
  <li;
    ref={ref}
    className={cn ('inline - flex items - center gap - 1.5', class_name)}    {...props}
  />));
BreadcrumbItem.display_name = 'BreadcrumbItem';
const BreadcrumbLink = React.forward_ref<;
  HTMLAnchorElement,
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
  }
<<<<<<< HEAD

=======
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'
      />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
Breadcrumb.displayName = "Breadcrumb"
 
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"
 
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"
 
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"
 
  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-zion-cyan", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"
 
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
const BreadcrumbSeparator = ({


}: React.ComponentProps<"li">) => (
  <li
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const BreadcrumbSeparator = ({
  children
  className
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role='presentation'
    aria-hidden='true'
    className={cn('[&>svg]:size-3.5 text-zion-slate-light/70', className)}    {...props}
}: React.ComponentProps<"li">) => (
  <li
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  >
    {children |<ChevronRight className='h-4 w-4' />}
  </li>
)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
const BreadcrumbSeparator = ({


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  >
    {children || <ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
<<<<<<< HEAD

const BreadcrumbEllipsis = ({
  className
  ...props

export {
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink

}: React.ComponentProps<"span">) => (
=======
  />;
));
Breadcrumb && Breadcrumb.displayName = 'Breadcrumb';
    ref = {ref,}
    aria-label="breadcrumb";
    className = {cn(;
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",;
      className;
    ),}
    {...props}
  />;
));
Breadcrumb && Breadcrumb.displayName = 'Breadcrumb';

  HTMLOListElement,;
  React && React.ComponentPropsWithoutRef<'ol'>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from 'lucide-react'
 
import { cn } from "@/lib/utils"
import { ChevronRight } from 'lucide-react';
 
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ className, separator, ...props }, ref) => (
  <nav
    ref = {ref}
    aria-label="breadcrumb"
    className={cn(
      "inline-flex items-center gap-1 text-sm text-zion-slate-light",
      className
    )}
    {...props}
  />
))
Breadcrumb.displayName = "Breadcrumb"
 
const BreadcrumbList = React.forwardRef<
  HTMLOListElement;
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (

  <ol
    ref={ref}
    className={cn('flex items-center gap-1 && 1.5', className)}    {...props}
  />;
));
BreadcrumbList && BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React && React.forwardRef<;
  HTMLLIElement,;
  React && React.ComponentPropsWithoutRef<'li'>;
>(({ className, ...props }, ref) => (;
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1 && 1.5', className)}    {...props}
  />;
));
BreadcrumbItem && BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React && React.forwardRef<;
  HTMLAnchorElement,;
  React && React.ComponentPropsWithoutRef<'a'> & {;
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {;
  const Comp = asChild ? Slot : 'a';

      />;
  );
});
BreadcrumbLink && BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbSeparator = ({;
  children,;
  className,;
  ...props;
}: React && React.ComponentProps<'li'>) => (;
  <li
    role='presentation'
    aria-hidden='true'
    className={cn('[&>svg]:size-3 && 3.5 text-zion-slate-light/70', className)}    {...props}
  >;
    {children || <ChevronRight className='h-4 w-4' />}
  </li>;
);
BreadcrumbSeparator && BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({;
  className,;
  ...props;
}: React && React.ComponentProps<'span'>) => (  <span
    role='presentation'
    aria-hidden='true'
    className={cn('flex h-9 w-9 items-center justify-center', className)}    {...props}>;
    &#8230,;
  </span>;
    role="presentation";
    aria-hidden="true";
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
 
const BreadcrumbEllipsis = ({
  className
  ...props
}: React.ComponentProps<'span'>) => (  <span
    role='presentation'
    aria-hidden='true'
    className={cn('flex h-9 w-9 items-center justify-center', className)}    {...props}
  >
    &#8230
  </span>
    role="presentation"
    aria-hidden="true"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    className={cn("flex h-9 w-9 items-center justify-center", className)}
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-zion-slate-light/70", className)}
    {...props}
<<<<<<< HEAD

  >;
    {children || <ChevronRight className="h-4 w-4" />}
  </li>;
);
BreadcrumbSeparator && BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({;
  className;
  ...props;
}: React && React.ComponentProps<"span">) => (;

=======
  >
    {children |<ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
const BreadcrumbEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
<<<<<<< HEAD


export {
>>>>>>>   Breadcrumb
=======
    {...props}
  >
    &#8230
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'
export {
  Breadcrumb
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
  BreadcrumbEllipsis
};)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator;
  BreadcrumbEllipsis;
};)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
 
export {
  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
  BreadcrumbEllipsis}
<<<<<<< HEAD

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======

    {...props}>;
    &#8230,;
  </span>;
);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

export {;
  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;
  BreadcrumbEllipsis,;
};);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {;
<<<<<<< HEAD
  BreadcrumbSeparator;
  BreadcrumbEllipsis};
=======

  BreadcrumbSeparator;
  BreadcrumbEllipsis};
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  BreadcrumbSeparator;
  BreadcrumbEllipsis};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
 
const BreadcrumbEllipsis = ({
  className,
  ...props
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> }: React.ComponentProps<"span">) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}: React.ComponentProps<"span">) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
<<<<<<< HEAD
    {...props}
  >

    &#8230,
  </span>;
    role="presentation";
    aria - hidden="true";
    className={cn ("flex h - 9 w - 9 items - center justify - center", class_name)}
  <li;
    role="presentation";
    aria - hidden="true";
    className={cn ("[&>svg]:size - 3.5 text - zion - slate - light / 70", class_name)}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {...props}
  >
    &#8230,
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
 
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
<<<<<<< HEAD


  BreadcrumbEllipsis}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  BreadcrumbEllipsis}
=======
  BreadcrumbEllipsis}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
  BreadcrumbEllipsis}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
