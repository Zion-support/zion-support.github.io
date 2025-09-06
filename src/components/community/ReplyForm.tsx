import React from 'react';

interface ReplyFormProps {
  className?: string;
}

const ReplyForm: React.FC<ReplyFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReplyForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReplyForm;