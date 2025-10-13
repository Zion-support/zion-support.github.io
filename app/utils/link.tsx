<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
export default function UtilsPage() {
=======
import React from 'react';

interface LinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Link({ className = '', children, ...props }: LinkProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
  return (
    <div className={`link-component ${className}`} {...props}>
      {children}
    </div>
  );
}
