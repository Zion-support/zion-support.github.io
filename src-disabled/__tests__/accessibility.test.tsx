import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from '../App';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have proper heading structure', () => {
    render(<App />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('should have proper form labels', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach(input => {
      const label = screen.getByLabelText(input.getAttribute('aria-label') || '');
      expect(label).toBeInTheDocument();
    });
  });
});