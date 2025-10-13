import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
  return (
    <div className={`loading-states ${className}`}>
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <div className="loading-skeleton">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      {children}
    </div>
  );
}