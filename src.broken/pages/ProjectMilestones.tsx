import React from 'react';

interface ProjectMilestonesProps {
  className?: string;
}

const ProjectMilestones: React.FC<ProjectMilestonesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectMilestones</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectMilestones;