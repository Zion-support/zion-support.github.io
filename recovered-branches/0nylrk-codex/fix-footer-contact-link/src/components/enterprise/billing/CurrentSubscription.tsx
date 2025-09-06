import React from 'react';

interface CurrentSubscriptionProps {
  className?: string;
}

const CurrentSubscription: React.FC<CurrentSubscriptionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CurrentSubscription</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CurrentSubscription;