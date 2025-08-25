<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { cn } from '@/lib/utils';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive';
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

<<<<<<< HEAD
export const Alert: React.FC<AlertProps> = ({ children, className, variant = 'default' }) => {
  return (
    <div
      className={cn(
        "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
        variant === 'destructive' && "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        className
      )}
    >
      {children}
    </div>
  );
};

=======
interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const alertVariants = {
  default: "border-zion-slate-200 bg-white text-zion-slate-950 dark:border-zion-slate-800 dark:bg-zion-slate-950 dark:text-zion-slate-50",
  destructive: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-50",
};

<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
export const AlertDescription: React.FC<AlertDescriptionProps> = ({ children, className }) => {
  return (
    <div className={cn("text-sm [&_p]:leading-relaxed", className)}>
      {children}
    </div>
  );
<<<<<<< HEAD
};
=======
};
=======
export const Alert: React.FC<AlertProps> = ({ children, variant = "default", className = "" }) => (
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
>>>>>>> origin/cursor/build-and-fix-errors-e276
  <div
    className={cn(
      "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-zion-slate-950 dark:[&>svg]:text-zion-slate-50",
      alertVariants[variant],
      className
    )}
  >
    {children}
  </div>
);

export const AlertTitle: React.FC<AlertTitleProps> = ({ children, className = "" }) => (
  <h5
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
  >
    {children}
  </h5>
);

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ children, className = "" }) => (
  <div
    className={cn("text-sm [&_p]:leading-relaxed", className)}
<<<<<<< HEAD
  >
    {children}
  </div>
);
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
