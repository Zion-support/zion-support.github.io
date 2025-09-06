import React from 'react';

interface AITerraformProps {
  className?: string;
}

const AITerraform: React.FC<AITerraformProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AITerraform</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AITerraform;