import * as React from "react"

<<<<<<< HEAD
// Simple cn utility replacement
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
=======
// Simple Slot replacement
const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { asChild?: boolean }>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ref,
        className: `${children.props.className || ''} ${props.className || ''}`.trim()
      } as any);
    }
    return React.createElement('div', { ...props, ref }, children);
  }
);
Slot.displayName = "Slot";
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16

const buttonVariants = (options) => {
  const { variant = "default", size = "default", className } = options || {}
  
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline-offset-4 hover:underline"
  }
  
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  }
  
  return cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
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