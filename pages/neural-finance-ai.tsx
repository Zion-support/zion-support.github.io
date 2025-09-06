import React from 'react';

interface NeuralFinanceAiProps {
  className?: string;
}

const NeuralFinanceAi: React.FC<NeuralFinanceAiProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NeuralFinanceAi</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NeuralFinanceAi;