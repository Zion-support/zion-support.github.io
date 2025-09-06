import React from 'react';

interface Small-businessProps {
  className?: string;
}

const Small-business: React.FC<Small-businessProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Small-business</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Small-business;