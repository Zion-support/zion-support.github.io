// GlobalError component
import React from 'react';

const GlobalError: React.FC = () => {
  return (
    <div className="global-error">
      <h1>Something went wrong!</h1>
      <p>An unexpected error occurred. Please try again later.</p>
    </div>
  );
};

export default GlobalError;