import React from 'react';

interface ReportsProps {
  className?: string;
}

const Reports: React.FC<ReportsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Reports</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Reports;