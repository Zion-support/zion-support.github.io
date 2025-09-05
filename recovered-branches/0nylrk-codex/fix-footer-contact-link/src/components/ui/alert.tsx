import * as React from "react"


const _alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {_variants: {
      variant: {
        default: "bg-background text-foreground", _destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},
    defaultVariants: {_variant: "default"}}
)

const _Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(_({_className, _variant, _...props}, _ref) => (
  <div
    ref={_ref}
    role="alert"
    className={_cn(alertVariants({ variant}), className)}
    {_...props}
  />
))
Alert.displayName = "Alert"

const _AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(_({_className, _...props}, _ref) => (
  <h5
    ref={_ref}
    className={_cn("mb-1 font-medium leading-none tracking-tight", _className)}
    {_...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const _AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({_className, _...props}, _ref) => (
  <div
    ref={_ref}
    className={_cn("text-sm [&_p]:leading-relaxed", _className)}
    {_...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export {_Alert, _AlertTitle, _AlertDescription}
