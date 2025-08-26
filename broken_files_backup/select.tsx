import React from 'react';
interface SelectProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}
<<<<<<< HEAD:src/components/ui/select.tsx

export function Select({ children, className = '', value, onValueChange }: SelectProps) {
=======
export function Select({
  children,
  className = '',
  value,
  onChange,
  disabled = false
}: SelectProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/select.tsx
  return (
    <select
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </select>
  );
}
interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}
export function SelectItem({ children, value }: SelectItemProps) {
  return (
<<<<<<< HEAD:src/components/ui/select.tsx
    <div
      className={`
        flex h-10 w-full items-center justify-between rounded-md border 
        border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm 
        text-white placeholder:text-zion-slate-light/50
        focus:outline-none focus:ring-2 focus:ring-zion-cyan 
        focus:border-transparent transition-colors cursor-pointer
        ${className}
      `}
      {...props}
    >
=======
    <option value={value}>
      {children}
    </option>
  );
}
export function SelectTrigger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/select.tsx
      {children}
    </div>
  );
}
export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}
<<<<<<< HEAD:src/components/ui/select.tsx

export function SelectContent({ children, className = '' }: SelectProps) {
  return (
    <div className={`
      absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
      border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
      shadow-lg ${className}
    `}>
      {children}
    </div>
  );
}

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function SelectItem({ children, className = '', value, ...props }: SelectItemProps) {
  return (
    <div
      className={`
        relative flex w-full cursor-pointer select-none items-center 
        rounded-sm px-3 py-2 text-sm text-white outline-none 
        hover:bg-zion-blue/20 focus:bg-zion-blue/20 
        focus:text-white transition-colors
        ${className}
      `}
      data-value={value}
      {...props}
    >
      {children}
    </div>
  );
=======
export function SelectContent({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/select.tsx
}