import React from 'react';

interface AIEducationProps {
  className?: string;
}

const AIEducation: React.FC<AIEducationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIEducation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIEducation;