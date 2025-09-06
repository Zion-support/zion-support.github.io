<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  children,
  href,
  on_click,
  type = "button",
  variant = "primary",
  size = "md",
  class_name = "",
  disabled = false,
  style
}) => {
=======
import React from 'react';
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

export function Button({ 
  children, 
  variant = 'default', 
  size = 'default', 
  asChild = false, 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
    ghost: 'hover:bg-gray-100 focus:ring-gray-500',
    link: 'text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500'
  };
  
  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
<<<<<<< HEAD
  )
}
=======
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
import React from "react";
import Link from "next/link";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  style,
}) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  style?: React && React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  style,
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200";
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",
<<<<<<< HEAD
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = <>{children}</>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (href) {;

    return (
      <Link href={href} className={classes} style={style}>;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1

    </button>;
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    </button>;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      style={style}
    >
      {content}
    </button>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default Button;
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export { Button };
<<<<<<< HEAD
export default Button;
<<<<<<< HEAD
=======
      style={style}
    >;
      {content}
    </button>);
}
export { Button }
export default Button;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-54a3
=======
<<<<<<< HEAD
export default Button;
=======
export default Button;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
<<<<<<< HEAD
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
=======
=======
export default Button;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  );
}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
