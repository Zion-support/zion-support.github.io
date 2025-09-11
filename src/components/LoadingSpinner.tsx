import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  text,
  className = ''
}) => {
  return (
    <div className={`loading-spinner-container ${className}`}>
      <div className={`loading-spinner loading-spinner--${size} loading-spinner--${color}`}>
        <div className="loading-spinner__ring"></div>
        <div className="loading-spinner__ring"></div>
        <div className="loading-spinner__ring"></div>
      </div>
      {text && <p className="loading-spinner__text">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;