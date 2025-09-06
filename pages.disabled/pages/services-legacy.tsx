import React from 'react';

interface Services-legacyProps {
  className?: string;
}

const Services-legacy: React.FC<Services-legacyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Services-legacy</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Services-legacy;