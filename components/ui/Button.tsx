import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'solid' | 'outline'; };

export default function Button({ variant = 'solid', className = '', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2';
  const styles = variant === 'outline'
    ? 'border border-slate-600 text-slate-200 hover:bg-slate-800'
    : 'bg-blue-600 text-white hover:bg-blue-700';
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}