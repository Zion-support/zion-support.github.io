import React from 'react';

interface ResearchProps {
  className?: string;
}

const Research: React.FC<ResearchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Research</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Research;