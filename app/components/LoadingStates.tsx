<<<<<<< HEAD
export const LoadingPage: React.FC = () => {
=======
import React from 'react';

interface LoadingstatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loadingstates({ className = '', children, ...props }: LoadingstatesProps) {
>>>>>>> origin/main
  return (
    <div className={`loadingstates-component ${className}`} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> origin/main
