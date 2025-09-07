<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
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
=======
import React from 'react';
import { cn } from '../../lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
>>>>>>> origin/chore/fix-lint-and-merge
      className
    )}
    {...props}
  />
));
<<<<<<< HEAD
Card.displayName = 'Card;
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
const CardHeader = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>
=======
Card.displayName = 'Card';
>>>>>>> origin/chore/fix-lint-and-merge

  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
<<<<<<< HEAD
CardHeader.displayName = 'CardHeader;
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
const CardTitle = React.forwardRef<
  HTMLParagraphElement
  React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>
=======
CardHeader.displayName = 'CardHeader';
>>>>>>> origin/chore/fix-lint-and-merge

  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
      text-2xl font-semibold leading-none tracking-tight'
      'text-2xl font-semibold leading-none tracking-tight,
=======
      'text-2xl font-semibold leading-none tracking-tight',
>>>>>>> origin/chore/fix-lint-and-merge
      className
    )}
    {...props}
  />
));
<<<<<<< HEAD
CardTitle.displayName = CardTitle';
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
const CardDescription = React.forwardRef<
  HTMLParagraph</HTMLParagraphElement>Element
=======
CardTitle.displayName = 'CardTitle';
>>>>>>> origin/chore/fix-lint-and-merge

  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground, className)}
    {...props}
  />
));
<<<<<<< HEAD
CardDescription.displayName = CardDescription';
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
const CardContent </HTMLDivElement>= React.forwardRef<
  HTMLDivElement
=======
CardDescription.displayName = 'CardDescription';
>>>>>>> origin/chore/fix-lint-and-merge

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0, className)} {...props} />
));
<<<<<<< HEAD
CardContent.displayName = CardContent';
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
</HTMLDivElement>const CardFooter = React.forwardRef<
  HTMLDivElement
=======
CardContent.displayName = 'CardContent';
>>>>>>> origin/chore/fix-lint-and-merge

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
<<<<<<< HEAD
CardFooter.displayName = CardFooter';
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
export {
  Card
  CardHeader
  CardFooter
  CardTitle
  CardDescription
  CardContent
}
=======
CardFooter.displayName = 'CardFooter';
>>>>>>> origin/chore/fix-lint-and-merge

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
<<<<<<< HEAD
  />;
))CardFooter.displayName = 'CardFooter';export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent}
=======
>>>>>>> origin/chore/fix-lint-and-merge
