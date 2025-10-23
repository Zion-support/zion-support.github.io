import React from 'react'

export default function Page() {
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from '../app/components/ErrorBoundary'
// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div><BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={false} />
        </ErrorBoundary></BrowserRouter><BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary></BrowserRouter><BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary></BrowserRouter><div>Custom error message</div><BrowserRouter>
        <ErrorBoundary fallback={customFallback}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary></BrowserRouter><div data-testid="error-boundary-wrapper">{children}</div><ErrorBoundary>
        <div data-testid="child">Child component</div></ErrorBoundary><ErrorBoundary>
        <div data-testid="child">Child component</div></ErrorBoundary>
  );
};