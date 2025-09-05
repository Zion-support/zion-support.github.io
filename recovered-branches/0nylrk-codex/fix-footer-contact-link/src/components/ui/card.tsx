
import * as React from &quot;react&quot;

import { cn } from &quot;@/lib/utils&quot;    )}
    {_...props}
  />
))
Card.displayName = &quot;Card&quot;

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({className, _...props}, ref) => (
  <div,
ref={ref}
    className={cn(&quot;flex flex-col space-y-1.5 p-6&quot;, className)}
    {...props}  />
))
CardHeader.displayName = &quot;CardHeader&quot;

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(_({className, _...props}, ref) => (
  <h3,
ref={ref}
    className={cn(
      &quot;text-2xl font-semibold leading-none tracking-tight&quot;,
      className    )}
    {_...props}
  />
))
CardTitle.displayName = &quot;CardTitle&quot;

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({className, _...props}, ref) => (
  <p,
ref={ref}
    className={cn(&quot;text-sm text-muted-foreground&quot;, className)}
    {...props}  />
))
CardDescription.displayName = &quot;CardDescription&quot;

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(&quot;p-6 pt-0&quot;, className)} {...props} />))
CardContent.displayName = &quot;CardContent&quot;

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({className, _...props}, ref) => (
  <div,
ref={ref}
    className={cn(&quot;flex items-center p-6 pt-0&quot;, className)}
    {...props}  />
))
CardFooter.displayName = &quot;CardFooter&quot;

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}
