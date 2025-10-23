"use client";
import React from 'react';

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>Loading</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default Loading;