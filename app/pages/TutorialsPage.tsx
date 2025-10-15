import React from 'react';

interface TutorialsPageProps {
  className?: string;
  children?: React.ReactNode;
}

const TutorialsPage: React.FC<TutorialsPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`tutorialspage ${className}`}>
      {children}
    </div>
  );
};

export default TutorialsPage;