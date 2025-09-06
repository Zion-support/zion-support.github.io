import React from 'react';

interface Services-schemaProps {
  className?: string;
}

const Services-schema: React.FC<Services-schemaProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Services-schema</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Services-schema;