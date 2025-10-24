import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default EnhancedSEO;
=======

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'enhancedseo ' + className}>
      {children || <p>EnhancedSEO component</p>}
    </div>
  );
};

export default EnhancedSEO;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
