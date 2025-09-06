import React from 'react';

interface CompanyDashboardProps {
  className?: string;
}

const CompanyDashboard: React.FC<CompanyDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CompanyDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CompanyDashboard;