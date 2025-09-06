import React from 'react';

interface AICoreDashboardProps {
  className?: string;
}

const AICoreDashboard: React.FC<AICoreDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AICoreDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AICoreDashboard;