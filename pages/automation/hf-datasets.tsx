import React from 'react';

interface HfDatasetsProps {
  className?: string;
}

const HfDatasets: React.FC<HfDatasetsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HfDatasets</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HfDatasets;