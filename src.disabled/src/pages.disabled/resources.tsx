import React from 'react';

interface ResourcesProps {
  className?: string;
}

const Resources: React.FC<ResourcesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Resources</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Resources;