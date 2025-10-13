import React from 'react';

<<<<<<< HEAD
interface page_cleanProps {
  className?: string;
  children?: React.ReactNode;
}

export default function page_clean({ className = '', children }: page_cleanProps) {
=======
export default function PageClean() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}