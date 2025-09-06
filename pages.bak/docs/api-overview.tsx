import React from 'react';

interface Api-overviewProps {
  className?: string;
}

const Api-overview: React.FC<Api-overviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Api-overview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Api-overview;