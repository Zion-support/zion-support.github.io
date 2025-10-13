import React from 'react';

<<<<<<< HEAD
interface ResponsiveTextProps {
=======
interface ResponsivetextProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ResponsiveText({ className = '', children }: ResponsiveTextProps) {
=======
export default function Responsivetext({ className = '', children, ...props }: ResponsivetextProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}