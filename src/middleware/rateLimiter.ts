import React from 'react';

interface rateLimiterProps {
  className?: string;
  children?: React.ReactNode;
}

const rateLimiter: React.FC<rateLimiterProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`ratelimiter ${className}`}>
      {children}
    </div>
  );
};

export default rateLimiter;