import React from 'react';

interface AgenticRagProps {
  className?: string;
}

const AgenticRag: React.FC<AgenticRagProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AgenticRag</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AgenticRag;