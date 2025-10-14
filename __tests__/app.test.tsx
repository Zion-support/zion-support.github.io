import { screen } from '@testing-library/react'
describe('HomePage', () => {
  it('renders without crashing', () => {
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });
  it('renders navigation links', () => {
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});