<<<<<<< HEAD
import React from "react";
import { cn } from "../../src/lib/utils";
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props}  />
  )

);
Card.displayName = "Card";
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}  />
  )

);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}  />

    {...props}>
 />
))


CardHeader.displayName = "CardHeader"
const CardTitle = React.forwardRef<
  HTMLParagraphElement>
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => ("
  <h3 ref="{ref}""
    className="{cn(""
      "text-2xl font-semibold leading-none tracking-tight"
      className>
    )}

    {...props}>
 />
))


CardTitle.displayName = "CardTitle"
const CardDescription = React.forwardRef<
  HTMLParagraphElement>
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => ("
  <p ref="{ref}""
    className={cn("text-sm text-muted-foreground", className)}

    {...props}>
 />
))


CardDescription.displayName = "CardDescription"
const CardContent = React.forwardRef<
  HTMLDivElement>
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (""
  <div ref="{ref}" className={cn("p-6 pt-0", className)} {...props}  />
))


CardContent.displayName = "CardContent"
const CardFooter = React.forwardRef<
  HTMLDivElement>
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => ("
  <div ref="{ref}""
    className={cn("flex items-center p-6 pt-0", className)}

export const CardTitle = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className = "", ...props }, ref) => (
    <h3 ref={ref} className={"text-2xl font-semibold leading-none tracking-tight ${className}"} {...props}  />
  )

);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props}  />
  )

);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props}  />
  )

);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props}  />
  )

);
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
=======
import React from 'react'

export default function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return <div className={`rounded border border-gray-800 bg-black/40 ${className}`}>{children}</div>
}
>>>>>>> origin/chore/standardize-pages-router
