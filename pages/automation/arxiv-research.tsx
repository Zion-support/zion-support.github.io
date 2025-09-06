import React from 'react';

interface ArxivResearchProps {
  className?: string;
}

const ArxivResearch: React.FC<ArxivResearchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ArxivResearch</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ArxivResearch;