import React from 'react';

interface FeedbackModalProps {
  className?: string;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FeedbackModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FeedbackModal;