import React from 'react';

export const Errorboundaryconfig={
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caughtByBoundary: ', error);
=======
export consterrorBoundaryConfig= {
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caughtbyboundary:', error);
    }
  }
};
