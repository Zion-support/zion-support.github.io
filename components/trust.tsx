import React from 'react';

interface TrustProps {
  className?: string;
}

const Trust: React.FC<TrustProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Trust</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Trust;