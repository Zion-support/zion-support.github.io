<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import * as React from 'react';
import {cva, type, VariantProps} from 'class-variance-authority';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {cn} from '@/lib/utils';
const alertVariants = cva('
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground'
  {}
    variants: {}
      variant: {'
        default: 'bg-background text-foreground'
        destructive:'
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      }
    }
    defaultVariants: {'
      variant: 'default'
    }
  }
);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import * as React from "react""
import { cva, type VariantProps } from "class-variance-authority""
import * as React from "react""
import { cva, type VariantProps } from "class-variance-authority"



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils"

const alertVariants = cva("
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {}
    variants: {}
      variant: {"
        default: "bg-background text-foreground",
        destructive:"
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},
    defaultVariants: {"
      variant: "default"}}
)
<<<<<<< HEAD
const Alert = React.forwardRef<
  HTMLDivElement
=======


const Alert = React.forwardRef<;
  HTMLDivElement;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  <div;
    ref={ref}
<<<<<<< HEAD
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const Alert = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
></typeof>(({ className, variant, ...props }, ref) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  <div;
'
import {cva, type, VariantProps} from 'class - variance - authority';
;'
import {cn} from '@/lib / utils';
;
const alert_variants = cva ('
  'relative w - full rounded - lg border p - 4 [&>svg~*]:pl - 7 [&>svg + div]:translate - y-[-3px] [&>svg]:absolute [&>svg]:left - 4 [&>svg]:top - 4 [&>svg]:text - foreground',
  {}
    variants: {}
      variant: {'
        default: 'bg - background text - foreground',
        destructive:;'
          'border - destructive / 50 text - destructive dark:border - destructive [&>svg]:text - destructive',
      },
    },
    default_variants: {'
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

    ref={ref}

'
    role='alert';
    className={cn (alert_variants ({ variant }), class_name)}
    {...props}
  />




))"
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, ...props }, ref) => (
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
Alert && Alert.displayName = 'Alert';

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const AlertTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
  <h5
  />));
=======

  <h5;
  />));'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
Alert.display_name = 'Alert';
;
const AlertTitle = React.forward_ref<;
  HTMLParagraphElement,
  React.HTMLAttributes < HTMLHeadingE</HTMLHeadingElement > lement>;
>(({ class_name, ...props }, ref) => (
  <h5;
<<<<<<< HEAD
    ref={ref}
    className={cn ('mb - 1 font - medium leading - none tracking - tight', class_name)}
    {...props}

  />
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>(({ className, ...props }, ref) => (AlertTitle && AlertTitle.displayName = 'AlertTitle';
=======

    ref={ref}'
    className={cn ('mb - 1 font - medium leading - none tracking - tight', class_name)}
    {...props}

  <h5;
    ref={ref}'
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
'
AlertTitle && AlertTitle.displayName = 'AlertTitle';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

const AlertDescription = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
AlertDescription.display_name = 'AlertDescription';
;
export { Alert, AlertTitle, AlertDescription }
<<<<<<< HEAD
<<<<<<< HEAD
=======




  <div;
    ref={ref}'
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
'
AlertDescription && AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };


))"
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription };
export { Alert, AlertTitle, AlertDescription };
;


  />));'
AlertDescription.display_name = 'AlertDescription';
;
export { Alert, AlertTitle, AlertDescription };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;

  />
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  />
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
));
=======
;));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;));
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
));'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription }
))"
AlertDescription.displayName = "AlertDescription"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export { Alert, AlertTitle, AlertDescription }
;
export { Alert, AlertTitle, AlertDescription };
export { Alert, AlertTitle, AlertDescription }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
