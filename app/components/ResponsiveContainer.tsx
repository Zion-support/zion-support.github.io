import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}
<<<<<<< HEAD
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
=======

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children, 
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
  className = ''
}) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
export default ResponsiveContainer;