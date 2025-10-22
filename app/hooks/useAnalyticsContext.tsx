import React from 'react';

interface UseAnalyticsContextProps {
  className?: string;
}

const UseAnalyticsContext: React.FC<UseAnalyticsContextProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>UseAnalyticsContext</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default UseAnalyticsContext;