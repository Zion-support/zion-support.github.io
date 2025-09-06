import React from 'react';

interface CurationProps {
  className?: string;
}

const Curation: React.FC<CurationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Curation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Curation;