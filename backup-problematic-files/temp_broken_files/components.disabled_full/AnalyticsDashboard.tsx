import React from 'react';

interface AnalyticsDashboardProps {
  className?: string;

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AnalyticsDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );

export default AnalyticsDashboard;