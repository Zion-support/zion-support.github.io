<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import Link from "next/link";

=======
import React from 'react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string, onClick?: () => void, disabled?: boolean, type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white focus:ring-cyan-500',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white focus:ring-purple-500',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-500',
  };
<<<<<<< HEAD

=======
import React from 'react';
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string, onClick?: () => void, disabled?: boolean, type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children;
  variant = 'primary';
  size = 'md';
  className = '';
  onClick;
  disabled = false;
  type = 'button';
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus: outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900',
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white focus:ring-cyan-500',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white focus:ring-purple-500',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-500',
  };
  
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
<<<<<<< HEAD
<<<<<<< HEAD

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (
        <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000' />
      )}

      {icon && iconPosition === 'left' && (
        <span className='mr-2 transition-transform duration-200 group-hover:scale-110'>
          {icon}
        </span>
      )}
      <span className='relative z-10'>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className='ml-2 transition-transform duration-200 group-hover:scale-110'>
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
  }

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
};

<<<<<<< HEAD
export default Button;
=======
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover: scale-105 active:scale-95',
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default Button;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default Button;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
