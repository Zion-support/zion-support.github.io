import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from '../app/components/ErrorBoundary'

describe('ErrorBoundary', () => {
  it('renders the component title', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary />
      </BrowserRouter>
    );
    expect(screen.getByText('ErrorBoundary')).toBeInTheDocument();
  });

  it('renders under construction message', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary />
      </BrowserRouter>
    );
    expect(screen.getByText('This component is under construction.')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary className="custom-class" />
      </BrowserRouter>
    );
    const component = screen.getByText('ErrorBoundary').closest('div');
    expect(component).toHaveClass('custom-class');
  });

  it('renders with default className when none provided', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary />
      </BrowserRouter>
    );
    const component = screen.getByText('ErrorBoundary').closest('div');
    expect(component).toHaveAttribute('class', '');
  });
});