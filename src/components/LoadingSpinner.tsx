import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loading-text">
          <span className="loading-title">Zion Tech Group</span>
          <span className="loading-subtitle">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
