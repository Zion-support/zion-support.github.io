import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
interface ResponsiveTextProps {
=======
interface ResponsivetextProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface ResponsiveTextProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
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
=======
export default function ResponsiveText({ className = '', children, ...props }: ResponsiveTextProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
