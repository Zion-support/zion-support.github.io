<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
export default function UtilsPage() {
=======
import React from 'react';

interface ImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Image({ className = '', children, ...props }: ImageProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
  return (
    <div className={`image-component ${className}`} {...props}>
      {children}
    </div>
  );
}
