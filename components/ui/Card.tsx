<<<<<<< HEAD
import React from 'react';
import { cn } from '../../src/lib/utils';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';'import { cn } from '../../src/lib/utils';''const Card = React.forwardRef<;'
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
'rounded-lg border bg-card text-card-foreground shadow-sm', className'    )}'    {...props}
  />
));
Card.displayName = 'Card';''const CardHeader = React.forwardRef<;
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
<<<<<<< HEAD
import: React from 'react';';

type: Props = {
  children: React.ReactNode;
  className?: string;,
};

export: function Card({ children, className }: Props) {
  return: <div className={className}>{children}</div>;
}

export: function CardHeader({ children, className }: Props) {
  return: <div className={className}>{children}</div>;
}

export: function CardTitle({ children, className }: Props) {
  return: <h3 className={className}>{children}</h3>;
}

export: function CardContent({ children, className }: Props) {
  return: <div className={className}>{children}</div>;
}

export: default Card;
=======
import React from 'react';
import { cn } from '../../lib/utils';
>>>>>>> main

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('
>>>>>>> main
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
<<<<<<< HEAD
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
=======
  />
));
'
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
'
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
'
>>>>>>> main
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
<<<<<<< HEAD
=======
'
>>>>>>> main
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
=======
>(({ className, ...props }, ref) => ('
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
'
>>>>>>> main
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
<<<<<<< HEAD
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
'
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
<<<<<<< HEAD
export function Card({ children, className }: Props) {
  return <div className={className}>{children}</div>
}

export function CardHeader({ children, className }: Props) {
  return <div className={className}>{children}</div>
}

export function CardTitle({ children, className }: Props) {
  return <h3 className={className}>{children}</h3>
}

export function CardContent({ children, className }: Props) {
  return <div className={className}>{children}</div>
}

export default Card
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
