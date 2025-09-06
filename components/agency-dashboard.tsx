import React from 'react';

interface Agency-dashboardProps {
  className?: string;
}

const Agency-dashboard: React.FC<Agency-dashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Agency-dashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Agency-dashboard;