import React from "react";

export const errorBoundaryConfig = {
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    console.error('Error caught by boundary:', error);
  }
};