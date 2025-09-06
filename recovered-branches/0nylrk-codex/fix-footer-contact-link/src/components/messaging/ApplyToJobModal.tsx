import React from 'react';

interface ApplyToJobModalProps {
  className?: string;
}

const ApplyToJobModal: React.FC<ApplyToJobModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApplyToJobModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApplyToJobModal;