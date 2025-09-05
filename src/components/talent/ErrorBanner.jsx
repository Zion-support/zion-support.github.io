import React from 'react';

export function ErrorBanner({ message }) {
  return (
    <div className="min-h-screen bg-white">
      {message}
    </div>
  );
}

export default ErrorBanner;