import React from 'react';

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
