import React from 'react';

interface InfrastructureDriftDetectorProps {
  className?: string;
}

const InfrastructureDriftDetector: React.FC<InfrastructureDriftDetectorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InfrastructureDriftDetector</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InfrastructureDriftDetector;