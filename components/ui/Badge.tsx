import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
};

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-blue-100 text-blue-800 border-transparent',
  secondary: 'bg-gray-100 text-gray-800 border-transparent',
  destructive: 'bg-red-100 text-red-800 border-transparent',
  outline: 'bg-transparent text-gray-900 border-gray-300',
};

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold';
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  return <div className={classes} {...props} />;
}

export default Badge;