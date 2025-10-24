import { render, screen } from '@testing-library/react';

export default function Page() {
import '@testing-library/jest-dom';

const TestComponent = () => {
  return <div>Test content</div>;
};

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<MockApp />);
    expect(screen.getByRole('main')).toBeInTheDocument();
});

  it('renders the main content', () => {
  render(<MockApp />);
    expect(screen.getByRole('main')).toBeInTheDocument();
});
});
