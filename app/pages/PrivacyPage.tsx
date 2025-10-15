import React from 'react';

interface PrivacyPageProps {
  className?: string;
  children?: React.ReactNode;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`privacypage ${className}`}>
      {children}
    </div>
  );
};

export default PrivacyPage;