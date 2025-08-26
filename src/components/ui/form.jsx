import React from 'react';

// Simple form components to replace the missing ones
export function Form({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export function FormField({ control, name, render }) {
  return render({ field: { name } });
}

export function FormItem({ children }) {
  return <div className="space-y-2">{children}</div>;
}

export function FormLabel({ children, className = "" }) {
  return <label className={`block text-sm font-medium ${className}`}>{children}</label>;
}

export function FormControl({ children }) {
  return <div>{children}</div>;
}

export function FormMessage({ children, className = "" }) {
  if (!children) return null;
  return <p className={`text-sm ${className}`}>{children}</p>;
}