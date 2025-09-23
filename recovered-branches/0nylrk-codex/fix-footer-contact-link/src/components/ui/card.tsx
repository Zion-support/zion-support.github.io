
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className...props }ref) => (
=======
>(({ className, ...props }, ref) => (
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
>(({ className...props }ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6"className)}
=======
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
>>>>>>> origin/auto/autonomy-17186719616
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD
>(({ className...props }ref) => (
=======
>(({ className, ...props }, ref) => (
>>>>>>> origin/auto/autonomy-17186719616
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
<<<<<<< HEAD
>(({ className...props }ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground"className)}
=======
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
>>>>>>> origin/auto/autonomy-17186719616
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className...props }ref) => (
  <div ref={ref} className={cn("p-6 pt-0"className)} {...props} />
=======
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
>>>>>>> origin/auto/autonomy-17186719616
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className...props }ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0"className)}
=======
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
>>>>>>> origin/auto/autonomy-17186719616
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

<<<<<<< HEAD
export { CardHeaderCardFooterCardTitleCardDescriptionCardContent }
=======
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
>>>>>>> origin/auto/autonomy-17186719616
