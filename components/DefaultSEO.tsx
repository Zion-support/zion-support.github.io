import React from 'react';

interface DefaultSEOProps {
  className?: string;
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Default SEO component content */}
    </div>
  );
};

export default DefaultSEO;