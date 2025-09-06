import React from 'react';

interface InternationalProps {
  className?: string;
}

const International: React.FC<InternationalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>International</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default International;