import React from 'react';

interface GuidedTourProps {
  className?: string;
}

const GuidedTour: React.FC<GuidedTourProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GuidedTour</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GuidedTour;