import React from 'react';

interface TalentDashboardProps {
  className?: string;
}

const TalentDashboard: React.FC<TalentDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentDashboard;