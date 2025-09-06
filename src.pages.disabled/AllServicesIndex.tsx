import React from 'react';

interface AllServicesIndexProps {
  className?: string;
}

const AllServicesIndex: React.FC<AllServicesIndexProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AllServicesIndex</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AllServicesIndex;