import React from 'react';
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline',
  size?: 'sm' | 'md' | 'lg',
  className?: string,
  onClick?: () => void,
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean
}

export default function Button({ 
  children,
  variant = $2;
  size = $2;
  className = $2;
  onClick, 
  type = $2;
  disabled = $2;
  const variantClasses = $2;
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus:ring-white/50',
    outline: 'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/50'
  },
  
  const sizeClasses = $2;
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  },
  
  const disabledClasses = $2;
  const classes = $2;
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}