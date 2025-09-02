import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Careers from './Careers';
'
describe('Careers', () => {'
  it('renders without crashing', () => {
    render(<Careers />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });
'
  it('displays expected content', () => {
    render(<Careers />);
    // Add more specific tests here
  });
});
'