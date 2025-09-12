import React from 'react';

type BadgeVariant = 'default' | 'outline' | 'secondary' | 'destructive';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const baseClass =
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-zion-purple text-white',
  outline: 'border border-current text-zion-slate-light',
  secondary: 'bg-zion-blue-light/20 text-zion-slate-light',
  destructive: 'bg-red-600 text-white',
};

export function Badge({ variant = 'default', className = '', children, ...rest }: BadgeProps) {
  const classes = `${baseClass} ${variantClasses[variant]} ${className}`.trim();
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}

export default Badge;

