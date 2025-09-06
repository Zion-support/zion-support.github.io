import React from 'react';

interface KnowledgeBaseProps {
  className?: string;
}

const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>KnowledgeBase</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default KnowledgeBase;