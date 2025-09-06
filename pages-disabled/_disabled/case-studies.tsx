import React from 'react';

interface Case-studiesProps {
  className?: string;
}

const Case-studies: React.FC<Case-studiesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Case-studies</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Case-studies;