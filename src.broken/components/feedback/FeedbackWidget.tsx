import React from 'react';

interface FeedbackWidgetProps {
  className?: string;
}

const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FeedbackWidget</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FeedbackWidget;