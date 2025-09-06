
import * as React from "react"

import { cn } from "@/lib/utils"

import {cn} from '@/lib/utils';
import * as React from "react"

import { cn } from "@/lib/utils"


const Card = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
></HTMLDivElement>(({ className, ...props }, ref) => (

const Card = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
></HTMLDivElement>(({ className, ...props }, ref) => (;
  <div
    ref={ref}
    className={cn(


      "rounded-lg border bg-card text-card-foreground shadow-sm",

      className
    )}
    {...props}
  />

))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>


>(({ className, ...props }, ref) => (
Card && Card.displayName = 'Card';

const CardHeader = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<</HTMLDivElement>HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1 && 1.5 p-6', className)}
    {...props}
>(({ className, ...props }, ref) => (
CardHeader && CardHeader.displayName = 'CardHeader';

const CardTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HT</HTMLHeadingElement>MLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
  <h3
    ref={ref}
    className={cn(
  <p
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
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,;
};
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;

