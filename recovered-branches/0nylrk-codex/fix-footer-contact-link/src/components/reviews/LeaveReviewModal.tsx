import React from 'react';

interface LeaveReviewModalProps {
  className?: string;
}

const LeaveReviewModal: React.FC<LeaveReviewModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LeaveReviewModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LeaveReviewModal;