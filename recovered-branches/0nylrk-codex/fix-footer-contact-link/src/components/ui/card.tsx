<<<<<<< HEAD
import * as React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
=======
import React from 'react';
import * as React from 'react';


>>>>>>> main

import * as React from "react"

import { cn } from "@/lib/utils"
=======

<<<<<<< HEAD
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
import * as React from "react"

import { cn } from "@/lib/utils"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'rounded-lg border bg-card text-card-foreground shadow-sm'
=======
      "rounded-lg border bg-card text-card-foreground shadow-sm",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
></HTMLDivElement>(({ className, ...props }, ref) => (
=======

const Card = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
></HTMLDivElement>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    ref={ref}
    className={cn(


      "rounded-lg border bg-card text-card-foreground shadow-sm",

>>>>>>> main
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
));
Card.displayName = 'Card';
const CardHeader = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>
=======
=======

>>>>>>> main
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
<<<<<<< HEAD
));
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef<
  HTMLParagraphElement
  React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>
=======
=======


>(({ className, ...props }, ref) => (
=======
Card && Card.displayName = 'Card';

const CardHeader = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1 && 1.5 p-6', className)}
    {...props}

  />

>>>>>>> main
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'text-2xl font-semibold leading-none tracking-tight'
=======
      "text-2xl font-semibold leading-none tracking-tight",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>(({ className, ...props }, ref) => (
=======
CardHeader && CardHeader.displayName = 'CardHeader';

const CardTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <h3
    ref={ref}
    className={cn(


      "text-2xl font-semibold leading-none tracking-tight",

>>>>>>> main
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
));
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef<
  HTMLParagraph</HTMLParagraphElement>Element
=======
=======

>>>>>>> main
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
<<<<<<< HEAD
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
=======
=======


  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
=======
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
    className={cn (
      'rounded - lg border bg - card text - card - foreground shadow - sm',
      class_name)}
    {...props}
  />));
Card.display_name = 'Card';
;
const CardHeader = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes<</HTMLDivElement > HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
    className={cn ('flex flex - col space - y-1.5 p - 6', class_name)}
    {...props}
  />));
CardHeader.display_name = 'CardHeader';
;
const CardTitle = React.forward_ref<;
  HTMLParagraphElement,
  React.HT</HTMLHeadingElement > MLAttributes < HTMLHeadingElement>;
>(({ class_name, ...props }, ref) => (
  <h3;
    ref={ref}
    className={cn (
      'text - 2xl font - semibold leading - none tracking - tight',
      class_name)}
    {...props}
  />));
CardTitle.display_name = 'CardTitle';
;
const CardDescription = React.forward_ref<;
  HTMLParagraph</HTMLParagraphElement > Element,
  React.HTMLAttributes < HTMLParagraphElement>;
>(({ class_name, ...props }, ref) => (
  <p;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ('text - sm text - muted - foreground', class_name)}
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  />

>>>>>>> main
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
))
CardFooter.displayName = "CardFooter"

<<<<<<< HEAD
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,;
};
=======
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

))
CardFooter.displayName = "CardFooter"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
