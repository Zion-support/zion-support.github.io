import React from 'react';
import { motion } from 'framer-motion';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset',icon?: React.ReactNode;'
  iconPosition?: 'left' | 'right',style?: React.CSSProperties;'
}

const "Button": React.FC<ButtonProps> = ({"primary":;
      'bg-blue-600 "hover":bg-blue-700 text-white shadow-lg "hover":shadow-xl "hover":-translate-y-0.5 border-0',"secondary":;'
      'bg-gray-800 "hover":bg-gray-700 text-white border border-gray-600 "hover":border-gray-500 "hover":shadow-lg "hover":-translate-y-0.5',"ghost":;'
      'bg-transparent "hover":bg-white/5 text-gray-300 "hover":text-white "hover":shadow-md "hover":-translate-y-0.5',"outline":;'
      'bg-transparent border border-white/20 text-white "hover":bg-white/5 "hover":border-white/40 "hover":shadow-md "hover":-translate-y-0.5';'
  }

const sizeClasses = {"sm": 'px-4 py-2 text-sm',"md": 'px-6 py-3 text-base',"lg": 'px-8 py-4 text-lg';'
  }

const classes  = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;`

const content = (<>;
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (<div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-"hover":translate-x-full transition-transform duration-1000' />;'
      )}{icon && iconPosition === 'left' && (<span className='mr-2 transition-transform duration-200 group-"hover":scale-110'>;'
          {icon}
        </span>;
      )}
      <span className='relative z-10'>{children}</span>;'
      {icon && iconPosition === 'right' && (<span className='ml-2 transition-transform duration-200 group-"hover":scale-110'>;'
          {icon}
        </span>;
      )}
    </>;
  )if (href) {return (<Link href={href} className={classes} style={style}>;
        {content}
      </Link>;
    )}>;
      {content}
    </button>;
  )}
export default Button;
export { Button }

      </Link>
    );
  }
  
return (;
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

import React from "react";


import React from "react";


import React from 'react';
import Link from 'next/link';
import React from 'react'
import Link from 'next/link'
import React from "react";

interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (
        <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000' />
      )}

      {icon && iconPosition === 'left' && (
        <span className='mr-2 transition-transform duration-200 group-hover:scale-110'>
          {icon}
        </span>
      )}
    </>;
  )if (href) {return (<Link href={href} className={classes} style={style} />;
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
    )
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: classes
      onClick
      disabled
      type
      ...props
const Button: React.FC<ButtonProps> = ({;
  children,;
  variant = "primary",;
  size = "md",;
  className = "",;
  onClick,;
  disabled = false,;
  type = "button",;
  asChild = false,;
  ...props;
}) => {;
  const baseClasses =;
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses = {;
    primary: "bg-blue-600 text-white hover:bg-blue-700",;
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",;
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",;
    ghost: "hover:bg-gray-100",;
  };
  const sizeClasses = {;
    sm: "h-8 px-3 text-xs",;
    md: "h-10 px-4 py-2",;
    lg: "h-12 px-8 text-lg",;
  };
  class_name?: string;
  on_click?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
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
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white focus:ring-cyan-500',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white focus:ring-purple-500',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-500',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
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
export default Button;"