export const errorBoundaryConfig = {
import React from 'react';

export const errorBoundary Config ={
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV ==='development') {
      console.error('Error caught by boundary:', error);
    }
  }
};
