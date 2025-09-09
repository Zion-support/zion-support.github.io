import * as React from "react"
import { cn } from "@/lib/utils"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
  name?: string;
}

export function Select({ 
  children, 
  className = '', 
  value, 
  onChange, 
  disabled = false 
}: SelectProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-zion-cyan/20 bg-zion-slate-dark px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      onChange={(e) => onValueChange?.(e.target.value)}
      {...props}
    >
      {children}
    </select>
  )
)
Select.displayName = "Select"

export interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SelectItem({ children, value }: SelectItemProps) {
  return (
    <option value={value}>
      {children}
    </option>
  )
)
SelectItem.displayName = "SelectItem"

export function SelectTrigger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-zion-cyan/20 bg-zion-slate-dark px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${className}`}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span className="text-sm text-white">{placeholder || 'Select an option'}</span>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}