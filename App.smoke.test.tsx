import { render, screen } from '@testing-library/react';
import App from './App';
describe('App Smoke Tests', () => {,
  it('should render without crashing', () => {,
    expect(() => render(<App />)).not.toThrow();
  });
  it('should render the main app component', () => {,
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
  it('renders without crashing', () => {,
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });
});