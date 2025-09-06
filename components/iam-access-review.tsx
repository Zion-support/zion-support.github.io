import React from 'react';

interface Iam-access-reviewProps {
  className?: string;
}

const Iam-access-review: React.FC<Iam-access-reviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Iam-access-review</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Iam-access-review;