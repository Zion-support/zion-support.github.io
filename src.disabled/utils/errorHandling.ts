/**
 * Error handling utilities for performance monitoring
 */

export const getErrorMetrics = () => {
  return {
    totalErrors: 0,
    errorRate: 0
  };
};

export const isErrorRateTooHigh = () => {
  return false;
};
