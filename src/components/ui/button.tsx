<<<<<<< HEAD

;
import React from 'react';'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';'
  }
  size?: 'default' | 'sm' | 'lg' | 'icon';'
  asChild?: boolean;
}

export function Button() {const baseClasses  = 'inline-flex items-center justify-center font-medium rounded-md transition-colors "focus":outline-none "focus":ring-2 "focus":ring-offset-2 "disabled":opacity-50 "disabled":pointer-events-none';'

}

const variantClasses = {"default": 'bg-blue-600 text-white "hover":bg-blue-700 "focus":ring-blue-500',"destructive": 'bg-red-600 text-white "hover":bg-red-700 "focus":ring-red-500',"outline": 'border border-gray-300 bg-transparent "hover":bg-gray-50 "focus":ring-blue-500',"secondary": 'bg-gray-100 text-gray-900 "hover":bg-gray-200 "focus":ring-gray-500',"ghost": '"hover":bg-gray-100 "focus":ring-gray-500',"link": 'text-blue-600 underline-offset-4 "hover":underline "focus":ring-blue-500';'
  }

const sizeClasses = {"default": 'h-10 px-4 py-2',"sm": 'h-9 px-3 text-sm',"lg": 'h-11 px-8',"icon": 'h-10 w-10';'
  }

const classes  = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;return (<button className={classes} {...props}>;`      {children}
    </button>;
  )}
import Link from 'next/link';'

interface ButtonProps {
  }
  "children": React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";"
  variant?: "primary" | "secondary" | "outline";"
  size?: "sm" | "md" | "lg";"
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const "Button": React.FC<ButtonProps> = ({ children,href,onClick,type = "button",variant = "primary",size = "md",className = "",disabled = false,style;"
   }) => {


}


class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { "hasError": false }}static getDerivedStateFromError(error) {return { "hasError": true 
}componentDidCatch(error, errorInfo) {console.error('Error caught by "boundary":', error, errorInfo)}render() {if (this.state.hasError) ;'
  }
  return <div>Something went wrong.</div>;
    }return this.props.children;
  }
);
Button.displayName = "Button";

interface ButtonProps {
  }
  "children": React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";"
  variant?: "primary" | "secondary" | "outline";"
  size?: "sm" | "md" | "lg";"
  className?: string;
  disabled?: boolean;
  style?: React && React.CSSProperties;

}

const "Button": React.FC<ButtonProps> = ({ children,href,onClick,type = "button",variant = "primary",size = "md",className = "",disabled = false,style;"
   }) => {


}


const baseClasses =;
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";"

const baseClasses  = "px-4 py-2 rounded-md font-medium transition-colors duration-200";"

const sizeClasses = {"sm": "px-3 py-1.5 text-sm","md": "px-4 py-2 text-base","lg": "px-6 py-3 text-lg";"
  }

const variantClasses = {"primary": "bg-blue-600 text-white "hover":bg-blue-700 "disabled":bg-gray-400","secondary": "bg-gray-600 text-white "hover":bg-gray-700 "disabled":bg-gray-400","outline":;"
      "border border-gray-300 text-gray-700 "hover":bg-gray-50 "disabled":bg-gray-100","outline": "border border-gray-300 text-gray-700 "hover":bg-gray-50 "disabled":bg-gray-100"}"

const classes  = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${classNam,;`}`;`
const content  = <>{children}</>;if (href) {return (<Link href={href} className={classes} style={style}>;
        {content}</Link>;
    )const base_classes = "px - 4 py - 2 rounded - md font - medium transition - colors duration - 200";"

const size_classes = {"sm": "px - 3 py - 1.5 text - sm","md": "px - 4 py - 2 text - base","lg": "px - 6 py - 3 text - lg";"
  }

const variant_classes = {"primary": "bg - blue - 600 text - white "hover":bg - blue - 700 "disabled":bg - gray - 400","secondary": "bg - gray - 600 text - white "hover":bg - gray - 700 "disabled":bg - gray - 400","outline": "border border - gray - 300 text - gray - 700 "hover":bg - gray - 50 "disabled":bg - gray - 100";"
  }

const classes = `${base_classes} ${size_classes[size]} ${variant_classes[variant]} ${class_name}`;`
const content = <>{children}</>;
  // Check condition;
if ( {) {$2;
}
    return (<Link href={href} className={classes} style={style}>;
        {content}
      </Link>)if (href) {return (<Link href={href} className={classes} style={style}>;
        {content}
      </Link>;
    )}return (<button;
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}</button>;
      style={style}
    >;
      {content}
    </button>;
  )}
  children,href,onClick,type = "button",variant = "primary",size = "md",className = "",disabled = false,style;"
}) => {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { "hasError": false }}static getDerivedStateFromError(error) {return { "hasError": true 
}componentDidCatch(error, errorInfo) {console.error('Error caught by "boundary":', error, errorInfo)}render() {if (this.state.hasError) ;'
  }
  return <div>Something went wrong.</div>;
    }return this.props.children;
  }

interface ButtonProps {
  }
  "children": React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";"
  variant?: "primary" | "secondary" | "outline";"
  size?: "sm" | "md" | "lg";"
  className?: string;
  disabled?: boolean;
  style?: React && React.CSSProperties;

}

const "Button": React.FC<ButtonProps> = ({ children,href,onClick,type = "button",variant = "primary",size = "md",className = "",disabled = false,style;"
   }) => {


}


const baseClasses =;
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";"

const baseClasses  = "px-4 py-2 rounded-md font-medium transition-colors duration-200";"

const sizeClasses = {"sm": "px-3 py-1.5 text-sm","md": "px-4 py-2 text-base","lg": "px-6 py-3 text-lg";"
  }

const variantClasses = {"primary": "bg-blue-600 text-white "hover":bg-blue-700 "disabled":bg-gray-400","secondary": "bg-gray-600 text-white "hover":bg-gray-700 "disabled":bg-gray-400";"
  }

const classes  = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;`

const content  = <>{children}</>;}return (<button;
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}</button>;
      style={style}
    >;
      {content}
    </button>;
  )}
