<<<<<<< HEAD
import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode, href?: string,
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
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
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = <>{children}</>;

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {content}
    </button>
  );
};

export { Button };
export default Button;
=======
import React from 'react'; interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { children: Reac t.ReactNode; variant?: 'default' | 'outline' | 'ghost' | 'link'; size?: 'sm' | 'md' | 'lg' | 'icon'; asChild?: boolean; className?: string} export function Button(props: any) { const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible: outlin e-none focus-visible: rin g-2 focus-visible: rin g-ring focus-visible: rin g-offset-2 disabled: opacit y-50 disabled: pointe r-events-none'; const variantClasses = { default: 'bg-primary text-primary-foreground hover: b g-primary/90',outline: 'border border-input bg-background hover: b g-accent hover: tex t-accent-foreground',ghost: 'hover: b g-accent hover: tex t-accent-foreground',link: 'text-primary underline-offset-4 hover: underlin e' }; const sizeClasses = { sm: 'h-9 px-3 rounded-md text-sm',md: 'h-10 px-4 py-2',lg: 'h-11 px-8 rounded-md',icon: 'h-10 w-10' }; const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`; if (asChild) { return <span className={classes}>{children}</span>} return ( <button className={classes} {...props} > {children} </button> )} </HTMLButtonElement>
>>>>>>> origin/automation-improvements
