import React from 'react';

interface PromptCardProps {
  className?: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PromptCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PromptCard;