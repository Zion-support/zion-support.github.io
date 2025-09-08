import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn("space-y-4", className)}
        {...props}
      />
    )
  }
)
Form.displayName = "Form"

export interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
        {...props}
      />
    )
  }
)
FormLabel.displayName = "FormLabel"

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
      />
    )
  }
)
FormControl.displayName = "FormControl"

export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    )
  }
)
FormDescription.displayName = "FormDescription"

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "error" | "success" | "warning";
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "text-sm text-muted-foreground",
      error: "text-sm text-red-500",
      success: "text-sm text-green-500",
      warning: "text-sm text-yellow-500",
    };

    return (
      <p
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      />
    )
  }
)
FormMessage.displayName = "FormMessage"

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      />
    )
  }
)
FormItem.displayName = "FormItem"

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormItem,
}