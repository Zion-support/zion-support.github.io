import React from 'react';

interface UsageStatsProps {
  className?: string;
}

const UsageStats: React.FC<UsageStatsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UsageStats</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UsageStats;