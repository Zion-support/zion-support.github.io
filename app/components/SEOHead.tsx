import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = 'Default Title',
  description = 'Default Description',
  keywords = []
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
    </>
  );
};

export default SEOHead;