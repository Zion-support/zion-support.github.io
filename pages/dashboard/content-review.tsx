import React from 'react';

interface ContentReviewProps {
  className?: string;
}

const ContentReview: React.FC<ContentReviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContentReview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContentReview;