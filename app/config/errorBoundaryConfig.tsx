import React from 'react';

export const errorBoundaryConfig = {
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error);
    }
    // In production, send to error reporting service
  }
};