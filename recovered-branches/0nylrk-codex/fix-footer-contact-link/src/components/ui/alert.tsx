<<<<<<< HEAD
import * as React from 'react';
import {cva, type, VariantProps} from 'class-variance-authority';


=======
import {cn} from '@/lib/utils';'
const alertVariants = cva(;
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground''
  {
    }
    "variants": {
      }
      "variant": {
        }
        "default": "default","
    "destructive":
          'border-destructive/50 text-destructive "dark":border-destructive [&>svg]:text-destructive''
      }
    }
    "defaultVariants": {
}
"variant": 'default';'
    }
      variant: 'default'
    }
  }
);
import { cn } from "@/lib/utils""
const alertVariants = cva(;
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground","
  {
    }
    "variants": {
      }
      "variant": {
        }
        "default": "bg-background text-foreground","
        "destructive":
          "border-destructive/50 text-destructive "dark":border-destructive [&>svg]:text-destructive"},"
    "defaultVariants": {
      }

          "border-destructive/50 text-destructive "dark":border-destructive [&>svg]:text-destructive"}},"
    "defaultVariants": {
      }
      "variant": "default"}}"
  });
>>>>>>> origin/cursor/delete-old-data-records-6bba

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

)


=======
)


const Alert = React.forwardRef<
  HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  <div,
ref={ref}
    role="alert""
    className={cn(alertVariants({ variant }), className)}
    {...props} />

>>>>>>> origin/cursor/delete-old-data-records-6bba
  HTMLDivElement

  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
  <div;
    ref={ref}

<<<<<<< HEAD


const Alert = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>

></typeof>(({ className, variant, ...props }, ref) => (


=======
const Alert = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
></typeof>(({ className, variant, ...props }, ref) => (


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

>>>>>>> origin/cursor/delete-old-data-records-6bba
))

Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>

<<<<<<< HEAD


=======
Alert && Alert.displayName = 'Alert';

>>>>>>> origin/cursor/delete-old-data-records-6bba
Alert && Alert.displayName = 'Alert';
const AlertTitle = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttributes<HTMLHeadingE</HTMLHeadingElement>lement>;
>(({ className, ...props }, ref) => (;

<<<<<<< HEAD
  <h5
  />));
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />

))

AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<

  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>



=======


));
AlertTitle.displayName = 'AlertTitle';
const AlertDescription = React.forwardRef<
  HTMLParagraphElement
  React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>

))
AlertTitle.displayName = "AlertTitle""
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (AlertTitle && AlertTitle.displayName = 'AlertTitle';'
AlertTitle && AlertTitle.displayName = 'AlertTitle';
>>>>>>> origin/cursor/delete-old-data-records-6bba
const AlertDescription = React && React.forwardRef<;
  HTMLParagraphElement,;
  React && React.HTMLAttr</HTMLParagraphElement>ibutes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

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

  />
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

))
AlertDescription.displayName = "AlertDescription"

<<<<<<< HEAD
export { Alert, AlertTitle, AlertDescription }



=======
AlertDescription.displayName = 'AlertDescription';
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
