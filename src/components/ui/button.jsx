import React from 'react';
<<<<<<< HEAD
export function Button({ children, variant = 'default', size = 'md', asChild = false, className = '', onClick, type = 'button', disabled = false }) {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
        default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan',
        outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan',
        ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate',
        link: 'text-zion-cyan hover:underline focus:ring-zion-cyan'
    };
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        icon: 'w-10 h-10 p-0'
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    if (asChild) {
        return <span className={classes}>{children}</span>;
    }
    return (<button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>);
}
=======

export function Button({ children, variant = 'default', className = '', ...props }) {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    default: "bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light focus:ring-zion-cyan",
    outline: "border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white focus:ring-zion-cyan",
    ghost: "text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50 focus:ring-zion-cyan",
    link: "text-zion-cyan hover:text-zion-cyan-light underline-offset-4 hover:underline focus:ring-zion-cyan"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
>>>>>>> cursor/website-audit-and-enhancement-1eed
