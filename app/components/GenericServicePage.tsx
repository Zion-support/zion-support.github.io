'use client';
import React from 'react';

interface GenericServicePageProps {
  className?: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>GenericServicePage</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default GenericServicePage;
