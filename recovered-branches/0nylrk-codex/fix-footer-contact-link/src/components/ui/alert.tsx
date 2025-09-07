import * as React from 'react';
import {cva, type, VariantProps} from 'class-variance-authority';

<<<<<<< HEAD
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
<<<<<<< HEAD
  }
);
import { cn } from "@/lib/utils""
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground","
  {
    }
    "variants": {
      }
      "variant": {
        }
        "default": "bg-background text-foreground","
        "destructive":
          "border-destructive/50 text-destructive "dark":border-destructive [&>svg]:text-destructive"}},"
    "defaultVariants": {
      }
      "variant": "default"}}"
=======
  });
=======
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
)

<<<<<<< HEAD
const Alert = React.forwardRef<
<<<<<<< HEAD
  HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  <div,
ref={ref}
    role="alert""
    className={cn(alertVariants({ variant }), className)}
    {...props} />
  HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
=======
  HTMLDivElement

  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  <div;
    ref={ref}

=======
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const Alert = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>>>>>>> origin/chore/fix-lint-and-merge
></typeof>(({ className, variant, ...props }, ref) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD

));
Alert.displayName = 'Alert';
const AlertTitle = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

      variant: 'default',
    },
  });
;
const Alert = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement> & VariantProps < typeof alert_variants>;
></typeof>(({ class_name, variant, ...props }, ref) => (
  <div;

    role='alert';
    className={cn (alert_variants ({ variant }), class_name)}
    {...props}
  />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
))

Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>(({ className, ...props }, ref) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
Alert && Alert.displayName = 'Alert';
const AlertTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

=======
  <h5
  />));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

));
AlertTitle.displayName = 'AlertTitle';
const AlertDescription = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>
=======
    ref={ref}
    className={cn ('mb - 1 font - medium leading - none tracking - tight', class_name)}
    {...props}
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
))
<<<<<<< HEAD
AlertTitle.displayName = "AlertTitle""
=======
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
>>>>>>> origin/chore/fix-lint-and-merge
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>(({ className, ...props }, ref) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
AlertTitle && AlertTitle.displayName = 'AlertTitle';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const AlertDescription = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

;

=======
  <div
  />));
AlertTitle.display_name = 'AlertTitle';
;
const AlertDescription = React.forward_ref<;
  HTMLParagraphElement,
  React.HTMLAttr</HTMLParagraphElement > ibutes < HTMLParagraphElement>;
>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
    className={cn ('text - sm [&_p]:leading - relaxed', class_name)}
    {...props}
AlertDescription && AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription };
  />));
AlertDescription.display_name = 'AlertDescription';
;
export { Alert, AlertTitle, AlertDescription }
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  />

))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

<<<<<<< HEAD
AlertDescription.displayName = 'AlertDescription';
export { Alert, AlertTitle, AlertDescription }
))"
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

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
=======
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

export { Alert, AlertTitle, AlertDescription }
;
export { Alert, AlertTitle, AlertDescription };
export { Alert, AlertTitle, AlertDescription }
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
