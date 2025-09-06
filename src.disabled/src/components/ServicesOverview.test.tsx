import React from 'react';

interface ServicesOverview.testProps {
  className?: string;
}

const ServicesOverview.test: React.FC<ServicesOverview.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesOverview.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesOverview.test;