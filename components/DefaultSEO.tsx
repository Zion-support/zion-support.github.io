import React from 'react';

interface DefaultSEOProps {
  className?: string;
}

const DefaultSEO: 'React.FC<DefaultSEOProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h 2>DefaultSEO</h 2>
      <p>This component is under construction.</p>
    </div>;
  );
};

export default DefaultSEO;
