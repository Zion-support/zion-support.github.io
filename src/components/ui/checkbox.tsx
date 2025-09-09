import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  id?: string;
  defaultChecked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  checked = false, 
  onChange, 
  className = "",
  id,
  defaultChecked,
  ...props
}) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={(e) => onChange?.(e.target.checked)}
      className={`w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-blue-light rounded focus:ring-zion-cyan focus:ring-2 ${className}`}
      {...props}
    />
  );
};