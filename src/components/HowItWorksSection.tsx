import React from 'react';

interface Props {
  className?: string;
}

export const HowItWorksSection: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">How It Works</h2>
      <p>This is a placeholder component.</p>
    </div>
  );
};
