import React from 'react';

interface ProjectDetailsFieldsProps {
  className?: string;
}

const ProjectDetailsFields: React.FC<ProjectDetailsFieldsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectDetailsFields</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectDetailsFields;