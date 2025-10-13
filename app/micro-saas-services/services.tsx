import React from 'react';

interface ServicesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Services({ className = '', children, ...props }: ServicesProps) {
  return (
<<<<<<< HEAD
    <div className={`services-component ${className}`} {...props}>
      {children}
    </div>
=======
    <div className={className}>
<h2>Services</h2>
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
