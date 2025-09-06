import React from 'react';

interface ProjectFormProps {
  className?: string;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectForm;