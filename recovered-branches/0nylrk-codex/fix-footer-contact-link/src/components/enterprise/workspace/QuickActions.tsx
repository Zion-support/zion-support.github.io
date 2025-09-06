import React from 'react';

interface QuickActionsProps {
  className?: string;
}

const QuickActions: React.FC<QuickActionsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuickActions</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuickActions;