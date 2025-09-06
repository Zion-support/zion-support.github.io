import React from 'react';

interface Live-dashboardProps {
  className?: string;
}

const Live-dashboard: React.FC<Live-dashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Live-dashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Live-dashboard;