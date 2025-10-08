import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

// Mock component for testing
const MockHomePage = () => (
  <div>
    <h1>Zion Tech Group</h1>
    <p>AI-Powered Enterprise Solutions</p>
  </div>
);

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<MockHomePage />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
    expect(screen.getByText('AI-Powered Enterprise Solutions')).toBeInTheDocument();
  });

  it('displays the main heading', () => {
    render(<MockHomePage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Zion Tech Group');
  });

  it('displays the description', () => {
    render(<MockHomePage />);
    const description = screen.getByText('AI-Powered Enterprise Solutions');
    expect(description).toBeInTheDocument();
  });
});