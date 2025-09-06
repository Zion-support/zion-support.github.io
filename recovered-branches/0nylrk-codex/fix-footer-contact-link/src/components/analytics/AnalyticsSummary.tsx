import React from 'react';

interface AnalyticsSummaryProps {
  className?: string;
}

const AnalyticsSummary: React.FC<AnalyticsSummaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AnalyticsSummary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AnalyticsSummary;