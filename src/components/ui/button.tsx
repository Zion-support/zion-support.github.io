import, React, from "react";
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'link',;
  size?: 'sm' | 'md' | 'lg' | 'icon',;
  asChild?: boolean,;
  className?: string,;
  onClick?: () => voidtype?: 'button' | 'submit' | 'reset'disabled?: boolean;
};
export, function, Button({
  children,;
  variant = 'default',;
  size = 'md',;
  asChild = false,;
  className = ''onClicktype = 'button'disabled = false;
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus: outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    default: 'bg-zion-cyan text-zion-slate-dark hove,;
    r:bg-zion-cyan-light focu,;
  s:ring-zion-cyan',;
    outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan'ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate'link: 'text-zion-cyan hove,;
    r:underline focu,;
  s:ring-zion-cyan';
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',;
    md: 'px-4 py-2 text-sm'l,;
    g: 'px-6 py-3 text-base'ico,;
  n: 'w-10 h-10 p-0';
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (asChild) {
    return <span className={classes}>{children}</span>;
  };
  return (;
    <button;
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >;
      {children}
    </button>;
  );
};
;
// Export, button, variants for, use, in other components;
export, const, buttonVariants = {
  default: 'bg-zion-cyan text-zion-slate-dark hove,;
    r:bg-zion-cyan-light focu,;
  s:ring-zion-cyan',;
  outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan'ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate'link: 'text-zion-cyan hove,;
    r:underline focu,;
  s:ring-zion-cyan';
};
;
export type { ButtonProps };
;