
 export function Button({ children, variant = 'default', size = 'md', asChild = false, className = '', onClick, type = 'button', disabled = false }) { const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus: outline-none focus:ring-2 focus:ring-offset-2' const variantClasses = { default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan', outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan', ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-cyan', link: 'text-zion-cyan hover:underline focus:ring-zion-cyan' } const sizeClasses = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base', icon: 'w-10 h-10 p-0' } const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}` if (asChild) { return <span className={classes}" >{children}</span> } return ( <button type={type} className={classes} onClick={onClick} disabled={disabled}" > {children} </button> ) }''`
"`"
 export function Button({ children, variant = 'default', size = 'md', asChild = false, className = '', onClick, type = 'button', disabled = false }) { const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus: outline-none focus:ring-2 focus:ring-offset-2' const variantClasses = { default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan', outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan', ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-cyan', link: 'text-zion-cyan hover:underline focus:ring-zion-cyan' } const sizeClasses = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base', icon: 'w-10 h-10 p-0' } const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}` if (asChild) { return <span className={classes}>{children}</span> } return ( <button type={type} className={classes} onClick={onClick} disabled={disabled}> {children} </button> ) }''`
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

pr-12243
import React from 'react';
export function Button({
  children,
  variant = 'default', '
  size = 'md', '
  asChild = false,
  className = "", "
  onClick,
  type = 'button', '
  disabled = false
}) {




main
pr-12243
import React from 'react';';
export function Button({ children, variant = 'default', size = 'md', asChild = false, className="", onClick,  type = 'button', disabled = false }) {';
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';',
    const variantClasses = {
        default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan','
        outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan','
        ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate','
        link: 'text-zion-cyan hover:underline focus:ring-zion-cyan''
    };
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm','
        md: 'px-4 py-2 text-sm','
        lg: 'px-6 py-3 text-base','
        icon: 'w-10 h-10 p-0''
    };,
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;`,
        default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan',
        outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan',
        ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate',
        link: 'text-zion-cyan hover:underline focus:ring-zion-cyan'

export function Button({ 
  children, 
  variant = 'default',''
  size = 'md','
  asChild = false, '
  className = "","
  onClick, "
  type = 'button','
  disabled = false;)
}) {'
import React from 'react';';''
export function Button({ children, variant = 'default', size = 'md', asChild = false, className="", onClick,  type = 'button', disabled = false }) {';''
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';'
    const variantClasses = {'
        default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan',''
        outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan',''
        ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate',''
        link: 'text-zion-cyan hover:underline focus:ring-zion-cyan''
pr-12325
    };
    const sizeClasses = {'
        sm: 'px-3 py-1.5 text-sm',''
        md: 'px-4 py-2 text-sm',''
        lg: 'px-6 py-3 text-base',''
        icon: 'w-10 h-10 p-0''
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    if (asChild) {
        return <span className={classes}>{children}</span>;
    return (<button type={type} className={classes} onClick={onClick} disabled={disabled}>
</button>)
    </button>);
}




}
ursor/integrate-build-improve-and-re-verify-8f7d
}
origin/cursor/expand-services-advertise-and-build-project-c28b
main
pr-12243
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';',

  const variantClasses = {
    default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan','
    outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan','
    ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate','
    link: 'text-zion-cyan hover:underline focus:ring-zion-cyan''
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm','
    md: 'px-4 py-2 text-sm','
    lg: 'px-6 py-3 text-base','
    icon: 'w-10 h-10 p-0''
  };,
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;`,
  if (asChild) {
  }
  return (

'
    <button
    <button;
pr-12325
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

main
pr-12243

}



}

}
''
origin/chore/resolve-conflicts-1756215853
''
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d


}



''
''
}
)

'
}
}
}
origin/cursor/expand-services-advertise-and-build-project-c28b
main
pr-12243
</button>
    </button>'
pr-12325
