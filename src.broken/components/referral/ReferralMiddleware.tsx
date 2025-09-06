import React from 'react';

interface ReferralMiddlewareProps {
  className?: string;
}

const ReferralMiddleware: React.FC<ReferralMiddlewareProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReferralMiddleware</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReferralMiddleware;