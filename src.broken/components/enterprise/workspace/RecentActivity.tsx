import React from 'react';

interface RecentActivityProps {
  className?: string;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RecentActivity</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RecentActivity;