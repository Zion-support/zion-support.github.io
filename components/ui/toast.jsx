"use client"

import * as React from "react"

// Simple toast implementation without Radix UI dependencies
const ToastProvider = ({ children }) => <div>{children}</div>

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${className || ''}`}
    {...props}
  />
))
ToastViewport.displayName = "ToastViewport"

const Toast = React.forwardRef(({ className, variant, children, ...props }, ref) => {
  const baseClasses = "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all"
  const variantClasses = variant === "destructive" 
    ? "border-red-200 bg-red-50 text-red-900" 
    : "border-gray-200 bg-white text-gray-900"
  
  return (
    <div
      ref={ref}
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
})
Toast.displayName = "Toast"

const ToastAction = React.forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className || ''}`}
    {...props}
  >
    {children}
  </button>
))
ToastAction.displayName = "ToastAction"

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`absolute right-2 top-2 rounded-md p-1 text-gray-500 opacity-0 transition-opacity hover:text-gray-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 ${className || ''}`}
    {...props}
  >
    ×
  </button>
))
ToastClose.displayName = "ToastClose"

const ToastTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm font-semibold ${className || ''}`}
    {...props}
  >
    {children}
  </div>
))
ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm opacity-90 ${className || ''}`}
    {...props}
  >
    {children}
  </div>
))
ToastDescription.displayName = "ToastDescription"

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}