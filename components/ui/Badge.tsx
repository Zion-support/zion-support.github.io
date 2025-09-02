import React from 'react';
import clsx from 'clsx';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';
function getBadgeClasses(variant: BadgeVariant, extra?: string) {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variantClass = {
    default: 'border-transparent bg-blue-600 text-white',
    secondary: 'border-transparent bg-slate-700 text-white',
    destructive: 'border-transparent bg-red-600 text-white',
    outline: 'text-gray-900 border-gray-300',
  }[variant];
  return clsx(base, variantClass, extra);
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  className?: string;
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div className={getBadgeClasses(variant, className)} {...props} />
  );
}

export { Badge };