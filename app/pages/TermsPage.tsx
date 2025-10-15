import React from 'react';

interface TermsPageProps {
  className?: string;
  children?: React.ReactNode;
}

const TermsPage: React.FC<TermsPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`termspage ${className}`}>
      {children}
    </div>
  );
};

export default TermsPage;