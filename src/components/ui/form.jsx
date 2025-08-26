import React from 'react';
import { useFormContext } from 'react-hook-form';

export function Form({ ...props }) {
  return <form {...props} />;
}

export function FormField({ name, ...props }) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];
  
  return (
    <div>
      <input {...register(name)} {...props} />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
}

export function FormItem({ className = "", ...props }) {
  return <div className={className} {...props} />;
}

export function FormLabel({ className = "", ...props }) {
  return <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props} />;
}

export function FormControl({ ...props }) {
  return <div {...props} />;
}

export function FormDescription({ className = "", ...props }) {
  return <p className={`text-sm text-muted-foreground ${className}`} {...props} />;
}

export function FormMessage({ className = "", ...props }) {
  return <p className={`text-sm font-medium text-destructive ${className}`} {...props} />;
}