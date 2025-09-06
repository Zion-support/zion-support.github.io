import React from 'react';

interface AiVideoEditingProps {
  className?: string;
}

const AiVideoEditing: React.FC<AiVideoEditingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AiVideoEditing</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AiVideoEditing;