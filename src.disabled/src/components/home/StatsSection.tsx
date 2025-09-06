import React from 'react';

interface StatsSectionProps {
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>StatsSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default StatsSection;