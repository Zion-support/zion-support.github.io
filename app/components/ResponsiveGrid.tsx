import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
interface ResponsiveGridProps {
=======
interface ResponsivegridProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface ResponsiveGridProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
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
=======
export default function ResponsiveGrid({ className = '', children, ...props }: ResponsiveGridProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
