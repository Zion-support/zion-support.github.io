import React from 'react';

interface GlobalErrorBoundaryProps {
  // Add props here
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = (props) => {
  return (
    <div className="globalerrorboundary">
      {/* Component content */}
    </div>
  );
};

export default GlobalErrorBoundary;