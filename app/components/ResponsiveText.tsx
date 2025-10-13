import React from 'react';

<<<<<<< HEAD
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
=======
interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveText({ children, className = '', ...props }: ResponsiveTextProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
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
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
