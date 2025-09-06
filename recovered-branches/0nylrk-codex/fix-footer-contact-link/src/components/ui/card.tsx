<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import * as React from 'react';


=======



import * as React from 'react';
import {cn} from '@/lib/utils';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import * as React from "react"

import { cn } from "@/lib/utils"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import {cn} from '@/lib/utils';
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
></HTMLDivElement>(({ className, ...props }, ref) => (

<<<<<<< HEAD
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const Card = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
></HTMLDivElement>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
<<<<<<< HEAD
    ref={ref}
    className={cn(


      "rounded-lg border bg-card text-card-foreground shadow-sm",

=======

import * as React from "react";
;
import { cn } from "@/lib/utils";
;
const Card = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div;
    ref={ref}

      "rounded-lg border bg-card text-card-foreground shadow-sm",

      className
    className={cn(;
      "rounded-lg border bg-card text-card-foreground shadow-sm",;
      className;
import {cn} from '@/lib/utils';
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm'
<<<<<<< HEAD
      "rounded-lg border bg-card text-card-foreground shadow-sm",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      className
    )}
    {...props}
  />

<<<<<<< HEAD
<<<<<<< HEAD
=======
));
Card.displayName = 'Card';
const CardHeader = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
<<<<<<< HEAD


>(({ className, ...props }, ref) => (
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>(({ className, ...props }, ref) => (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
Card && Card.displayName = 'Card';

const CardHeader = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>;
>(({ className, ...props }, ref) => (;
      className
    )}
    {...props}
  />;
));
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1 && 1.5 p-6', className)}
    {...props}
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
<<<<<<< HEAD

=======
));
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef<
  HTMLParagraphElement
  React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD


>(({ className, ...props }, ref) => (
=======
=======
  />;
));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
CardHeader && CardHeader.displayName = 'CardHeader';

const CardTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <h3
<<<<<<< HEAD
    ref={ref}
=======
Card.displayName = "Card";
;
const CardHeader = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div;
    ref={ref}

      "text-2xl font-semibold leading-none tracking-tight",

      className
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  />;
));
  <h3
    ref={ref}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight'
      "text-2xl font-semibold leading-none tracking-tight",
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className
    )}
    {...props}
  />
<<<<<<< HEAD

=======
));
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef<
  HTMLParagraph</HTMLParagraphElement>Element
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
<<<<<<< HEAD
=======
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />

))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
CardTitle && CardTitle.displayName = 'CardTitle';

const CardDescription = React && React.forwardRef<;
  HTMLParagraph</HTMLParagraphElement>Element,;
  React && React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <p
=======
;
import {cn} from '@/lib / utils';
;
const Card = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
></HTMLDivElement>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
=======
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight'
  <p
    ref={ref}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    className={cn (
      'rounded - lg border bg - card text - card - foreground shadow - sm',
      class_name)}
    {...props}
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
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
CardDescription && CardDescription.displayName = 'CardDescription';

const CardContent </HTMLDivElement>= React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
));
CardContent && CardContent.displayName = 'CardContent';

</HTMLDivElement>const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  <div
  />));
CardDescription.display_name = 'CardDescription';
;
const CardContent </HTMLDivElement>= React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div ref={ref} className={cn ('p - 6 pt - 0', class_name)} {...props} />));
CardContent.display_name = 'CardContent';
;
</HTMLDivElement > const CardFooter = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
    className={cn ('flex items - center p - 6 pt - 0', class_name)}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
CardFooter && CardFooter.displayName = 'CardFooter';

export {;
  Card,;
  CardHeader,;
  CardFooter,;
  CardTitle,;
  CardDescription,;
  CardContent,;
};
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  />));
CardFooter.display_name = 'CardFooter';
;
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  />

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />

))
CardFooter.displayName = "CardFooter"


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
CardTitle.displayName = "CardTitle";
;
const CardDescription = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
  <p;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
CardDescription.displayName = "CardDescription";
;
const CardContent = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent.displayName = "CardContent";
;
const CardFooter = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div;
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />;
));
CardFooter.displayName = "CardFooter";
;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } import * as React from "react" const Card = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({
  className, ...props 
}, ref) => (<div) 
}{
  ...props 
}/>) ) Card.displayName = "Card" const CardHeader = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({
  className, ...props 
}, ref) => (<div />) ) CardHeader.displayName = "CardHeader" const CardTitle = React.forwardRef< HTMLParagraphElement;
React.HTMLAttributes<HTMLHeadingElement> > ( ({
  className, ...props 
}, ref) => (<h3) 
}{
  ...props 
}/>) ) CardTitle.displayName = "CardTitle" const CardDescription = React.forwardRef< HTMLParagraphElement;
React.HTMLAttributes<HTMLParagraphElement> > ( ({
  className, ...props 
}, ref) => (<p />) ) CardDescription.displayName = "CardDescription" const CardContent = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement>) ) CardContent.displayName = "CardContent" const CardFooter = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({
  className, ...props 
}, ref) => (<div />) ) CardFooter.displayName = "CardFooter" export {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent 
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
