import React from 'react';

interface MockProps {
  className?: string;
}

const Mock: React.FC<MockProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Mock</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Mock;