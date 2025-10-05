const React = require('react');

const ErrorBoundary = ({ children, fallback, onError }) => {
  return React.createElement('div', { 'data-testid': 'error-boundary' }, children);
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return React.createElement('div', { 'data-testid': 'error-fallback' }, 'Error occurred');
};

module.exports = {
  ErrorBoundary,
  ErrorFallback,
};