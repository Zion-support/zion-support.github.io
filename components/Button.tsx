import React from 'react';
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean
}

export default function Button({ 
  children;
  variant;
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {children}
    </button>
);
}
