import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LazyLoader from '../LazyLoader';

// Mock the lazy component
const MockComponent = () => <div data-testid="lazy-component">Lazy Component</div>;

const mockLazyComponent = () => Promise.resolve({ default: MockComponent });

describe('LazyLoader', () => {
  it('renders loading fallback initially', () => {
    render(
      <LazyLoader 
        component={mockLazyComponent}
        fallback={<div data-testid="loading">Loading...</div>}
      />
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders lazy component after loading', async () => {
    render(
      <LazyLoader 
        component={mockLazyComponent}
        fallback={<div data-testid="loading">Loading...</div>}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId('lazy-component')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
  });

  it('renders default fallback when none provided', () => {
    render(<LazyLoader component={mockLazyComponent} />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('passes props to lazy component', async () => {
    const props = { testProp: 'test-value' };
    
    const MockComponentWithProps = (props: any) => (
      <div data-testid="lazy-component" data-testprop={props.testProp}>
        Lazy Component
      </div>
    );

    const mockLazyComponentWithProps = () => Promise.resolve({ default: MockComponentWithProps });

    render(
      <LazyLoader 
        component={mockLazyComponentWithProps}
        {...props}
      />
    );

    await waitFor(() => {
      const component = screen.getByTestId('lazy-component');
      expect(component).toHaveAttribute('data-testprop', 'test-value');
    });
  });
});