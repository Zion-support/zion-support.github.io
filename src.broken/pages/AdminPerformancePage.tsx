import React from 'react';

interface AdminPerformancePageProps {
  className?: string;
}

const AdminPerformancePage: React.FC<AdminPerformancePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AdminPerformancePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AdminPerformancePage;