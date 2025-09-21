import * as React from 'react'
// Temporarily disabled due to Node.js compatibility issues
// import * as ToastPrimitives from '@radix-ui/react-toast'
// import { cva, type VariantProps } from 'class-variance-authority'
// import { X } from 'lucide-react'

// import { cn } from '@/lib/utils'

// Stub implementations for toast components
const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>
const ToastViewport = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
const Toast = React.forwardRef<HTMLDivElement, any>(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
const ToastAction = React.forwardRef<HTMLButtonElement, any>(({ className, ...props }, ref) => (
  <button ref={ref} className={className} {...props} />
))
const ToastClose = React.forwardRef<HTMLButtonElement, any>(({ className, ...props }, ref) => (
  <button ref={ref} className={className} {...props} />
))
const ToastTitle = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
const ToastDescription = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))

type ToastProps = any
type ToastActionElement = any

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
