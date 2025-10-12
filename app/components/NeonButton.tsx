import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false
}) => {
  const variantClasses = {
    primary: 'bg-cyan-500 text-white shadow-cyan-500/50 hover:bg-cyan-600',
    secondary: 'bg-purple-500 text-white shadow-purple-500/50 hover:bg-purple-600',
    success: 'bg-green-500 text-white shadow-green-500/50 hover:bg-green-600',
    warning: 'bg-yellow-500 text-white shadow-yellow-500/50 hover:bg-yellow-600',
    danger: 'bg-red-500 text-white shadow-red-500/50 hover:bg-red-600'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        font-semibold rounded-lg transition-all duration-300
        shadow-lg hover:shadow-xl
        disabled:hover:shadow-lg
        ${className}
      `}
      style={{
        boxShadow: `0 0 20px ${variant === 'primary' ? '#06b6d4' : variant === 'secondary' ? '#8b5cf6' : variant === 'success' ? '#10b981' : variant === 'warning' ? '#f59e0b' : '#ef4444'}40`
      }}
    >
      {children}
    </button>
  );
};

export default NeonButton;