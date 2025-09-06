<<<<<<< HEAD

import * as React from 'react';
import {cva, type, VariantProps} from 'class-variance-authority';


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
=======
=======
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},
    defaultVariants: {
      variant: "default"}}
)

const Alert = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = 'Alert';
const AlertTitle = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';
const AlertDescription = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription }
))
AlertDescription.displayName = "AlertDescription"


<<<<<<< HEAD
export { Alert, AlertTitle, AlertDescription }
;

export { Alert, AlertTitle, AlertDescription };
export { Alert, AlertTitle, AlertDescription }
;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
