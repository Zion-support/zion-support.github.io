import React from 'react';

interface RoadmapProps {
  className?: string;
}

const Roadmap: React.FC<RoadmapProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Roadmap</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Roadmap;