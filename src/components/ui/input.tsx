<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { cn } from '@/lib/utils';
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
<<<<<<< HEAD
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};
=======
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  accept?: string;
}

export function Input({ 
  type = 'text', 
  placeholder, 
  className = '', 
  value, 
  onChange, 
  disabled = false,
  name,
  required = false,
  accept
}: InputProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
      name={name}
      required={required}
      accept={accept}
    />
  );
}
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-zion-slate mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border border-zion-slate/20 rounded-lg bg-background text-zion-slate placeholder-zion-slate/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-colors ${className} ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
