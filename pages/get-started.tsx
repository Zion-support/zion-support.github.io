import React from 'react';

interface GetStartedProps {
  className?: string;
}

const GetStarted: React.FC<GetStartedProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GetStarted</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GetStarted;