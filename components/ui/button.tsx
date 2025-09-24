import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = '', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50 ${className}`}
      {...props}
    />
  );
});

// Minimal stub to avoid downstream import errors
export function buttonVariants(): string {
  return '';
}

export default Button;