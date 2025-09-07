
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';

  size?: 'sm' | 'md' | 'lg';}
}
}

export default function Button() {const baseClasses  = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

const variantClasses = {primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';}
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500';,outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500';}
  }

const sizeClasses = {sm: 'px-3 py-2 text-sm';}
  md: 'px-4 py-2 text-base';,lg: 'px-6 py-3 text-lg';}
  }

const classes  = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;if (href) {return (<Link href={href} className={classes} />;
        {children}
      </Link>
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
      </Link>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement />  {variant?:;
    | 'default';
    | 'destructive';
    | 'outline';
    | 'secondary';
    | 'ghost';
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';}
  asChild?: boolean;}
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps />(({className,variant = 'default',size = 'default',asChild = false,...props;}
    },ref;
  ) => {return (<button;
        className={cn('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';,{'bg-primary text-primary-foreground hover: bg-primary/90':;
              variant === 'default','bg-destructive text-destructive-foreground hover: bg-destructive/90':;
              variant === 'destructive','border border-input bg-background hover: bg-accent hover:text-accent-foreground':;
              variant === 'outline','bg-secondary text-secondary-foreground hover: bg-secondary/80':;
              variant === 'secondary','hover: bg-accent hover:text-accent-foreground':;
              variant === 'ghost','text-primary underline-offset-4 hover: underline':;}
              variant === 'link';}
          },{'h-10 px-4 py-2': size === 'default','h-9 rounded-md px-3': size === 'sm','h-11 rounded-md px-8': size === 'lg','h-10 w-10': size === 'icon';}
          },className;
        )}
        ref={ref}
        {...props}
      />
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
pr-12243
import React from "react";

origin/cursor/automate-test-improve-and-merge-code-2533
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;


