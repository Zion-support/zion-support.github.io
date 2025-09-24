import React, { forwardRef } from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { className = '', ...props },
  ref
) {
  return (
    <label
      ref={ref}
      className={`text-sm font-medium leading-none ${className}`}
      {...props}
    />
  );
});

export default Label;