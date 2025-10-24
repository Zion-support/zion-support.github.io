import React from 'react';

interface GenericServicePageProps {
  className?: string;
  children?: React.ReactNode;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'genericservicepage ' + className}>
      {children || <p>GenericServicePage component</p>}
    </div>
  );
};

export default GenericServicePage;
