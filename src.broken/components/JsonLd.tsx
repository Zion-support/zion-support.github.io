import React from 'react';

interface JsonLdProps {
  className?: string;
}

const JsonLd: React.FC<JsonLdProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JsonLd</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JsonLd;