import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibilityManager from '../components/AccessibilityManager';

describe('AccessibilityManager', () => {
  it('renders without crashing', () => {
    render(<AccessibilityManager />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('handles keyboard navigation', () => {
    render(<AccessibilityManager />);
    const element = screen.getByRole('button');
    fireEvent.keyDown(element, { key: 'Tab' });
    expect(element).toHaveFocus();
  });

  it('provides ARIA labels', () => {
    render(<AccessibilityManager />);
    const element = screen.getByLabelText('Accessible element');
    expect(element).toBeInTheDocument();
  });

  it('supports screen reader announcements', () => {
    render(<AccessibilityManager />);
    const announcement = screen.getByRole('status');
    expect(announcement).toHaveAttribute('aria-live', 'polite');
  });
});