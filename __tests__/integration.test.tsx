
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('Integration Tests', () => {
  test('App renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  
  test('Navigation works correctly', () => {
    render(<App />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
