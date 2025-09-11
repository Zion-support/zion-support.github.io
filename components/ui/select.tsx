import React from 'react';

interface SelectProps {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
}

export function Select({ children, value, onValueChange, defaultValue, className = '' }: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || '');
  
  const handleValueChange = (newValue: string) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            isOpen, 
            setIsOpen, 
            selectedValue, 
            onValueChange: handleValueChange 
          } as any);
        }
        return child;
      })}
    </div>
  );
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  selectedValue?: string;
}

export function SelectTrigger({ children, className = '', isOpen, setIsOpen }: SelectTriggerProps) {
  return (
    <button
      type="button"
      onClick={() => setIsOpen?.(!isOpen)}
      className={`w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-left flex items-center justify-between hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    >
      {children}
    </button>
  );
}

interface SelectValueProps {
  placeholder?: string;
  selectedValue?: string;
}

export function SelectValue({ placeholder, selectedValue }: SelectValueProps) {
  return (
    <span className={selectedValue ? 'text-white' : 'text-gray-400'}>
      {selectedValue || placeholder}
    </span>
  );
}

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onValueChange?: (value: string) => void;
}

export function SelectContent({ children, className = '', isOpen, onValueChange }: SelectContentProps) {
  if (!isOpen) return null;
  
  return (
    <div className={`absolute z-50 w-full mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onValueChange } as any);
        }
        return child;
      })}
    </div>
  );
}

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  onValueChange?: (value: string) => void;
}

export function SelectItem({ children, value, className = '', onValueChange }: SelectItemProps) {
  return (
    <button
      type="button"
      onClick={() => onValueChange?.(value)}
      className={`w-full px-4 py-2 text-left text-white hover:bg-slate-600 first:rounded-t-lg last:rounded-b-lg ${className}`}
    >
      {children}
    </button>
  );
}