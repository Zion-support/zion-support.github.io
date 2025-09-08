import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  className?: string;
}

export function Select({ children, className, ...props }: SelectProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <select
      className={cn(baseClasses, className)}
      {...props}
    >
      {children}
    </select>
  );
}

        )}      >;
        {children}
      </SelectPrimitive.Viewport>;
      <SelectScrollDownButton />;
    </SelectPrimitive.Content>;

export function SelectTrigger({ children, className, ...props }: SelectTriggerProps) {
  return (
    <div className={cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', className)} {...props}>
      {children}
    </div>
  );
}

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SelectContent({ children, className, ...props }: SelectContentProps) {
  return (
    <div className={cn('relative', className)} {...props}>
      {children}
    </div>
  );
}

interface SelectValueProps {
  children?: React.ReactNode;
  placeholder?: string;
}

export function SelectValue({ children, placeholder, ...props }: SelectValueProps) {
  return (
    <span className="block truncate" {...props}>
      {children || placeholder}
    </span>
  );
}

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function SelectItem({ children, value, className, ...props }: SelectItemProps) {
  return (
    <option value={value} className={cn(className)} {...props}>
      {children}
    </option>
  );
}