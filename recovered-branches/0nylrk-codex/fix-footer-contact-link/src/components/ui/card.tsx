import React from 'react';
import * as React from 'react';
<<<<<<< HEAD



import * as React from "react"

import { cn } from "@/lib/utils"

import {cn} from '@/lib/utils';
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
></HTMLDivElement>(({ className, ...props }, ref) => (

const Card = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
></HTMLDivElement>(({ className, ...props }, ref) => (;
  <div
    ref={ref}
    className={cn(


      "rounded-lg border bg-card text-card-foreground shadow-sm",

  <div
=======
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm'  <div
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm'
      "rounded-lg border bg-card text-card-foreground shadow-sm",
<<<<<<< HEAD
      className
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    )}
    {...props}
  />

))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
<<<<<<< HEAD
  React.HTMLAttributes<HTMLDivElement>


>(({ className, ...props }, ref) => (
>(({ className, ...props }, ref) => (
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
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />

))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>


>(({ className, ...props }, ref) => (
CardHeader && CardHeader.displayName = 'CardHeader';
=======
  React.HTMLAttributes<HTMLDivElement>CardHeader && CardHeader.displayName = 'CardHeader';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

const CardTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
  <h3
<<<<<<< HEAD
    ref={ref}
  />;
=======
    ref={ref}  />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
));
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight'
      "text-2xl font-semibold leading-none tracking-tight",
<<<<<<< HEAD

      className
    )}
    {...props}
  />

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
<<<<<<< HEAD
  HTMLParagraphElement,


  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
CardTitle && CardTitle.displayName = 'CardTitle';

const CardDescription = React && React.forwardRef<;
  HTMLParagraph</HTMLParagraphElement>Element,;
  React && React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
  <p
;
import {cn} from '@/lib / utils';
;
const Card = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
></HTMLDivElement>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight'
  <p
    ref={ref}
    className={cn (
=======
  HTMLParagraphElement,    className={cn (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    {...props}

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

CardFooter && CardFooter.displayName = 'CardFooter';

export {;
  Card,;
  CardHeader,;
  CardFooter,;
  CardTitle,;
  CardDescription,;
  CardContent,;
};

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
  />

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

))
CardFooter.displayName = "CardFooter"


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
=======
    {...props}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
