import React from 'react';

interface ErrorBannerProps {
  className?: string;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorBanner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorBanner;