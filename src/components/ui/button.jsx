<<<<<<< HEAD



=======
import React from 'react';';
export function Button({ children, variant = 'default', size = 'md', asChild = false, className="", onClick,  type = 'button', disabled = false }) {';

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
import React from 'react';
export function Button({ children, variant = 'default', size = 'md', asChild = false, className = '', onClick, type = 'button', disabled = false }) {
<<<<<<< HEAD
=======
import React from 'react';';
export function Button({ children, variant = 'default', size = 'md', asChild = false, className="", onClick,  type = 'button', disabled = false }) {';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 disabled:bg-gray-50',
    ghost: 'hover:bg-gray-100 disabled:bg-transparent',
    link: 'text-blue-600 underline-offset-4 hover:underline disabled:text-gray-400'
  };
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asChild) {
    return React.cloneElement(children, { className: classes });
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );

}
<<<<<<< HEAD


=======

=======
>>>>>>> origin/chore/resolve-conflicts-1756215853
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======

'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
