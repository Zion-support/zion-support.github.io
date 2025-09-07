import React from 'react';

interface FiveHundredProps {
  className?: string;
}

const FiveHundred: React.FC<FiveHundredProps> = ({ className }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className || ''}`}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">500</h1>
        <p className="text-xl text-gray-600">Something went wrong.</p>
      </div>
    </div>
  );
};

export default FiveHundred;