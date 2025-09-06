import React from 'react';

interface RewardsWidgetProps {
  className?: string;
}

const RewardsWidget: React.FC<RewardsWidgetProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RewardsWidget</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RewardsWidget;