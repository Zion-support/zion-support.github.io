
import * as React from &quot;react&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => (
  <div
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;rounded-lg border bg-card text-card-foreground shadow-sm&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
Card.displayName = &quot;Card&quot;

const _CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => (
  <div
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;flex flex-col space-y-1.5 p-6&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("flex flex-col space-y-1.5 p-6", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
CardHeader.displayName = &quot;CardHeader&quot;

const _CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(_({_className, _...props}, _ref) => (
  <h3
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;text-2xl font-semibold leading-none tracking-tight&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "text-2xl font-semibold leading-none tracking-tight", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
CardTitle.displayName = &quot;CardTitle&quot;

const _CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({_className, _...props}, _ref) => (
  <p
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;text-sm text-muted-foreground&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("text-sm text-muted-foreground", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
CardDescription.displayName = &quot;CardDescription&quot;

const _CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(&quot;p-6 pt-0&quot;, className)} {...props} />
=======
>(_({_className, _...props}, _ref) => (
  <div ref={_ref} className={_cn("p-6 pt-0", _className)} {_...props} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
))
CardContent.displayName = &quot;CardContent&quot;

const _CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => (
  <div
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;flex items-center p-6 pt-0&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("flex items-center p-6 pt-0", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
CardFooter.displayName = &quot;CardFooter&quot;

export {_Card, _CardHeader, _CardFooter, _CardTitle, _CardDescription, _CardContent}
