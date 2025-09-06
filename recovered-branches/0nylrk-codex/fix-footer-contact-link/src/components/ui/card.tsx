import React from 'react';
import * as React from 'react';
import {cn} from '@/lib/utils';
<<<<<<< HEAD
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
      'rounded-lg border bg-card text-card-foreground shadow-sm'
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
Card.displayName = 'Card';
const CardHeader = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>
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
  />;
));
<<<<<<< HEAD
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef<
  HTMLParagraphElement
  React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>
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
      'text-2xl font-semibold leading-none tracking-tight'
      className
    )}
    {...props}
  />;
));
<<<<<<< HEAD
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef<
  HTMLParagraph</HTMLParagraphElement>Element
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
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />;
));
<<<<<<< HEAD
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
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />;
));
<<<<<<< HEAD
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
CardFooter && CardFooter.displayName = 'CardFooter';

export {;
  Card,;
  CardHeader,;
  CardFooter,;
  CardTitle,;
  CardDescription,;
  CardContent,;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
