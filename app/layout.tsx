'use client';
import React from 'react';

interface layoutProps {
  className?: string;
}

const layout: React.FC<layoutProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>layout</h2>
      <p>layout component for enhanced functionality.</p>
    </div>
  );
};

export default layout;
