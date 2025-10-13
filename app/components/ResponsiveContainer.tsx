import React from 'react';
import ResponsiveContainer from "../components/ResponsiveContainer";

interface ResponsivecontainerProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Responsivecontainer({ className = '', children, ...props }: ResponsivecontainerProps) {
=======
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
//   children, 
  className = '' 
}) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  return (
    <div className={`responsivecontainer-component ${className}`} {...props}>
      {children}
</div>
  );
}
