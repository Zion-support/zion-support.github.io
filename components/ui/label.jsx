import React from 'react';

// LabelProps interface for TypeScript compatibility
// interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
//   children: React.ReactNode;
// }

export function Label({ children, className = '', ...props }) {
  return (
    <label className={`text-sm font-medium text-gray-700 ${className}`} {...props}>
      {children}
    </label>
  );
}