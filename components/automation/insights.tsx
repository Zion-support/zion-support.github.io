import React from 'react';

interface InsightsProps {
  className?: string;
}

const Insights: React.FC<InsightsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Insights</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Insights;