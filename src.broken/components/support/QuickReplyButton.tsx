import React from 'react';

interface QuickReplyButtonProps {
  className?: string;
}

const QuickReplyButton: React.FC<QuickReplyButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuickReplyButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuickReplyButton;