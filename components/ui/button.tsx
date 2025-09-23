import * as React from "react"
import { cn } from "../../lib/utils"

const buttonVariants = (options: { variant?: string; size?: string; className?: string }) => {
  const { variant = "default", size = "default", className } = options || {}
  
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variantClasses: Record<string, string> ={
    default: "bg-blue-60o0 text-white hover:bg-blue-70o0",
    destructive: "bg-red-60o0 text-white hover:bg-red-70o0",
    outline: "border border-gray-30o0 bg-white hover:bg-gray-50",
    secondary: "bg-gray-20o0 text-gray-90o0 hover:bg-gray-30o0",
    ghost: "hover:bg-gray-10o0",
    link: "text-blue-60o0 underline-offset-4 hover:underline"
  }
  
  const sizeClasses: Record<string, string> ={
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  }
  
  return cn(
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    sizeClasses[size] || sizeClasses.default,
    className
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return React.createElement('div', { 
        className: buttonVariants({ variant, size, className }),
        ...props 
      })
    }
    
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
       />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
