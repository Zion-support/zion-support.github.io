import React from 'react';
import { useRouter } from 'next/router';

interface ProjectDetailProps {
  className?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ className }) => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div className={className || ''}>
      <h1>Project: {projectId}</h1>
      <p>This is a project detail page with ID: {projectId}</p>
    </div>
  );
};

export default ProjectDetail;