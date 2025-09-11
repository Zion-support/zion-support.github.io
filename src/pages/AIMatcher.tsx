import React from 'react';

interface Props {
  className?: string;
}

export const Component: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Component</h2>
      <p>This is a placeholder component.</p>
    </div>
  );
};
