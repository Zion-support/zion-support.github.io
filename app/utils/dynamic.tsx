'use client'
import React from 'react';

interface dynamicProps {
  className?: string;
}

const dynamic: React.FC<dynamicProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Dynamic</h2>
      <p className="text-gray-600">This is a placeholder component for Dynamic.</p>
    </div>
  );
};

export default dynamic;
