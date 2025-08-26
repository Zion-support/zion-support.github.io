<<<<<<< HEAD:src/components/ui/checkbox.tsx
import React from 'react';

=======
import { cn } from '@/lib/utils';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/checkbox.tsx
interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}
<<<<<<< HEAD:src/components/ui/checkbox.tsx

export function Checkbox({ checked, onChange, label, disabled = false, className = '' }: CheckboxProps) {
=======
export function Checkbox({ checked, onCheckedChange, onChange, className = '', disabled = false }: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
    if (onChange) {
      onChange();
    }
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/checkbox.tsx
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan focus:ring-2"
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
}