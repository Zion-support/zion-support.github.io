<<<<<<< HEAD
import React from 'react';
import { cn } from '../../lib/utils';

// Card component with proper TypeScript types
interface HTMLElement {
  className?: string;
}

interface HTMLDivElement extends HTMLElement {
  // HTMLDivElement specific properties
}
interface HTMLParagraphElement extends HTMLElement {
  // HTMLParagraphElement specific properties
}
interface HTMLHeadingElement extends HTMLElement {
  // HTMLHeadingElement specific properties
}

const Card = null;
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = null;
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = null;
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean
}

const Card: React.FC<CardProps> = ({
  children;
  className;
>>>>>>> pr-11992
