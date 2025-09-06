import React from 'react';

interface AllServicesOverviewProps {
  className?: string;
}

const AllServicesOverview: React.FC<AllServicesOverviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AllServicesOverview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AllServicesOverview;