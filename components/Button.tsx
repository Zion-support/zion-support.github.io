
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  variant?: 'primary' | 'secondary' | 'outline';'
  size?: 'sm' | 'md' | 'lg';'
export default function Button(): any ({children,variant = 'primary',size = 'md',className = '',onClick,type = 'button',disabled = false}: ButtonProps) {const baseClasses =;'
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 'focus':outline-none 'focus':ring-2 'focus':ring-offset-2 'focus':ring-offset-slate-900';'
}const variantClasses = {'primary':;
      'bg-gradient-to-r from-cyan-500 to-purple-500 text-white 'hover':from-cyan-600 'hover':to-purple-600 'focus':ring-cyan-500','secondary':;'
      'bg-white/10 text-white border border-white/20 'hover':bg-white/20 'hover':border-white/30 'focus':ring-white/50','outline':;'
      'bg-transparent text-white border border-white/20 'hover':bg-white/10 'hover':border-white/30 'focus':ring-white/50'}const sizeClasses = {'sm': 'px-3 py-1 && 1.5 text-sm','md': 'px-4 py-2 text-base','lg': 'px-6 py-3 text-lg'}const disabledClasses = disabled;'

export default function Button(): any ({children,variant = 'primary',size = 'md',className = '',onClick,type = 'button',disabled = false}: ButtonProps) ;'
  const baseClasses =;
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 'focus':outline-none 'focus':ring-2 'focus':ring-offset-2 'focus':ring-offset-slate-900';'
}

const variantClasses = {'primary':;
      'bg-gradient-to-r from-cyan-500 to-purple-500 text-white 'hover':from-cyan-600 'hover':to-purple-600 'focus':ring-cyan-500','secondary':;'
      'bg-white/10 text-white border border-white/20 'hover':bg-white/20 'hover':border-white/30 'focus':ring-white/50','outline':;'
      'bg-transparent text-white border border-white/20 'hover':bg-white/10 'hover':border-white/30 'focus':ring-white/50'}'

const sizeClasses = {'sm': 'px-3 py-1 && 1.5 text-sm','md': 'px-4 py-2 text-base','lg': 'px-6 py-3 text-lg'}'
;
  const disabledClasses = disabled;
    ? 'opacity-50 cursor-not-allowed';'
    : ''hover':scale-105 transform';'

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;`      {children}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
return (<button type= {
  type 
}className= {
  classes 
}onClick= {
  onClick 
}disabled= {
  disabled 
}> {
  children 
}</button>) 
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
export default function Button(): any ({children,variant = 'primary',size = 'md',className = '',onClick,type = 'button',disabled = false,}: ButtonProps) {const baseClasses =;}
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';}
}const variantClasses = {primary:;
      'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 focus:ring-cyan-500',secondary:;}
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus:ring-white/50',outline:;}
      'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/50',}const sizeClasses = {sm: 'px-3 py-1 && 1.5 text-sm',}
  md: 'px-4 py-2 text-base',lg: 'px-6 py-3 text-lg',}const disabledClasses = disabled;

export default function Button(): any ({children,variant = 'primary',size = 'md',className = '',onClick,type = 'button',disabled = false,}: ButtonProps) ;
  const baseClasses =;
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
}

const variantClasses = {primary:;
      'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 focus:ring-cyan-500',secondary:;}
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus:ring-white/50',outline:;}
      'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/50',}

<<<<<<< HEAD
const sizeClasses = {sm: 'px-3 py-1 && 1.5 text-sm',}
  md: 'px-4 py-2 text-base',lg: 'px-6 py-3 text-lg'}
=======
  const variantClasses = {;
    primary:;
      'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 focus:ring-cyan-500',;
    secondary:;
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus:ring-white/50',;
    outline:;
      'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/50',;
  };
  const sizeClasses = {;
    sm: 'px-3 py-1 && 1.5 text-sm',;
    md: 'px-4 py-2 text-base',;
    lg: 'px-6 py-3 text-lg',;
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const disabledClasses = disabled;
    ? 'opacity-50 cursor-not-allowed';
    : 'hover:scale-105 transform';

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
      {children}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    </button>;
  )const classes  = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;class_name?: string;`  on_click?: () => void;
  type?: 'button' | 'submit' | 'reset';'
  disabled?: boolean;
export default /**;
 * Button - Function description;
 */;
function Button() {const base_classes =;
<<<<<<< HEAD
    'inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 'focus':outline - none 'focus':ring - 2 'focus':ring - offset - 2 'focus':ring - offset - slate - 900';const variant_classes = {'primary':;'
      'bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white 'hover':from - cyan - 600 'hover':to - purple - 600 'focus':ring - cyan - 500','secondary':;'
      'bg - white / 10 text - white border border - white / 20 'hover':bg - white / 20 'hover':border - white / 30 'focus':ring - white / 50','outline':;'
      'bg - transparent text - white border border - white / 20 'hover':bg - white / 10 'hover':border - white / 30 'focus':ring - white / 50'}const size_classes = {'sm': 'px - 3 py - 1.5 text - sm','md': 'px - 4 py - 2 text - base','lg': 'px - 6 py - 3 text - lg'}const disabled_classes = disabled;'
    ? 'opacity - 50 cursor - not - allowed';'
    : ''hover':scale - 105 transform';const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;>;`      {children}
    </button>)}  const disabled_classes = disabled ? 'opacity - 50 cursor - not - allowed' : ''hover': scale - 105 transform',const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;import React from 'react';'interface ButtonProps  {variant?: 'primary' | 'secondary' | 'outline';'
    'inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 'focus':outline - none 'focus':ring - 2 'focus':ring - offset - 2 'focus':ring - offset - slate - 900';'
=======
<<<<<<< HEAD
    'inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 "focus":outline - none "focus":ring - 2 "focus":ring - offset - 2 "focus":ring - offset - slate - 900';const variant_classes = {"primary":;'
      'bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white "hover":from - cyan - 600 "hover":to - purple - 600 "focus":ring - cyan - 500',"secondary":;'
      'bg - white / 10 text - white border border - white / 20 "hover":bg - white / 20 "hover":border - white / 30 "focus":ring - white / 50',"outline":;'
      'bg - transparent text - white border border - white / 20 "hover":bg - white / 10 "hover":border - white / 30 "focus":ring - white / 50'}const size_classes = {"sm": 'px - 3 py - 1.5 text - sm',"md": 'px - 4 py - 2 text - base',"lg": 'px - 6 py - 3 text - lg'}const disabled_classes = disabled;'
    ? 'opacity - 50 cursor - not - allowed';'
    : '"hover":scale - 105 transform';const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;>;`      {children}
    </button>)}  const disabled_classes = disabled ? 'opacity - 50 cursor - not - allowed' : '"hover": scale - 105 transform',const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;import React from 'react';'interface ButtonProps  {variant?: 'primary' | 'secondary' | 'outline';'
    'inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 "focus":outline - none "focus":ring - 2 "focus":ring - offset - 2 "focus":ring - offset - slate - 900';'
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

}

const variant_classes = {'primary':;
      'bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white 'hover':from - cyan - 600 'hover':to - purple - 600 'focus':ring - cyan - 500','secondary':;'
      'bg - white / 10 text - white border border - white / 20 'hover':bg - white / 20 'hover':border - white / 30 'focus':ring - white / 50','outline':;'
      'bg - transparent text - white border border - white / 20 'hover':bg - white / 10 'hover':border - white / 30 'focus':ring - white / 50'}'

const size_classes = {'sm': 'px - 3 py - 1.5 text - sm','md': 'px - 4 py - 2 text - base','lg': 'px - 6 py - 3 text - lg'}'
;
  const disabled_classes = disabled;
    ? 'opacity - 50 cursor - not - allowed';'
    : ''hover':scale - 105 transform';'

const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`>;`
      {children}
    </button>)}

const disabled_classes = disabled ? 'opacity - 50 cursor - not - allowed' : ''hover': scale - 105 transform';'
  const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;import React from 'react';'

