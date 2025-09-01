import React from 'react.ts';
import { cn  } from '@/src/src/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement></HTMLDivElement></HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps></HTMLDivElement></HTMLDivElement>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className = {
  cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
  className
      )

}
      {...props}
    />;
  );
);
Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement></HTMLDivElement></HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps></HTMLDivElement></HTMLDivElement>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className = {
  cn('flex flex-col space-y-1.5 p-6',
  className)

}
      {...props}
    />;
  );
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement></HTMLHeadingElement></HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps></HTMLHeadingElement></HTMLHeadingElement>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className = {
  cn(
        'text-2xl font-semibold leading-none tracking-tight',
  className
      )

}
      {...props}
    />;
  );
);
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement></HTMLParagraphElement></HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps></HTMLParagraphElement></HTMLParagraphElement>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className = {
  cn('text-sm text-muted-foreground',
  className)

}
      {...props}
    />;
  );
);
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement></HTMLDivElement></HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps></HTMLDivElement></HTMLDivElement>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className = {
  cn('p-6 pt-0',
  className)

}
      {...props}
    />;
  );
);
CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement></HTMLDivElement></HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps></HTMLDivElement></HTMLDivElement>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className = {
  cn('flex items-center p-6 pt-0',
  className)

}
      {...props}
    />;
  );
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };