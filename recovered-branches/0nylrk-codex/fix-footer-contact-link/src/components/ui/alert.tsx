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
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role=&quot;alert&quot;
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = &quot;Alert&quot;

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
=======
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const alertVariants = cva(;
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",;
  {;
    variants: {;
      variant: {;
        default: "bg-background text-foreground",;
        destructive:;
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},;
    defaultVariants: {;
      variant: "default"}}
);
const Alert = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;
>(({ className, variant, ...props }, ref) => (;
  <div;
    ref={ref}
    role="alert";
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />;
));
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
  <h5;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    ref={ref}
    className={cn(&quot;mb-1 font-medium leading-none tracking-tight&quot;, className)}
    {...props}
<<<<<<< HEAD
  />
))
AlertTitle.displayName = &quot;AlertTitle&quot;

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
=======
  />;
));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef<;
  HTMLParagraphElement;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
  <div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    ref={ref}
    className={cn(&quot;text-sm [&_p]:leading-relaxed&quot;, className)}
    {...props}
<<<<<<< HEAD
  />
))
AlertDescription.displayName = &quot;AlertDescription&quot;

=======
  />;
));
AlertDescription.displayName = "AlertDescription";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
export { Alert, AlertTitle, AlertDescription }
;