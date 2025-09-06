
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const Alert = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
></typeof>(({ className, variant, ...props }, ref) => (
<<<<<<< HEAD
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

=======

));
Alert.displayName = 'Alert';
const AlertTitle = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD


>(({ className, ...props }, ref) => (
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

  />

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
<<<<<<< HEAD


>(({ className, ...props }, ref) => (
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
AlertDescription && AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />));
AlertDescription.display_name = 'AlertDescription';
;
export { Alert, AlertTitle, AlertDescription }
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
  />

))
AlertDescription.displayName = "AlertDescription"


import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
;
import { cn } from "@/lib/utils";
;
const alertVariants = cva(;
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",;
  {;
    variants:{;
      variant:{;
        default:"bg-background text-foreground",;
        destructive:;
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},;
    defaultVariants:{;
      variant:"default"}}
);
;
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
;
const AlertTitle = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLHeadingElement>;
>(({ className, ...props }, ref) => (;
  <h5;
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />;
));
AlertTitle.displayName = "AlertTitle";
;
const AlertDescription = React.forwardRef<;
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
  <div;
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />;
));
AlertDescription.displayName = "AlertDescription";
;
export { Alert, AlertTitle, AlertDescription }) const Alert = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> > ( ({
  className, variant, ...props 
}, ref) => (<div />) ) Alert.displayName = "Alert" const AlertTitle = React.forwardRef< HTMLParagraphElement;
React.HTMLAttributes<HTMLHeadingElement> > ( ({
  className, ...props 
}, ref) => (<h5 />) ) AlertTitle.displayName = "AlertTitle" const AlertDescription = React.forwardRef< HTMLParagraphElement;
React.HTMLAttributes<HTMLParagraphElement> > ( ({
  className, ...props 
}, ref) => (<div />) ) AlertDescription.displayName = "AlertDescription" export {
  Alert, AlertTitle, AlertDescription 
}
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />
));
AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription }
))
AlertDescription.displayName = "AlertDescription"

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export { Alert, AlertTitle, AlertDescription }
;
export { Alert, AlertTitle, AlertDescription };
export { Alert, AlertTitle, AlertDescription }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
