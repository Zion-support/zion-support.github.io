"use client"

import * as React from "react"
// Temporarily disabled due to Node.js compatibility issues
// import * as ToastPrimitives from "@radix-ui/react-toast"
// import { cva } from "class-variance-authority"
// import { X } from "lucide-react"

// import { cn } from "../../lib/utils"

// Stub implementations for toast components
const ToastProvider = ({ children }) => <>{children}</>
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <button ref={ref} className={className} {...props} />
))
const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <button ref={ref} className={className} {...props} />
))
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}