import React from 'react';

interface WorkspaceHeaderProps {
  className?: string;
}

const WorkspaceHeader: React.FC<WorkspaceHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WorkspaceHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WorkspaceHeader;