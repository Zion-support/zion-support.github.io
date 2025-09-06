import React from 'react';

interface RequestsHeaderProps {
  className?: string;
}

const RequestsHeader: React.FC<RequestsHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RequestsHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RequestsHeader;