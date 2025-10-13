import React from 'react';

interface ErrorhandlerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorhandler({ className = '', children, ...props }: ErrorhandlerProps) {
  return (
<<<<<<< HEAD
    <div className={`errorhandler-component ${className}`} {...props}>
      {children}
    </div>
=======
    <div className={className}>
<h2>Errorhandlerx</h2>
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
