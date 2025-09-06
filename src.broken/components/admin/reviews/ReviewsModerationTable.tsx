import React from 'react';

interface ReviewsModerationTableProps {
  className?: string;
}

const ReviewsModerationTable: React.FC<ReviewsModerationTableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReviewsModerationTable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReviewsModerationTable;