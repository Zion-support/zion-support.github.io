import React from 'react';

<<<<<<< HEAD
interface ResponsiveGridProps {
=======
interface ResponsivegridProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ResponsiveGrid({ className = '', children }: ResponsiveGridProps) {
=======
export default function Responsivegrid({ className = '', children, ...props }: ResponsivegridProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}