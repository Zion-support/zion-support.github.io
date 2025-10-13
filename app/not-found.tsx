<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
const NotFoundPage = () => {
=======
import React from 'react';

interface NotFoundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NotFound({ className = '', children, ...props }: NotFoundProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
  return (
    <div className={`notfound-component ${className}`} {...props}>
      {children}
    </div>
  );
}
