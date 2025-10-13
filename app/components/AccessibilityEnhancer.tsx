<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27

=======
import React from 'react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function AccessibilityEnhancer({ className = '', children }: AccessibilityEnhancerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function AccessibilityEnhancer({ className = '', children, ...props }: AccessibilityEnhancerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
