import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className, children }) => {
  return (
    <div className={className}>
=======

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
      {children}
    </div>
  );
};
<<<<<<< HEAD
export default EnhancedSEO;
=======

export default EnhancedSEO;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
