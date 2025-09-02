<<<<<<< HEAD
import React from 'react';'import { cn } from '../../src/lib/utils';''const Card = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
=======
import React from 'react';
import { cn } from '../../src/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'rounded-lg border bg-card text-card-foreground shadow-sm', className'    )}'    {...props}
  />
));
Card.displayName = 'Card';''const CardHeader = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}'    {...props}'  />
));
CardHeader.displayName = 'CardHeader';''const CardTitle = React.forwardRef<;
  HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>
=======
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

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
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
<<<<<<< HEAD
      'text-2xl font-semibold leading-none tracking-tight', className'    )}'    {...props}
  />
));
CardTitle.displayName = 'CardTitle';''const CardDescription = React.forwardRef<;
  HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}'    {...props}'  />
));
CardDescription.displayName = 'CardDescription';''const CardContent = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />'));'CardContent.displayName = 'CardContent';''const CardFooter = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}'    {...props}'  />
));
CardFooter.displayName = 'CardFooter';''export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

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

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

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

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
