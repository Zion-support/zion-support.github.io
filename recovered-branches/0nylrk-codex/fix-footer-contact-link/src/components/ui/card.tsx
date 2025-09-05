
<<<<<<< HEAD
import * as React from &quot;react&quot;

import { cn } from &quot;@/lib/utils&quot;

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      &quot;rounded-lg border bg-card text-card-foreground shadow-sm&quot;,
      className
    )}
    {...props}
  />
))
Card.displayName = &quot;Card&quot;

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
=======
import * as React from "react";
import { cn } from "@/lib/utils";
const Card = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div;
    ref={ref}
    className={cn(;
      "rounded-lg border bg-card text-card-foreground shadow-sm",;
      className;
    )}
    {...props}
  />;
));
Card.displayName = "Card";
const CardHeader = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    ref={ref}
    className={cn(&quot;flex flex-col space-y-1.5 p-6&quot;, className)}
    {...props}
<<<<<<< HEAD
  />
))
CardHeader.displayName = &quot;CardHeader&quot;

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      &quot;text-2xl font-semibold leading-none tracking-tight&quot;,
      className
    )}
    {...props}
  />
))
CardTitle.displayName = &quot;CardTitle&quot;

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
=======
  />;
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
  <h3;
    ref={ref}
    className={cn(;
      "text-2xl font-semibold leading-none tracking-tight",;
      className;
    )}
    {...props}
  />;
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
  <p;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    ref={ref}
    className={cn(&quot;text-sm text-muted-foreground&quot;, className)}
    {...props}
<<<<<<< HEAD
  />
))
CardDescription.displayName = &quot;CardDescription&quot;

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(&quot;p-6 pt-0&quot;, className)} {...props} />
))
CardContent.displayName = &quot;CardContent&quot;

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
=======
  />;
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef<;
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    ref={ref}
    className={cn(&quot;flex items-center p-6 pt-0&quot;, className)}
    {...props}
<<<<<<< HEAD
  />
))
CardFooter.displayName = &quot;CardFooter&quot;

=======
  />;
));
CardFooter.displayName = "CardFooter";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;