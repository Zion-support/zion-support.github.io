'use client';
import React from 'react';

interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Main</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default Main;
