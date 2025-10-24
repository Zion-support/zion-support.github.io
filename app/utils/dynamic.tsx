import React from 'react';
<<<<<<< HEAD
export const dynamic = () => {
  return null;
};
=======

interface dynamicProps {
  className?: string;
  children?: React.ReactNode;
}

const dynamic: React.FC<dynamicProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'dynamic ' + className}>
      {children || <p>dynamic component</p>}
    </div>
  );
};

export default dynamic;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
