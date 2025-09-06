<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import {cva, type, VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/utils';
const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground'
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground'
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      }
    }
    defaultVariants: {
      variant: 'default'
    }
  }
);
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
=======


import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
=======
=======
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
=======
import React from 'react';
import * as React from 'react';
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
<<<<<<< HEAD
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
<<<<<<< HEAD
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
  />));
AlertDescription.display_name = 'AlertDescription';
;
export { Alert, AlertTitle, AlertDescription }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
