import React from 'react.ts';
import { cn  } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
;
const Card = React.forwardRef<HTMLDivElement, CardProps>({ className: unknown, ...props }: unknown, ref: unknown (
    <div
      ref={ref}
      className = {

  cn('
        'rounded-lg border bg-card text-card-foreground shadow-sm',
  className
      )
  );
);
Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
;
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>({ className: unknown, ...props }: unknown, ref: unknown (
    <div
      ref={ref}
      className = {

  cn('flex flex-col space-y-1.5 p-6',
  className)
  );
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
;
const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>({ className: unknown, ...props }: unknown, ref: unknown (
    <h3
      ref={ref}
      className = {

  cn('
        'text-2xl font-semibold leading-none tracking-tight',
  className
      )
  );
);
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
;
const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>({ className: unknown, ...props }: unknown, ref: unknown (
    <p
      ref={ref}
      className = {

  cn('text-sm text-muted-foreground',
  className)
  );
);
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
;
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>({ className: unknown, ...props }: unknown, ref: unknown (
    <div
      ref={ref}
      className = {

  cn('p-6 pt-0',
  className)
  );
);
CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
;
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>({ className: unknown, ...props }: unknown, ref: unknown (
    <div
      ref={ref}
      className = {

  cn('flex items-center p-6 pt-0',
  className)
  );
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };