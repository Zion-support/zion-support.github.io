import React from 'react';

interface FutureOfWorkProps {
  className?: string;
}

const FutureOfWork: React.FC<FutureOfWorkProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FutureOfWork</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FutureOfWork;