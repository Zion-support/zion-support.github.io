import React from 'react';
import clsx from 'clsx';

export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
};

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';

export default function EnhancedButton({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
  ...props
}: EnhancedButtonProps) {
  return (
    <button
