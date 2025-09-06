import React from 'react';

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Projects</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Projects;