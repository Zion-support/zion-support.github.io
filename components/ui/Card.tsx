import React from 'react';
import { cn } from '../../lib/utils';
// Define HTML element types
interface HTMLElement {
  className: string;
  id: string;
  innerHTML: string;
  textContent: string | null;
  style: { [key: string]: string }
}
interface HTMLDivElement extends HTMLElement {
  tagName: 'DIV';
}
interface HTMLParagraphElement extends HTMLElement {
  tagName: 'P';
}
interface HTMLHeadingElement extends HTMLElement {
  tagName: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
}

const Card = null;
      className
    )}
    {...props}
  />;
));
Card.displayName = "Card";

const CardHeader = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />;
));
CardHeader.displayName = "CardHeader";

const CardTitle = null;
      className
    )}
    {...props}
  />;
));
CardTitle.displayName = "CardTitle";

const CardDescription = null;
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
CardDescription.displayName = "CardDescription";

const CardContent = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent.displayName = "CardContent";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />;
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
  hover?: boolean
}
const Card: React.FC<CardProps> = ({
