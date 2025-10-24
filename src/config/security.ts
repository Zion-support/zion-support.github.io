'use client';
import React from 'react';

interface securityProps {
  className?: string;
}

const security: React.FC<securityProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>security</h2>
      <p>security component for enhanced functionality.</p>
    </div>
  );
};

export default security;