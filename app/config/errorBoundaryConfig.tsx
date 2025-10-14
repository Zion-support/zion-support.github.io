import React, { Suspense } from 'react';

export const errorBoundaryConfig = {
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
      console.error('Error caught by boundary:', error);
=======
      console.error('Error caught by boundary: ', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
};
