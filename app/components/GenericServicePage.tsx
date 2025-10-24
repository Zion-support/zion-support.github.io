'use client'
import React from 'react';

interface GenericServicePageProps {
  className?: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Generic Service Page</h2>
      <p className="text-gray-600">This is a placeholder component for Generic Service Page.</p>
    </div>
  );
};

export default GenericServicePage;
