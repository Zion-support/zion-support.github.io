import React from 'react';

interface ZionHireAIProps {
  className?: string;
}

const ZionHireAI: React.FC<ZionHireAIProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ZionHireAI</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ZionHireAI;