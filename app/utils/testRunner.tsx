import React from 'react';

interface TestrunnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Testrunner({ className = '', children, ...props }: TestrunnerProps) {
  return (
<<<<<<< HEAD
    <div className={`testrunner-component ${className}`} {...props}>
      {children}
    </div>
=======
    <div className={className}>
<h2>Testrunnerx</h2>
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
