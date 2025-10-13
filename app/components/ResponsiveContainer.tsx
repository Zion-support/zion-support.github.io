import React from 'react';

<<<<<<< HEAD
interface ResponsiveContainerProps {
=======
interface ResponsivecontainerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ResponsiveContainer({ className = '', children }: ResponsiveContainerProps) {
=======
export default function Responsivecontainer({ className = '', children, ...props }: ResponsivecontainerProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}