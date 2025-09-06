import React from 'react';
import clsx from 'clsx';
export type EnhancedButtonProps = any;
  ...props
}: EnhancedButtonProps) {
  return (
    <button
      className={clsx(
        baseStyles
        sizeStyles[size]
        variantStyles[variant]
        fullWidth && "w-full"
        className
      )}
      {...props}
    />
  );
}
