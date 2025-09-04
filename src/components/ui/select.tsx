import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: Reac t.ReactNode;
  className?: string;
}

export function Select(props: any) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50';
  
  return (
    <select
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

interface SelectTriggerProps {

  children: Reac t.ReactNode;
  className?: string;

}

export function SelectTrigger(props: any) {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50 ${className}`}>
      {children}
    </div>
  );
}

interface SelectContentProps {

  children: Reac t.ReactNode;
  className?: string;

}

export function SelectContent(props: any) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

interface SelectValueProps {

  children?: React.ReactNode;
  placeholder?: string;

}

export function SelectValue(props: any) {
  return (
    <span className="block truncate">
      {children || placeholder}
    </span>
  );
}

interface SelectItemProps {

  children: Reac t.ReactNode;
  value: string;
  className?: string;

}

export function SelectItem(props: any) {
  return (
    <option value={value} className={className}>
      {children}
    </option>
  );
}
</HTMLSelectElement>