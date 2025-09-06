import React from 'react';

interface RoadmapSuggestProps {
  className?: string;
}

const RoadmapSuggest: React.FC<RoadmapSuggestProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RoadmapSuggest</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RoadmapSuggest;