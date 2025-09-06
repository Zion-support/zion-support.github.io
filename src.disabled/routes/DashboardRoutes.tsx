import React from 'react';

interface DashboardRoutesProps {
  className?: string;
}

const DashboardRoutes: React.FC<DashboardRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DashboardRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DashboardRoutes;