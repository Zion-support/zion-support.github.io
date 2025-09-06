import React from 'react';

interface Project-managementProps {
  className?: string;
}

const Project-management: React.FC<Project-managementProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Project-management</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Project-management;