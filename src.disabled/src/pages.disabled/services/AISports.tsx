import React from 'react';

interface AISportsProps {
  className?: string;
}

const AISports: React.FC<AISportsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AISports</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AISports;