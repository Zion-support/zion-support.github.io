import React from 'react';

interface UsageOverviewProps {
  className?: string;
}

const UsageOverview: React.FC<UsageOverviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UsageOverview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UsageOverview;