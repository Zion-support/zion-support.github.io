import React from 'react.ts';

interface SelectProps extends React.PropsWithChildren<{}> {

  children: anyReact.ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>)  => void;
  disabled?: boolean;

}

export function Select(...args: any[]): any {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
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

interface SelectItemProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  value: string;

}

export function SelectItem(...args: any[]): any {
  return (
    <option value={value}>
      {children}
    </option>
  );
}

interface SelectTriggerProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string;

}

export function SelectTrigger(...args: any[]): any {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
      {children}
    </div>
  );
}

interface SelectValueProps extends React.PropsWithChildren<{}> {

  placeholder?: string;

}

export function SelectValue(...args: any[]): any {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

interface SelectContentProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;

}

export function SelectContent(...args: any[]): any {
  return <div className="relative">{children}</div>;
}