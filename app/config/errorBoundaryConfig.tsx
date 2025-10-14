import React, { Suspense } from 'react';

export const errorBoundaryConfig = {
  fallback: <div>Something went wrong</div>,
  onError: (_error: Error) => {
    if (process.env.NODE_ENV === 'development') {
      // Error handling logic can be added here
    }
  }
};
