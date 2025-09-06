<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
 export function Button({ children, variant = 'default', size = 'md', asChild = false, className = '', onClick, type = 'button', disabled = false }) { const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus: outline-none focus:ring-2 focus:ring-offset-2' const variantClasses = { default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan', outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan', ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-cyan', link: 'text-zion-cyan hover:underline focus:ring-zion-cyan' } const sizeClasses = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base', icon: 'w-10 h-10 p-0' } const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}` if (asChild) { return <span className={classes}" >{children}</span> } return ( <button type={type} className={classes} onClick={onClick} disabled={disabled}" > {children} </button> ) }''`
"`"
 export function Button({ children, variant = 'default', size = 'md', asChild = false, className = '', onClick, type = 'button', disabled = false }) { const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus: outline-none focus:ring-2 focus:ring-offset-2' const variantClasses = { default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan', outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan', ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-cyan', link: 'text-zion-cyan hover:underline focus:ring-zion-cyan' } const sizeClasses = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base', icon: 'w-10 h-10 p-0' } const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}` if (asChild) { return <span className={classes}>{children}</span> } return ( <button type={type} className={classes} onClick={onClick} disabled={disabled}> {children} </button> ) }''`
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
import React from 'react';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export function Button({ 
  children, 
  variant = 'default', 
  size = 'md', 
  asChild = false, 
  className = "", 
  onClick, 
  type = 'button', 
  disabled = false 
}) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
import React from 'react';';
export function Button({ children, variant = 'default', size = 'md', asChild = false, className="", onClick,  type = 'button', disabled = false }) {';
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
ursor/integrate-build-improve-and-re-verify-8f7d
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
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
  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======

'
=======
<<<<<<< HEAD
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1

}



}

'
origin/chore/resolve-conflicts-1756215853

'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d


'

'
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
