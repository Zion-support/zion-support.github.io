<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
<<<<<<< HEAD
import * as React from 'react';
import {cn} from '@/lib/utils';
import React from 'react';
import { cn  } from '../../lib/utils';
=======
<<<<<<< HEAD
import * as React from 'react';
import {cn} from '@/lib/utils';
import React from 'react';
import { cn } from '../../lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
=======
import * as React from 'react;
import {cn} from @/lib/utils';
import React from 'react;
import { cn  } from ../../lib/utils';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const Card = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
<<<<<<< HEAD
:src_backup/components/ui/Card.tsx
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm',className;
=======
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm',className;
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm,className;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    )}
    {...props}
  />;
))Card.displayName = 'Card';const CardHeader = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />;
))CardHeader.displayName = 'CardHeader';const CardTitle = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (<h3;
    ref={ref}
    className={cn('text-2xl font-semibold leading-none tracking-tight',className;
    )}
    {...props}
  />;
))CardTitle.displayName = 'CardTitle';const CardDescription = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (<p;
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />;
))CardDescription.displayName = 'CardDescription';const CardContent = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
))CardContent.displayName = 'CardContent';const CardFooter = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (<div;
>>>>>>> merged-prs-20250907-203621
    className={cn(
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
<<<<<<< HEAD
      'rounded-lg border bg-card text-card-foreground shadow-sm'
      'rounded-lg border bg-card text-card-foreground shadow-sm',
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className
    )}
    {...props}
  />
));
<<<<<<< HEAD
Card.displayName = 'Card';
=======
<<<<<<< HEAD
Card.displayName = 'Card;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
const CardHeader = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>
=======
Card.displayName = 'Card';
>>>>>>> origin/chore/fix-lint-and-merge

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
<<<<<<< HEAD
CardHeader.displayName = 'CardHeader';
=======
<<<<<<< HEAD
CardHeader.displayName = 'CardHeader;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
const CardTitle = React.forwardRef<
  HTMLParagraphElement
  React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>
=======
CardHeader.displayName = 'CardHeader';
>>>>>>> origin/chore/fix-lint-and-merge

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
<<<<<<< HEAD
      'text-2xl font-semibold leading-none tracking-tight'
      'text-2xl font-semibold leading-none tracking-tight',
=======
      text-2xl font-semibold leading-none tracking-tight'
      'text-2xl font-semibold leading-none tracking-tight,
=======
      'text-2xl font-semibold leading-none tracking-tight',
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className
    )}
    {...props}
  />
));
<<<<<<< HEAD
CardTitle.displayName = 'CardTitle';
=======
<<<<<<< HEAD
CardTitle.displayName = CardTitle';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/card.tsx
const CardDescription = React.forwardRef<
  HTMLParagraph</HTMLParagraphElement>Element
=======
CardTitle.displayName = 'CardTitle';
>>>>>>> origin/chore/fix-lint-and-merge

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
<<<<<<< HEAD
CardDescription.displayName = 'CardDescription';
=======
<<<<<<< HEAD
CardDescription.displayName = CardDescription';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
<<<<<<< HEAD
CardContent.displayName = 'CardContent';
=======
<<<<<<< HEAD
CardContent.displayName = CardContent';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
<<<<<<< HEAD
:src_backup/components/ui/Card.tsx
  />
));
CardFooter.displayName = 'CardFooter';
=======
  />
));
<<<<<<< HEAD
CardFooter.displayName = CardFooter';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
:src_backup/components/ui/Card.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/ui/Card.tsx
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0:components.disabled/components/ui/Card.tsx
<<<<<<< HEAD
:src_backup/components/ui/Card.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  />;
))CardFooter.displayName = 'CardFooter';export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
