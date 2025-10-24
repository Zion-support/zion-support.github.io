import React from 'react';

interface DefaultSEOProps {
  className?: string;
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>DefaultSEO</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default DefaultSEO;