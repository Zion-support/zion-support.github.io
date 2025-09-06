import React from 'react';

interface MobileProjectViewProps {
  className?: string;
}

const MobileProjectView: React.FC<MobileProjectViewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileProjectView</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileProjectView;