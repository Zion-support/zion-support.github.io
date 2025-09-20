<<<<<<< HEAD
import React from "react";
import React from "react",;
interface AlertProps {,
"children": React.ReactNode,",;
className?: string;
}
variant?: "default" | "destructive"}
};
interface AlertTitleProps {,
}
"children": React.ReactNode;}
className?: string};
interface AlertDescriptionProps {,
}
"children": React.ReactNode;}
"children": React.ReactNode;
className?: string,
};
interface AlertDescriptionProps {,
"children": React.ReactNode;
className?: string,
};
export function Alert($1) {,
const baseClasses = "relative w-full rounded-lg border p-4",
const variantClasses = variant === "destructive",
? "border-red-200 bg-red-50 text-red-800",
: "border-gray-200 bg-gray-50 text-gray-800",
return <div className={`${baseClasses} ${variantClasses} ${className}`}>{children}</div>,
}
export function AlertTitle($1) {,
<<<<<<< HEAD
return <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`}>{children}</h5>}
=======
return <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`}>{children}</h5>,;
};
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
export function AlertDescription($1) {,;
return <div className = {`text-sm ${className}`}>{children}</div>;
};
export default Alert;
import React from "react"; interface AlertProps { children: React.ReactNode,", className?: string; variant?: "default" | "destructive"} interface AlertTitleProps { children: React.ReactNode; className?: string} interface AlertDescriptionProps { children: React.ReactNode; className?: string} export function Alert($1) { const baseClasses = "relative w-full rounded-lg border p-4", const variantClasses = variant === "destructive" ? "border-red-200 bg-red-50 text-red-800" : "border-gray-200 bg-gray-50 text-gray-800", return <div className={`${baseClasses} ${variantClasses} ${className}`}>{children}</div>} export function AlertTitle($1) { return <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`}>{children}</h5>} export function AlertDescription($1) { return <div className={`text-sm ${className}`}>{children}</div>} export default Alert,",",;<//div><///div>
=======
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
