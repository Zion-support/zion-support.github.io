
import * as React from "react"


const _Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => (
  <div
    ref={_ref}
    className={_cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm", _className
    )}
    {_...props}
  />
))
Card.displayName = "Card"

const _CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => (
  <div
    ref={_ref}
    className={_cn("flex flex-col space-y-1.5 p-6", _className)}
    {_...props}
  />
))
CardHeader.displayName = "CardHeader"

const _CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(_({_className, _...props}, _ref) => (
  <h3
    ref={_ref}
    className={_cn(
      "text-2xl font-semibold leading-none tracking-tight", _className
    )}
    {_...props}
  />
))
CardTitle.displayName = "CardTitle"

const _CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(_({_className, _...props}, _ref) => (
  <p
    ref={_ref}
    className={_cn("text-sm text-muted-foreground", _className)}
    {_...props}
  />
))
CardDescription.displayName = "CardDescription"

const _CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => (
  <div ref={_ref} className={_cn("p-6 pt-0", _className)} {_...props} />
))
CardContent.displayName = "CardContent"

const _CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => (
  <div
    ref={_ref}
    className={_cn("flex items-center p-6 pt-0", _className)}
    {_...props}
  />
))
CardFooter.displayName = "CardFooter"

export {_Card, _CardHeader, _CardFooter, _CardTitle, _CardDescription, _CardContent}
