import React from 'react';

interface DeveloperProps {
  className?: string;
}

const Developer: React.FC<DeveloperProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Developer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Developer;