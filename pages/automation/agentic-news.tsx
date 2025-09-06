import React from 'react';

interface AgenticNewsProps {
  className?: string;
}

const AgenticNews: React.FC<AgenticNewsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AgenticNews</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AgenticNews;