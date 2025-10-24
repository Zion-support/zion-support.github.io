import React from 'react';

interface GenericServicePageProps {
  className?: string;
  children?: React.ReactNode;
}

export const GenericServicePage: React.FC<GenericServicePageProps> = ({ className = '', children }) => {
  return (
    <div className={`genericservicepage ${className}`}>
      {children}
    </div>
  );
};

export default GenericServicePage;