import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = 'Default Title',
  description = 'Default Description',
  children 
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </>
  );
};

export default SEOHead;