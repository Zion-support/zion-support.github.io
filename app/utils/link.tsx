import React from 'react';

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
