import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

<<<<<<< HEAD
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = ''
}) => {
=======
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className = '' }) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-0bb0
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;