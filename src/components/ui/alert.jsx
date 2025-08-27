import React from 'react';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
const alertVariants = {
  default: "bg-background text-foreground",
  destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
  success: "border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600",
  warning: "border-yellow-500/50 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600",
  info: "border-blue-500/50 text-blue-600 dark:border-blue-500 [&>svg]:text-blue-600"
};
const alertIcons = {
  default: Info,
  destructive: XCircle,
  success: CheckCircle,
  warning: AlertTriangle,
  info: Info
};
export function Alert({ className = "", variant = "default", children, ...props }) {
  const Icon = alertIcons[variant];
  
  return (
    <div
      className={`relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7 ${alertVariants[variant]} ${className}`}
      {...props}
    >
      <Icon className="h-4 w-4" />
      <div className="[&_p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
export function AlertTitle({ className = "", ...props }) {
  return (
    <h5
      className={`mb-1 font-medium leading-none tracking-tight ${className}`}
      {...props}
    />
  );
}
export function AlertDescription({ className = "", ...props }) {
  return (
    <div
      className={`text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    />
  );
}