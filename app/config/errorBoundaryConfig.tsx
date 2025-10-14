import React from 'react';

export const errorBoundaryConfig = {
  fallback: <div>Something went wrong</div>,
  onError: (_error: Error) => {
    // Log error to monitoring service in production
    // In development, errors are handled by React DevTools
  }
};