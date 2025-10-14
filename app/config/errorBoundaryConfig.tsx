export const errorBoundaryConfig = {
<<<<<<< HEAD
import React from 'react';

export const errorBoundary Config ={
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6be4
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV ==='development') {
      console.error('Error caught by boundary:', error);
    }
  }
};
