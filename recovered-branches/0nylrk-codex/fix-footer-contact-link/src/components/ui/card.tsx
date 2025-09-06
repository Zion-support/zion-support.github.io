import React from 'react';
import * as React from 'react';
<<<<<<< HEAD



import {cn} from '@/lib/utils';


=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import * as React from "react"

import { cn } from "@/lib/utils"




<<<<<<< HEAD

import {cn} from '@/lib/utils';
import * as React from "react"

import { cn } from "@/lib/utils"



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
></HTMLDivElement>(({ className, ...props }, ref) => (

  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm'
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';
const CardHeader = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (

  <div
    ref={ref}
    className={cn('flex flex-col space-y-1 && 1.5 p-6', className)}
    {...props}

  />
));
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef<
  HTMLParagraphElement
  React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (

  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight'
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef<
  HTMLParagraph</HTMLParagraphElement>Element
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';
const CardContent </HTMLDivElement>= React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';
</HTMLDivElement>const CardFooter = React.forwardRef<
  HTMLDivElement
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';
export {
  Card
  CardHeader
  CardFooter
  CardTitle
  CardDescription
  CardContent
}
))
CardFooter.displayName = "CardFooter"

<<<<<<< HEAD

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,;
};
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
