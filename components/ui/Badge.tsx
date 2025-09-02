import React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  const variants: Record<string, string> = {
    default: 'border-transparent bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'border-transparent bg-slate-700 text-slate-100 hover:bg-slate-600',
    destructive: 'border-transparent bg-red-600 text-white hover:bg-red-700',
    outline: 'text-slate-200 border-slate-600',
  };
  const classes = `${base} ${variants[variant] || variants['default']} ${className}`.trim();
  return <div className={classes} {...props} />;
}

export { Badge };