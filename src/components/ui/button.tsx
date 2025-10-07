import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  variant = 'primary',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700';
      case 'secondary':
        return 'bg-gray-600 text-white hover:bg-gray-700';
      case 'outline':
        return 'border border-gray-300 text-gray-700 hover:bg-gray-50';
      case 'ghost':
        return 'text-gray-700 hover:bg-gray-100';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${getVariantClasses()} ${className}`}
    >
      {children}
    </button>
  );
};