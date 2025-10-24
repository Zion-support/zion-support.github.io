'use client'
import React from 'react';

interface AdTemplatesProps {
  className?: string;
}

const AdTemplates: React.FC<AdTemplatesProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Ad Templates</h2>
      <p className="text-gray-600">This is a placeholder component for Ad Templates.</p>
    </div>
  );
};

export default AdTemplates;
