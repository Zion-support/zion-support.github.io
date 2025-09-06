import React from 'react';

interface ReviewFormProps {
  className?: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReviewForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReviewForm;