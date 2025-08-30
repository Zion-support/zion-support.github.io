import React from 'react.ts';

interface CheckboxProps extends React.PropsWithChildren<{}> {

  checked: anyanyboolean;
  onChange: (checked: boolean)   => void;
  label?: string;
  disabled?: boolean;
  className?: string;

}

export function Checkbox(...args: any[]): any {
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