import React from 'react';

interface ApplicantsProps {
  className?: string;
}

const Applicants: React.FC<ApplicantsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Applicants</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Applicants;