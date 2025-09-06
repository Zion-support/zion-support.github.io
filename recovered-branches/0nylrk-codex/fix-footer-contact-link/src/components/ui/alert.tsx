<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import {cva, type, VariantProps} from 'class-variance-authority';
<<<<<<< HEAD
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
=======
=======


>>>>>>> main
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
=======
=======
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main

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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
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
<<<<<<< HEAD
));
Alert.displayName = 'Alert';
const AlertTitle = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const Alert = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
></typeof>(({ className, variant, ...props }, ref) => (
=======

const alertVariants = cva(;
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',;
  {;
    variants: {;
      variant: {;
        default: 'bg-background text-foreground',;
        destructive:;
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',;
      },;
    },;
    defaultVariants: {;
      variant: 'default',;
    },;
  }
);

const Alert = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;
></typeof>(({ className, variant, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
=======
import {cva, type, VariantProps} from 'class - variance - authority';
;
import {cn} from '@/lib / utils';
;
const alert_variants = cva (
  'relative w - full rounded - lg border p - 4 [&>svg~*]:pl - 7 [&>svg + div]:translate - y-[-3px] [&>svg]:absolute [&>svg]:left - 4 [&>svg]:top - 4 [&>svg]:text - foreground',
  {
    variants: {
      variant: {
        default: 'bg - background text - foreground',
        destructive:;
          'border - destructive / 50 text - destructive dark:border - destructive [&>svg]:text - destructive',
      },
    },
    default_variants: {
      variant: 'default',
    },
  }
);
;
const Alert = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement> & VariantProps < typeof alert_variants>;
></typeof>(({ class_name, variant, ...props }, ref) => (
  <div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    role='alert';
    className={cn (alert_variants ({ variant }), class_name)}
    {...props}

  />

>>>>>>> main
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
<<<<<<< HEAD
));
AlertTitle.displayName = 'AlertTitle';
const AlertDescription = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>
=======
=======


>(({ className, ...props }, ref) => (
=======
Alert && Alert.displayName = 'Alert';

const AlertTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <h5
=======
  />));
Alert.display_name = 'Alert';
;
const AlertTitle = React.forward_ref<;
  HTMLParagraphElement,
  React.HTMLAttributes < HTMLHeadingE</HTMLHeadingElement > lement>;
>(({ class_name, ...props }, ref) => (
  <h5;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ('mb - 1 font - medium leading - none tracking - tight', class_name)}
    {...props}

  />

>>>>>>> main
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
<<<<<<< HEAD
));
AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription }
=======
))
AlertDescription.displayName = "AlertDescription"

<<<<<<< HEAD
export { Alert, AlertTitle, AlertDescription }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
export { Alert, AlertTitle, AlertDescription };
=======
export { Alert, AlertTitle, AlertDescription }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>(({ className, ...props }, ref) => (
=======
AlertTitle && AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  <div
=======
  />));
AlertTitle.display_name = 'AlertTitle';
;
const AlertDescription = React.forward_ref<;
  HTMLParagraphElement,
  React.HTMLAttr</HTMLParagraphElement > ibutes < HTMLParagraphElement>;
>(({ class_name, ...props }, ref) => (
  <div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn ('text - sm [&_p]:leading - relaxed', class_name)}
    {...props}

AlertDescription && AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };

=======
  />));
AlertDescription.display_name = 'AlertDescription';
;
export { Alert, AlertTitle, AlertDescription }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  />

))
AlertDescription.displayName = "AlertDescription"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
