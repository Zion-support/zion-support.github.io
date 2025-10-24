'use client'
import React from 'react';

interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Services</h2>
      <p className="text-gray-600">This is a placeholder component for Services.</p>
    </div>
  );
};

export default Services;
