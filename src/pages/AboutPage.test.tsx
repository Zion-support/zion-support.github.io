import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import AboutPage from './AboutPage;

describe('AboutPage', () => {
  it(renders without crashing', () => {
    render(<AboutPage />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<AboutPage />);
    // Add more specific tests here
  });
});
