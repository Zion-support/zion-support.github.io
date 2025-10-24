'use client';
import React from 'react';

interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Services</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default Services;
