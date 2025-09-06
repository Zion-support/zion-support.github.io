import React from 'react';

interface Bundle-reportProps {
  className?: string;
}

const Bundle-report: React.FC<Bundle-reportProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Bundle-report</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Bundle-report;