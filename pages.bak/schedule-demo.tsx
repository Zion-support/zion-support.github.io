import React from 'react';

interface Schedule-demoProps {
  className?: string;
}

const Schedule-demo: React.FC<Schedule-demoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Schedule-demo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Schedule-demo;