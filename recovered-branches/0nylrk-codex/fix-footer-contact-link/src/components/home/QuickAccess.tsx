import React from 'react';

interface QuickAccessProps {
  className?: string;
}

const QuickAccess: React.FC<QuickAccessProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuickAccess</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuickAccess;