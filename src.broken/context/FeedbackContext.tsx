import React from 'react';

interface FeedbackContextProps {
  className?: string;
}

const FeedbackContext: React.FC<FeedbackContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FeedbackContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FeedbackContext;