import React from 'react';

interface ZionTechGroupProps {
  className?: string;
}

const ZionTechGroup: React.FC<ZionTechGroupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ZionTechGroup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ZionTechGroup;