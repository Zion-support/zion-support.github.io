<<<<<<< HEAD
React from
  'react';
import { cn } from
  '../../src/lib/utils';''
  'const Card = React.forwardRef<;'
=======
import React from 'react'
import  { cn } from '../../src/lib/utils'''const Card = React.forwardRef<''
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
'rounded-lg border bg-card text-card-foreground shadow-sm'
  ', className'    )}
  '    {...props}'
  />
<<<<<<< HEAD
));
Card.displayName = 'Card'
  ';''const CardHeader = React.forwardRef<;'
=======
))
Card.displayName = 'Card'''const CardHeader = React.forwardRef<
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn(
  'flex flex-col space-y-1.5 p-6', className)}
  '    {...props}'  />
));
CardHeader.displayName =
  'CardHeader';''
  'const CardTitle = React.forwardRef<;'
=======
    className={cn('flex flex-col space-y-1.5 p-6', className)}'    {...props}'  />
))
CardHeader.displayName = 'CardHeader'''const CardTitle = React.forwardRef<
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
'text-2xl font-semibold leading-none tracking-tight'
  ', className'    )}
  '    {...props}'
  />
<<<<<<< HEAD
));
CardTitle.displayName = 'CardTitle'
  ';''const CardDescription = React.forwardRef<;'
=======
))
CardTitle.displayName = 'CardTitle'''const CardDescription = React.forwardRef<
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
<<<<<<< HEAD
    className={cn(
  'text-sm text-muted-foreground', className)}
  '    {...props}'  />
));
CardDescription.displayName =
  'CardDescription';''
  'const CardContent = React.forwardRef<;'
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0'
  ', className)} {...props} />'));'CardContent.displayName ='
  'CardContent';''
  'const CardFooter = React.forwardRef<;'
=======
    className={cn('text-sm text-muted-foreground', className)}'    {...props}'  />
))
CardDescription.displayName = 'CardDescription'''const CardContent = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />'))'CardContent.displayName = 'CardContent'''const CardFooter = React.forwardRef<
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn('flex items-center p-6 pt-0'
  ', className)}'    {...props}
  '  />'
));
CardFooter.displayName = 'CardFooter'
  ';''export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };'
=======
    className={cn('flex items-center p-6 pt-0', className)}'    {...props}'  />
))
CardFooter.displayName = 'CardFooter'''export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
