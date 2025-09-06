import React from 'react';

interface ProjectDetailsFieldProps {
  className?: string;
}

const ProjectDetailsField: React.FC<ProjectDetailsFieldProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectDetailsField</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectDetailsField;