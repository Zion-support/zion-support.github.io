<<<<<<< HEAD
import * as React from &quot;react&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;

import { cn } from &quot;@/lib/utils&quot;

const alertVariants = cva(
  &quot;relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground&quot;,
  {
    variants: {
      variant: {
        default: &quot;bg-background text-foreground&quot;,
        destructive:
          &quot;border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive&quot;}},
    defaultVariants: {
      variant: &quot;default&quot;}}
=======
import * as React from "react"


const _alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {_variants: {
      variant: {
        default: "bg-background text-foreground", _destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},
    defaultVariants: {_variant: "default"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
)

const _Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(_({_className, _variant, _...props}, _ref) => (
  <div
<<<<<<< HEAD
    ref={ref}
    role=&quot;alert&quot;
    className={cn(alertVariants({ variant }), className)}
    {...props}
=======
    ref={_ref}
    role="alert"
    className={_cn(alertVariants({ variant}), className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
Alert.displayName = &quot;Alert&quot;

const _AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(_({_className, _...props}, _ref) => (
  <h5
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;mb-1 font-medium leading-none tracking-tight&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("mb-1 font-medium leading-none tracking-tight", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
AlertTitle.displayName = &quot;AlertTitle&quot;

const _AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({_className, _...props}, _ref) => (
  <div
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;text-sm [&_p]:leading-relaxed&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("text-sm [&_p]:leading-relaxed", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
AlertDescription.displayName = &quot;AlertDescription&quot;

export {_Alert, _AlertTitle, _AlertDescription}
