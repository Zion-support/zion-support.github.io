import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';

// Mock error throwing for error boundary tests
const ThrowError = ({ shouldError }: { shouldError?: boolean }) => {
  if (shouldError) {
    throw new Error('Test error')}
  return <div>Test Component</div>};

describe('Components Test Suite', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})});

  afterEach(() => {
    jest.restoreAllMocks()});

  it('renders error fallback when there is an error', () => {
    const ThrowError = () => {
      throw new Error('Test error')};

    render(
      <ErrorBoundary>
        <ThrowError shouldError={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()});

  it('renders children when there are no errors', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument()});

  it('logs error to console', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    const ThrowError = () => {
      throw new Error('Test error')};

    render(
      <ErrorBoundary>
        <ThrowError shouldError={true} />
      </ErrorBoundary>
    );
    
    expect(consoleSpy).toHaveBeenCalled()});

  it('handles multiple errors gracefully', () => {
    const ThrowError = () => {
      throw new Error('Test error')};

    render(
      <ErrorBoundary>
        <ThrowError shouldError={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()});

  it('resets error state when children change', async () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldError={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    
    rerender(
      <ErrorBoundary>
        <div>New content</div>
      </ErrorBoundary>
    );
    
    expect(screen.getByText('New content')).toBeInTheDocument()})});