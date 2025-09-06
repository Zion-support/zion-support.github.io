import React from 'react';

interface HfSpacesProps {
  className?: string;
}

const HfSpaces: React.FC<HfSpacesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HfSpaces</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HfSpaces;