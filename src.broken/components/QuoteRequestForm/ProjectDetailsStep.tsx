import React from 'react';

interface ProjectDetailsStepProps {
  className?: string;
}

const ProjectDetailsStep: React.FC<ProjectDetailsStepProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectDetailsStep</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectDetailsStep;