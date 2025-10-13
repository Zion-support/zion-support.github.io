<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
interface ResponsiveContainerProps {
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
}

<<<<<<< HEAD
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
=======
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  className = '' 
}) => {
=======

import React from 'react';

interface ResponsivecontainerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivecontainer({ className = '', children, ...props }: ResponsivecontainerProps) {

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    </div>
  );
};

export default ResponsiveContainer;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  return (;
    <div className={`responsivecontainer-component ${className}`} {...props}></div>;
      {children}
;
</div>;
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
