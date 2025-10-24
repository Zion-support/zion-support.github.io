import React from 'react';

export const errorBoundaryConfig = {
  fallback: <div>Something went wrong. Please refresh the page.</div>,
  onError: (error: Error, errorInfo: any) => {
    console.error('Error caught by boundary:', error, errorInfo);
  }
};
