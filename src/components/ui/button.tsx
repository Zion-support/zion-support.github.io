import React from "react";

interface ButtonProps {
<<<<<<< HEAD
children: React.ReactNode;
variant?: "default" | "outline" | "ghost" | "link";
size?: "sm" | "md" | "lg" | "icon";
asChild?: boolean;
className?: string;
onClick?: () => void;
type?: "button" | "submit" | "reset";
disabled?: boolean;
}

export function Button({
children,
variant = "default",
size = "md",
asChild = false,
className = "",
onClick,
type = "button",
disabled = false,
...props
}: ButtonProps) {
const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

const variantClasses = {
default: "bg-primary text-primary-foreground hover:bg-primary/90",
outline: "border border-input hover:bg-accent hover:text-accent-foreground",
ghost: "hover:bg-accent hover:text-accent-foreground",
link: "underline-offset-4 hover:underline text-primary"
};

const sizeClasses = {
sm: "h-9 px-3 text-sm",
md: "h-10 py-2 px-4",
lg: "h-11 px-8 text-lg",
icon: "h-10 w-10"
};

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

return (
<button;
type={type}
className={classes}
onClick={onClick}
disabled={disabled}
{...props}
>;
{children}
</button>
);
}
=======
  children: React.ReactNode,
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean,
};
export function Button({ ;
  children; 
  variant = "default", 
  size = "md",
  asChild = false;
  className = "", 
  onClick;
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  
  const variantClasses = {
    default: "bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan",
    outline: "border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan",
    ghost: "text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate",
    link: "text-zion-cyan hover:underline focus:ring-zion-cyan",
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "w-10 h-10 p-0",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asChild) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <button;
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
// Re-export from Button.tsx for backward compatibility;
export { Button, buttonVariants } from "./Button";
export type { ButtonProps } from "./Button";
<//button><///button>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
