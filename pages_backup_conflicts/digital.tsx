import React from 'react';

interface DigitalProps {
  className?: string;
}

const Digital: React.FC<DigitalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Digital</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Digital;