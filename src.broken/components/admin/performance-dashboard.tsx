import React from 'react';

interface Performance-dashboardProps {
  className?: string;
}

const Performance-dashboard: React.FC<Performance-dashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Performance-dashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Performance-dashboard;