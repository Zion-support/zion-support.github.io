<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';



=======
import React from 'react';
<<<<<<< HEAD
;
interface ButtonProps {
  children: React.ReactNode;  variant?: 'primary' | 'secondary' | 'outline';interface ButtonProps {
  children: React.ReactNode
interface ButtonProps {;
  children: React && React.ReactNode;  variant?: 'primary' | 'secondary' | 'outline';interface ButtonProps {;
  children: React && React.ReactNode,;
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
export default function Button(): any ({;
  children,;
  variant = 'primary',;
  size = 'md',;
  className = '',;
  onClick,;
  type = 'button',;
  disabled = false,;
}: ButtonProps) {;
  const baseClasses =;
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  const disabledClasses = disabled;
    ? 'opacity-50 cursor-not-allowed';
    : 'hover:scale-105 transform';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
<<<<<<< HEAD


      >;

      {children}
    </button>;
  );

}  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover: scale-105 transform',;


=======
      >;
      {children}
    </button>;
  );
}  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover: scale-105 transform',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    'inline - flex items - center justify - center font - semibold rounded - lg transition - all duration - 200 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - offset - slate - 900';
;
  const variant_classes = {
    primary:;
      'bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white hover:from - cyan - 600 hover:to - purple - 600 focus:ring - cyan - 500',
    secondary:;
      'bg - white / 10 text - white border border - white / 20 hover:bg - white / 20 hover:border - white / 30 focus:ring - white / 50',
    outline:;
      'bg - transparent text - white border border - white / 20 hover:bg - white / 10 hover:border - white / 30 focus:ring - white / 50',
  }
;
  const size_classes = {
    sm: 'px - 3 py - 1.5 text - sm',
    md: 'px - 4 py - 2 text - base',
    lg: 'px - 6 py - 3 text - lg',
  }
;
  const disabled_classes = disabled;
    ? 'opacity - 50 cursor - not - allowed';
    : 'hover:scale - 105 transform';
;
  const classes = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;
;
      >;
      {children}
    </button>);
}  const disabled_classes = disabled ? 'opacity - 50 cursor - not - allowed' : 'hover: scale - 105 transform',
  const classes = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${disabled_classes} ${class_name}`;
;
  return (
    <button;
      type={type}
      className={classes}
      on_click={on_click}
      disabled={disabled}
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </button>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    >
      {children}
    </button>
  );
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
<<<<<<< HEAD
      {children}
    </button>
);
}
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    >
      {children}
    </button>
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
