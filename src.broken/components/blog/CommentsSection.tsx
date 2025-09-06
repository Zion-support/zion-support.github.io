import React from 'react';

interface CommentsSectionProps {
  className?: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CommentsSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CommentsSection;