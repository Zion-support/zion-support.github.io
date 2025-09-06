import React from 'react';

interface GuidesProps {
  className?: string;
}

const Guides: React.FC<GuidesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Guides</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Guides;