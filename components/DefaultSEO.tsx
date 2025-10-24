import React from 'react';

interface DefaultSEOProps {
  className?: string;
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Default SEO component */}
    </div>
  );
};

export default DefaultSEO;