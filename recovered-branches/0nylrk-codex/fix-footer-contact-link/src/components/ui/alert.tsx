<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from 'react';
import {cva, type, VariantProps} from 'class-variance-authority';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
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

<<<<<<< HEAD


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  <div
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

    ref={ref}

'
=======
    ref={ref}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    role='alert';
    className={cn (alert_variants ({ variant }), class_name)}
    {...props}
  />

<<<<<<< HEAD
<<<<<<< HEAD



))"
=======
=======
));
Alert.displayName = 'Alert';
const AlertTitle = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
))
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD
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
=======

>(({ className, ...props }, ref) => (
Alert && Alert.displayName = 'Alert';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


import {cn} from '@/lib/utils';'
const alertVariants = cva('
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground''
  {
    variants: {,
  variant: {'
        default: 'bg-background text-foreground'',
  destructive:'
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive''
      }
    }
    defaultVariants: {,'
  variant: 'default''
    }
  })
);'
import * as React from "react"""
import { cva, type VariantProps } from "class-variance-authority"""
import * as React from "react"""
import { cva, type VariantProps } from "class-variance-authority"""
import { cn } from "@/lib/utils""
const alertVariants = cva("
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground","
  {
    variants: {,
  variant: {"
        default: "bg-background text-foreground","
        destructive:"
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},"
    defaultVariants: {,"
  variant: "default"}}")

)
const Alert = React.forwardRef<
  HTMLDivElement;

  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
</HTMLDivElement>
  <div;
    ref={ref}"
    role="alert""

    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
</div>
const Alert = React.forwardRef<
  HTMLDivElement;

  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
</HTMLDivElement>
></typeof>(({ className, variant, ...props }, ref) => (
  <div;"
import {cva, type, VariantProps} from 'class - variance - authority';'
;'
import {cn} from '@/lib / utils';'
;
const alert_variants = cva ('
  'relative w - full rounded - lg border p - 4 [&>svg~*]:pl - 7 [&>svg + div]:translate - y-[-3px] [&>svg]:absolute [&>svg]:left - 4 [&>svg]:top - 4 [&>svg]:text - foreground','
</div>
const Alert = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement> & VariantProps < typeof alert_variants>;)
></typeof>(({ class_name, variant, ...props }, ref) => (
  <div;
    ref={ref}'
    role='alert';')
    className={cn (alert_variants ({ variant }), class_name)}
    {...props}
  />
</div>
const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
</HTMLHeadingElement>
const AlertTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>;
</HTMLHeadingE>

  <h5;
  />));
</h5>
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

>(({ className, ...props }, ref) => (
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>(({ className, ...props }, ref) => (
AlertTitle && AlertTitle.displayName = 'AlertTitle';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>(({ className, ...props }, ref) => (
AlertTitle && AlertTitle.displayName = 'AlertTitle';
>(({ className, ...props }, ref) => (AlertTitle && AlertTitle.displayName = 'AlertTitle';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const AlertDescription = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD
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

=======

  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}

AlertDescription && AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };

))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription };
export { Alert, AlertTitle, AlertDescription }
;

  />));
AlertDescription.display_name = 'AlertDescription';
;
export { Alert, AlertTitle, AlertDescription }
;
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
  />
));
AlertDescription.display_name = 'AlertDescription';
;
export { Alert, AlertTitle, AlertDescription }
;));
AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export { Alert, AlertTitle, AlertDescription }
=======
import {cn} from '@/lib/utils';
const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground
  {
    variants: {,
  variant: {
        default: 'bg-background text-foreground,
  destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive
      }
    defaultVariants: {,
  variant: 'default
  })
);
import * as React from "react"""
import { cva, type VariantProps } from "class-variance-authority"""
import { cn } from "@/lib/utils""
const alertVariants = cva("
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground","
  variant: {"
        default: "bg-background text-foreground","
        destructive:"
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},"
    defaultVariants: {,"
  variant: "default"}}")
)

const Alert = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>

  <div;
    ref={ref}"
    role="alert""
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
</div>

></typeof>(({ className, variant, ...props }, ref) => (
  <div;"
import {cva, type, VariantProps} from 'class - variance - authority';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
import {cn} from '@/lib / utils';
const alert_variants = cva (
  'relative w - full rounded - lg border p - 4 [&>svg~*]:pl - 7 [&>svg + div]:translate - y-[-3px] [&>svg]:absolute [&>svg]:left - 4 [&>svg]:top - 4 [&>svg]:text - foreground',
const Alert = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement> & VariantProps < typeof alert_variants>;)
></typeof>(({ class_name, variant, ...props }, ref) => (
    ref={ref}
    role='alert';')
    className={cn (alert_variants ({ variant }), class_name)}
const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>

const AlertTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLHeadingElement>;

  <h5;
  />));
    ref={ref})'
    className={cn ('mb - 1 font - medium leading - none tracking - tight', class_name)}'
    {...props}
  />

</h5>

  <h5;
    ref={ref}'
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}'

    {...props}
  />
</h5>
const AlertTitle = React.forward_ref<;
  React.HTMLAttributes < HTMLHeadingE</HTMLHeadingElement > lement>;
>(({ class_name, ...props }, ref) => (
    ref={ref})
    className={cn ('mb - 1 font - medium leading - none tracking - tight', class_name)}


    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
const AlertDescription = React.forwardRef<
  HTMLParagraphElement;

  React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>
</HTMLParagraphElement>
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>


const AlertDescription = React && React.forwardRef<;
  React && React.HTMLAttributes<HTMLParagraphElement>;

    className={cn('text-sm [&_p]:leading-relaxed', className)}

AlertDescription && AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription };

))
AlertDescription.displayName = "AlertDescription""
export { Alert, AlertTitle, AlertDescription }
;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

const Alert = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

    role="alert";"
  />;
const AlertTitle = React.forwardRef<;
  React.HTMLAttributes<HTMLHeadingElement>;

    className={cn("mb-1 font-medium leading-none tracking-tight", className)}"
const AlertDescription = React.forwardRef<;
  React.HTMLAttributes<HTMLParagraphElement>;

    className={cn("text-sm [&_p]:leading-relaxed", className)}"
export { Alert, AlertTitle, AlertDescription }) const Alert = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> > ( ({
)"
}, ref) => (<div />) ) Alert.displayName = "Alert" const AlertTitle = React.forwardRef< HTMLParagraphElement;"
React.HTMLAttributes<HTMLHeadingElement> > ( ({
}, ref) => (<h5 />) ) AlertTitle.displayName = "AlertTitle" const AlertDescription = React.forwardRef< HTMLParagraphElement;"
React.HTMLAttributes<HTMLParagraphElement> > ( ({
}, ref) => (<div />) ) AlertDescription.displayName = "AlertDescription" export {"
pr-12325
</div>
  <div;
    ref={ref}"
    className={cn('text-sm [&_p]:leading-relaxed', className)}'
    {...props}
  />
</div>'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
