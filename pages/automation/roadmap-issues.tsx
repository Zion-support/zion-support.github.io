import React from 'react';

interface RoadmapIssuesProps {
  className?: string;
}

const RoadmapIssues: React.FC<RoadmapIssuesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RoadmapIssues</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RoadmapIssues;