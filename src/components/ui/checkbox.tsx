import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onChange?: () => void;
  className?: string;
  disabled?: boolean;
  label?: string;
}

export function Checkbox({ 
  checked, 
  onCheckedChange, 
  onChange, 
  className = '', 
  disabled = false,
  label 
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
    if (onChange) {
      onChange();
    }
  };

  return (
    <label className={cn(
      'flex items-center space-x-2 cursor-pointer',
      disabled && 'opacity-50 cursor-not-allowed',
      className
    )}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          'h-4 w-4 rounded border-zion-blue-light bg-zion-blue-dark text-zion-cyan focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2'
        )}
      />
      {label && <span className="text-sm text-zion-slate-light">{label}</span>}
    </label>
  );
}