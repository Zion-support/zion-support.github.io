import React from 'react';

interface AIMatcherProps {
  className?: string;
}

const AIMatcher: React.FC<AIMatcherProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIMatcher</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIMatcher;