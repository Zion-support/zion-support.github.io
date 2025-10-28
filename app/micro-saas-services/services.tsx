'use client';

import React from 'react';

interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className = '' }) => {
  return (
    <div className={`services ${className}`}>
      <h1>Services</h1>
    </div>
  );
};

export default Services;