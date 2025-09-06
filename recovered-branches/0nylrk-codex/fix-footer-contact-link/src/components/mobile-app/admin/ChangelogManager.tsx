import React from 'react';

interface ChangelogManagerProps {
  className?: string;
}

const ChangelogManager: React.FC<ChangelogManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ChangelogManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ChangelogManager;