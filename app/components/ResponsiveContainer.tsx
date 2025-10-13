<<<<<<< HEAD
interface ResponsiveContainerProps {
}
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
>>>>>>> origin/main
  return (
    <div className={`responsivecontainer-component ${className}`} {...props}>
      {children}
<<<<<<< HEAD
    </div>
=======
    </div>
  );
}
>>>>>>> origin/main
