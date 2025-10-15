import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from '../app/page';

const renderWithHelmet = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      {component}
    </HelmetProvider>
  );
};

describe('HomePage', () => {
  it('renders without crashing', () => {
    renderWithHelmet(<HomePage />);
    expect(screen.getByText('Page Title')).toBeInTheDocument();
  });

  it('displays the main heading', () => {
    renderWithHelmet(<HomePage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('has a call to action link', () => {
    renderWithHelmet(<HomePage />);
    const ctaLink = screen.getByRole('link', { name: /learn more/i });
    expect(ctaLink).toBeInTheDocument();
  });
});