import React from 'react';

interface GenericServicePageProps {
  className?: string;
  children?: React.ReactNode;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default GenericServicePage;
