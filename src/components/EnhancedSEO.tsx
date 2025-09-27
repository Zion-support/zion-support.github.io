import React from 'react';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords
}) => {
  return (
    <div className="enhanced-seo">
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {keywords && <p>Keywords: {keywords}</p>}
    </div>
  );
};

export default EnhancedSEO;