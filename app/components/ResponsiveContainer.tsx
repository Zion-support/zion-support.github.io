import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface ResponsiveContainerProps {
=======
interface ResponsivecontainerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface ResponsiveContainerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function ResponsiveContainer({ className = '', children }: ResponsiveContainerProps) {
=======
export default function Responsivecontainer({ className = '', children, ...props }: ResponsivecontainerProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveContainer({ children, className = '', ...props }: ResponsiveContainerProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
export default function ResponsiveContainer({ className = '', children, ...props }: ResponsiveContainerProps) {
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
