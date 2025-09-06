import React from 'react';

interface AiEvalsProps {
  className?: string;
}

const AiEvals: React.FC<AiEvalsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AiEvals</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AiEvals;