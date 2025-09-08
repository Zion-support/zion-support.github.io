import React from 'react'
import { cn } from '@/lib/utils'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={cn('space-y-4', className)} {...props}>
      {children}
    </form>
  )
}

interface FormFieldProps {
  children: React.ReactNode
  className?: string
}

export function FormField({ children, className }: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  )
}

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  required?: boolean
}

export function FormLabel({ children, required, className, ...props }: FormLabelProps) {
  return (
    <label
      className={cn(
        'block text-sm font-medium text-gray-700',
        required && "after:content-['*'] after:ml-0.5 after:text-red-500",
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}

interface FormControlProps {
  children: React.ReactNode
  className?: string
}

export function FormControl({ children, className }: FormControlProps) {
  return (
    <div className={cn('relative', className)}>
      {children}
    </div>
  )
}

interface FormMessageProps {
  children: React.ReactNode
  className?: string
  variant?: 'error' | 'warning' | 'info'
}

export function FormMessage({ children, className, variant = 'error' }: FormMessageProps) {
  const variantClasses = {
    error: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600'
  }

  return (
    <p className={cn('text-sm mt-1', variantClasses[variant], className)}>
      {children}
    </p>
  )
}

interface FormItemProps {
  children: React.ReactNode
  className?: string
}

export function FormItem({ children, className }: FormItemProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  )
}

interface FormDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function FormDescription({ children, className }: FormDescriptionProps) {
  return (
    <p className={cn('text-sm text-gray-600', className)}>
      {children}
    </p>
  )
}