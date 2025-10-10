import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

describe('advanced-components', () => {
  it('should render advanced component', () => {
    const AdvancedComponent = () => (
      <div>
        <h1>Advanced Component</h1>
        <p>This is a more complex component</p>
      </div>
    );
    render(<AdvancedComponent />);
    expect(screen.getByText('Advanced Component')).toBeInTheDocument();
  });

  it('should handle state changes', () => {
    const StatefulComponent = () => {
      const [count, setCount] = React.useState(0);
      return (
        <div>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };
    render(<StatefulComponent />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});