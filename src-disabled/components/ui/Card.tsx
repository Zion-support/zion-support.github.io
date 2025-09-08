
import * as React from 'react;
import {cn} from @/lib/utils';
import React from 'react;
import { cn  } from ../../lib/utils';
const Card = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm',className;
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm,className;
    )}
    {...props}
  />;
))Card.displayName = Card';const CardHeader = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6, className)}
    {...props}
  />;
))CardHeader.displayName = CardHeader';const CardTitle = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (<h3;
    ref={ref}
    className={cn('text-2xl font-semibold leading-none tracking-tight,className;
    )}
    {...props}
  />;
))CardTitle.displayName = CardTitle';const CardDescription = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (<p;
    ref={ref}
    className={cn('text-sm text-muted-foreground, className)}
    {...props}
  />;
))CardDescription.displayName = CardDescription';const CardContent = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div ref={ref} className={cn('p-6 pt-0, className)} {...props} />;
))CardContent.displayName = CardContent';const CardFooter = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;

    className={cn(
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
      'rounded-lg border bg-card text-card-foreground shadow-sm
      rounded-lg border bg-card text-card-foreground shadow-sm',

      className
    )}
    {...props}
  />
));

Card.displayName = 'Card';


  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';


  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(

      'text-2xl font-semibold leading-none tracking-tight',

      className
    )}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';


  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground, className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';


const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0, className)} {...props} />
));

CardContent.displayName = 'CardContent';


const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0, className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';


:src/components/ui/Card.tsx
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0:components.disabled/components/ui/Card.tsx