=======
import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<any, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variantClass =
      variant === 'destructive'
        ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
        : variant === 'outline'
        ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
        : variant === 'secondary'
        ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        : variant === 'ghost'
        ? 'hover:bg-accent hover:text-accent-foreground'
        : variant === 'link'
        ? 'text-primary underline-offset-4 hover:underline'
        : 'bg-primary text-primary-foreground hover:bg-primary/90';

    const sizeClass =
      size === 'sm'
        ? 'h-9 rounded-md px-3'
        : size === 'lg'
        ? 'h-11 rounded-md px-8'
        : size === 'icon'
        ? 'h-10 w-10'
        : 'h-10 px-4 py-2';

<<<<<<< HEAD
import React from "react"
import Link from "next/link"
interface ButtonProps {
  children: React.ReactNode, href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
}
const Button: React.FC<ButtonProps> = ({
  children
  href
  onClick
  type = "button"
  variant = "primary"
  size = "md"
  className = ""
  disabled = false
  style
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200"
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm"
    md: "px-4 py-2 text-base"
    lg: "px-6 py-3 text-lg"
  }
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400"
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100"
  }
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
  const content = <>{children}</>
  if (href) {
    return (
<<<<<<< HEAD
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variantClass,
          sizeClass,
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
<<<<<<< HEAD
=======
=======
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    )
=======
    return (
      <Link href={href} className={classes} style={style}>
        {content}

      </Link>;
    );

  const base_classes = "px - 4 py - 2 rounded - md font - medium transition - colors duration - 200";
  const size_classes = {
    sm: "px - 3 py - 1.5 text - sm",
    md: "px - 4 py - 2 text - base",
    lg: "px - 6 py - 3 text - lg",
  }
  const variant_classes = {
    primary: "bg - blue - 600 text - white hover:bg - blue - 700 disabled:bg - gray - 400",
    secondary: "bg - gray - 600 text - white hover:bg - gray - 700 disabled:bg - gray - 400",
    outline: "border border - gray - 300 text - gray - 700 hover:bg - gray - 50 disabled:bg - gray - 100",
  }
  const classes = `${base_classes} ${size_classes[size]} ${variant_classes[variant]} ${class_name}`;
  const content = <>{children}</>;
  // Check condition
if ( {) {
  $2
}
    return (
      <Link href={href} className={classes} style={style}>;
        {content}
      </Link>);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
<<<<<<< HEAD
      style={style}
    >
      {content}
    </button>
  )
};
export { Button };
import React from 'react';
=======

    </button>;
  );
};
export { Button };
export default Button;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}
<<<<<<< HEAD

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      destructive: 'bg-red-500 text-white hover:bg-red-600',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      ghost: 'hover:bg-gray-100 hover:text-gray-900',
      link: 'text-blue-600 underline-offset-4 hover:underline',
    };
    
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className || ''}`;
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

Button.displayName = 'Button';
export default Button;
export default Button;
=======
export { Button }
<<<<<<< HEAD

export default Button;

export default Button;ursor/automate-test-improve-and-merge-code-646c;
  )}
=======
export default Button;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
