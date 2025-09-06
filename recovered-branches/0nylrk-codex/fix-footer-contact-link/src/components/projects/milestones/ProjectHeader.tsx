import React from 'react';

interface ProjectHeaderProps {
  className?: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectHeader;