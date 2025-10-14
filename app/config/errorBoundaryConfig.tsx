<<<<<<< HEAD
export const errorBoundaryConfig = {
=======
import React from 'react';

export const errorBoundary Config ={
>>>>>>> cursor/fix-errors-and-merge-to-main-897f
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_EN V ==='development') {
      console.error('Error caught by boundary:', error);
    }
  }
};
