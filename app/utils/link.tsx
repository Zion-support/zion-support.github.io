import React from 'react';
<<<<<<< HEAD
export const link = () => {
  return null;
};
=======

interface linkProps {
  className?: string;
  children?: React.ReactNode;
}

const link: React.FC<linkProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'link ' + className}>
      {children || <p>link component</p>}
    </div>
  );
};

export default link;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
