import React from 'react';
import { motion } from 'framer-motion';

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export function Switch({
  checked,
  onCheckedChange,
  disabled = false,
  className = '',
  size = 'md',
  label
}: SwitchProps) {
  const sizeClasses = {
    sm: 'w-8 h-4',
    md: 'w-12 h-6',
    lg: 'w-16 h-8'
  };

  const thumbSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-7 h-7'
  };

  const handleToggle = () => {
    if (!disabled) {
      onCheckedChange(!checked);
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleToggle}
        className={`
          relative inline-flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900
          ${sizeClasses[size]}
          ${disabled 
            ? 'bg-slate-600 cursor-not-allowed' 
            : checked 
              ? 'bg-cyan-500 hover:bg-cyan-600' 
              : 'bg-slate-600 hover:bg-slate-500'
          }
        `}
      >
        <motion.div
          className={`
            bg-white rounded-full shadow-md
            ${thumbSizeClasses[size]}
          `}
          initial={false}
          animate={{
            x: checked ? (size === 'sm' ? 16 : size === 'md' ? 24 : 32) : 2
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      {label && (
        <label 
          className={`text-sm font-medium ${
            disabled ? 'text-slate-500' : 'text-slate-300'
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
}