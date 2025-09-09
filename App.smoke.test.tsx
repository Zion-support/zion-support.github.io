import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Smoke Test', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});