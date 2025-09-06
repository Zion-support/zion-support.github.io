import React from 'react';

interface Salary-insightsProps {
  className?: string;
}

const Salary-insights: React.FC<Salary-insightsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Salary-insights</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Salary-insights;