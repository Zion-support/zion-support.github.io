import React from 'react';

interface Tech-radarProps {
  className?: string;
}

const Tech-radar: React.FC<Tech-radarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tech-radar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tech-radar;