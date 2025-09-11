import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Enterprise-Grade AI & Technology Solutions')).toBeInTheDocument();
  });

  it('renders the services section', () => {
    render(<HomePage />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });

  it('renders the CTA section', () => {
    render(<HomePage />);
    expect(screen.getByText('Ready to Transform Your Business?')).toBeInTheDocument();
  });
});