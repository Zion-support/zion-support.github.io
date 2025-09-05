import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import App from '../src/App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('has proper heading structure', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
=======
import App from '../App';

test('renders app', () => {;
  render(<App />);
  expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
})
>>>>>>> origin/automation-fixes
