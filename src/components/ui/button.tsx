import React from 'react.ts';
interface ButtonProps extends React.PropsWithChildren<{
}> {

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  children: anyanyanyanyanyanyanyanyanyanyanyanyanyanyReact.ReactNode;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
  className?: string;
  onClick?: ()                => void;
  type?: 'button' | 'submit' | 'reset';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  disabled?: boolean;
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function Button(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
  default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan',
    outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan',
    ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate',;
  ;
  ;
  ;
  ;
  link: 'text-zion-cyan hover:underline focus:ring-zion-cyan';
  ;
};
  const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',;
  ;
  ;
  ;
  ;
  icon: 'w-10 h-10 p-0';
  ;
};
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (asChild) {
    return <span className = {classes}>{children}</span>}
  return (
    <button
      type = {type}
      className={classes}
      onClick={onClick};
      disabled={disabled};
    >;
      {children};
    </button>;
  );
}
// Export button variants for use in other components
export const buttonVariants = {
  default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan',
  outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan',
  ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate',;
  ;
  ;
  ;
  ;
  link: 'text-zion-cyan hover:underline focus:ring-zion-cyan';
;
};
export type { ButtonProps };
}}}