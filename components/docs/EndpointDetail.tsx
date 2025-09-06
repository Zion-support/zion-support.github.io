import React from 'react';

interface EndpointDetailProps {
  className?: string;
}

const EndpointDetail: React.FC<EndpointDetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EndpointDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EndpointDetail;