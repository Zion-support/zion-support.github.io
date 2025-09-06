import React from 'react';

interface RoadmapFeatureProps {
  className?: string;
}

const RoadmapFeature: React.FC<RoadmapFeatureProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RoadmapFeature</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RoadmapFeature;