interface ButtonProps {
  }
  variant?: 'primary' | 'secondary' | 'outline';'
  size?: 'sm' | 'md' | 'lg';'
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset',disabled?: boolean;'
}export default function Button({children;
  variant;return (<button;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
export default function Button(): any ({children,variant = 'primary',size = 'md',className = '',onClick,type = 'button',disabled = false,}: ButtonProps) {const baseClasses =;
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  variant?: primary' | 'secondary | outline';
  size?: 'sm | md' | 'lg;
export default function Button(): any ({children,variant = primary',size = 'md,className = ',onClick,type = 'button,disabled = false}: ButtonProps) {const baseClasses =;
    inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}const variantClasses = {primary:;
      'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 focus:ring-cyan-500',secondary:;
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus:ring-white/50',outline:;
      'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/50',}const sizeClasses = {sm: 'px-3 py-1 && 1.5 text-sm',md: 'px-4 py-2 text-base',lg: 'px-6 py-3 text-lg',}const disabledClasses = disabled;
    ? 'opacity-50 cursor-not-allowed';
    : 'hover:scale-105 transform';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
      {children}
    </button>;
  )const classes  = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;class_name?: string;
  on_click?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
export default /**;
 * Button - Function description;
 */;
function Button() {const base_classes =;
    'inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - offset - slate - 900';const variant_classes = {primary:;
      'bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white hover:from - cyan - 600 hover:to - purple - 600 focus:ring - cyan - 500',secondary:;
      'bg - white / 10 text - white border border - white / 20 hover:bg - white / 20 hover:border - white / 30 focus:ring - white / 50',outline:;
      'bg - transparent text - white border border - white / 20 hover:bg - white / 10 hover:border - white / 30 focus:ring - white / 50',}const size_classes = {sm: 'px - 3 py - 1.5 text - sm',md: 'px - 4 py - 2 text - base',lg: 'px - 6 py - 3 text - lg',}const disabled_classes = disabled;
    ? 'opacity - 50 cursor - not - allowed';
    : 'hover:scale - 105 transform';const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;>;
      {children}
    </button>)}  const disabled_classes = disabled ? 'opacity - 50 cursor - not - allowed' : 'hover: scale - 105 transform',const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;import React from 'react';
interface ButtonProps  {variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset',disabled?: boolean;
}export default function Button({children;
  variant;return (<button;
import React from 'react';
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

<<<<<<< HEAD
export default function Button({children;
  }
  variant;return (<button;
=======
<<<<<<< HEAD
export default function Button({children;
  }
  variant;return (<button;
=======

=======
    'inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - offset - slate - 900';const variant_classes = {primary:;
      'bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white hover:from - cyan - 600 hover:to - purple - 600 focus:ring - cyan - 500',secondary:;}
      'bg - white / 10 text - white border border - white / 20 hover:bg - white / 20 hover:border - white / 30 focus:ring - white / 50',outline:;}
      'bg - transparent text - white border border - white / 20 hover:bg - white / 10 hover:border - white / 30 focus:ring - white / 50',}const size_classes = {sm: 'px - 3 py - 1.5 text - sm',}
  md: 'px - 4 py - 2 text - base',lg: 'px - 6 py - 3 text - lg',}const disabled_classes = disabled;
    ? 'opacity - 50 cursor - not - allowed';
    : 'hover:scale - 105 transform';const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;>;
      {children}
    </button>)}  const disabled_classes = disabled ? 'opacity - 50 cursor - not - allowed' : 'hover: scale - 105 transform',const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;import React from 'react';
interface ButtonProps  {variant?: 'primary' | 'secondary' | 'outline';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  class_name?: string;
  on_click?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
export default /**
 * Button - Function description
 */
function Button() {
  const base_classes =;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    'inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - offset - slate - 900';

const variant_classes = {primary:;
      'bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white hover:from - cyan - 600 hover:to - purple - 600 focus:ring - cyan - 500',secondary:;}
      'bg - white / 10 text - white border border - white / 20 hover:bg - white / 20 hover:border - white / 30 focus:ring - white / 50',outline:;}
      'bg - transparent text - white border border - white / 20 hover:bg - white / 10 hover:border - white / 30 focus:ring - white / 50',}

const size_classes = {sm: 'px - 3 py - 1.5 text - sm',}
  md: 'px - 4 py - 2 text - base',lg: 'px - 6 py - 3 text - lg'}
  const disabled_classes = disabled;
    ? 'opacity - 50 cursor - not - allowed';
    : 'hover:scale - 105 transform';

const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`>

      {children}
<<<<<<< HEAD
    </button>)}

const disabled_classes = disabled ? 'opacity - 50 cursor - not - allowed' : 'hover: scale - 105 transform';
  const classes  = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;}
  type?: 'button' | 'submit' | 'reset',disabled?: boolean;}
}export default function Button({children;}
}
}

export default function Button({children;}
  variant;return (<button;}
>>>>>>> origin/chore/fix-lint-and-merge
=======
    </button>);
}  const disabled_classes = disabled ? 'opacity - 50 cursor - not - allowed' : 'hover: scale - 105 transform',
  const classes = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;
;
  return (
    <button;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>;
)}>;
      {children}
    </button>;
  )</button>)return (<button;
      type={_type}
      className={_classes}
      onClick={_onClick}
      disabled={_disabled}
    >;
      {_children}
    </button>;
  )}</button>)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </button>
  )
}
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  )}</button>)}
    </button>
  )
}
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </button>);
  
  return (
    <button
      type={_type}
      className={_classes}
      onClick={_onClick}
      disabled={_disabled}
    >
      {_children}
    </button>
  )

}

<<<<<<< HEAD

interface ButtonProps {

  children: React.ReactNode;  variant?: 'primary' | 'secondary' | 'outline';interface ButtonProps {
  children: React.ReactNode

  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;

  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
export default function Button({
  children
  variant = 'primary'
  size = 'md'
  className = ''
  onClick
  type = 'button'
  disabled = false
}: ButtonProps) {
  const baseClasses =;
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 focus:ring-cyan-500'
    secondary:
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 focus:ring-white/50'
    outline:
      'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/30 focus:ring-white/50'
  }
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm'
    md: 'px-4 py-2 text-base'
    lg: 'px-6 py-3 text-lg'
  }
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:scale-105 transform';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
      >
      {children}
    </button>
  );
}  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover: scale-105 transform'
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {children}
    </button>
);
}

}

    >
      {children}
    </button>
  );
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
