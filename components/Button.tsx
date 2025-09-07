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
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <button;
      type={type}
      className={classes}
      on_click={on_click}
      disabled={disabled}
      {children}
    </button>
);
}
origin/cursor/automate-test-improve-and-merge-code-2533
