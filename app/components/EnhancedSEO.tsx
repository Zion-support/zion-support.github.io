import React from 'react';

interface EnhancedSEOProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ children, title, description, keywords }) => {
  return <>{children}</>;
};

export default EnhancedSEO;