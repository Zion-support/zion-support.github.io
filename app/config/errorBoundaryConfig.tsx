import React, { Suspense } from 'react';

export const errorBoundaryConfig = {
  fallback: <div>Something went wrong</div>,
  onError: (_error: Error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', _error);
    }
  }
};
