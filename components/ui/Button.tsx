<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
=======
import React from 'react';
import Link from 'next/link';
import React from "react";

>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
interface ButtonProps {
<<<<<<< HEAD
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset',
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right',
  style?: React.CSSProperties
}
const Button: React.FC<ButtonProps> = ({

  children
  variant = "primary"
  size = "md"
  className = ""
  onClick
  disabled = false
  type = "button"
  asChild = false
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700"
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300"
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50"
    ghost: "hover:bg-gray-100"
  }
  const sizeClasses = {
    sm: "h-8 px-3 text-xs"
    md: "h-10 px-4 py-2"
    lg: "h-12 px-8 text-lg"
  }
<<<<<<< HEAD

const classes  = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

const content = (<>;
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (<div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000' />;}
      )}{icon && iconPosition === 'left' && (<span className='mr-2 transition-transform duration-200 group-hover:scale-110' />;}
          {icon}
        </span>;
      )}
      <span className='relative z-10' />{children}</span>;
      {icon && iconPosition === 'right' && (<span className='ml-2 transition-transform duration-200 group-hover:scale-110' />;}
          {icon}
        </span>;
      )}
    </>;
  )if (href) {return (<Link href={href} className={classes} style={style} />;
=======
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  style
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors duration-200'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100'
  }
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  const content = <>{children}</>
  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
        {content}
      </Link>;
    )}>;
      {content}
    </button>;
  )}

export default Button;

export { Button }

      </Link>
    )
=======
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: classes
      onClick
      disabled
      type
      ...props
    });
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
<<<<<<< HEAD
  );
<<<<<<< HEAD
};

export default Button;"
=======
  )
}
export default Button
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
}
export { Button }
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
