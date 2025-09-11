import React from 'react';
import './LoadingDots.css';

interface LoadingDotsProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const LoadingDots: React.FC<LoadingDotsProps> = ({
  size = 'medium',
  color = 'var(--primary-color)',
  className = '',
}) => {
  return (
    <div
      className={`loading-dots loading-dots--${size} ${className}`}
      style={{ '--dot-color': color } as React.CSSProperties}
      aria-label="Loading"
    >
      <span className="loading-dots__dot" />
      <span className="loading-dots__dot" />
      <span className="loading-dots__dot" />
    </div>
  );
};

export default LoadingDots;