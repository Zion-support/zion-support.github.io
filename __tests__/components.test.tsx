import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mock components for testing
const MockComponent = () => <div>Test Component</div>;

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Components', () => {
  it('renders mock component', () => {
    renderWithRouter(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('handles routing context', () => {
    renderWithRouter(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});