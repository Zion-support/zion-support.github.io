import React from 'react';

interface RagEvaluationLabProps {
  className?: string;
}

const RagEvaluationLab: React.FC<RagEvaluationLabProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RagEvaluationLab</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RagEvaluationLab;