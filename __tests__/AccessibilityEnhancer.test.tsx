<<<<<<< HEAD


=======
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import AccessibilityEnhancer from '../components/AccessibilityEnhancer'
import { describe, it, expect, vi } from 'vitest'
describe('AccessibilityEnhancer'
  it('renders children correctly'
    expect(screen.getByTestId('test-child'
    expect(screen.getByText('Test Content'
  it('applies accessibility props correctly'
    const element = screen.getByRole('button'
    expect(element).toHaveAttribute('aria-label', 'Test Button'
    expect(element).toHaveAttribute('tabindex', '0'
  it('handles keyboard events correctly'
    const element = screen.getByRole('button'
    fireEvent.keyDown(element, { "key"
    fireEvent.keyDown(element, { "key"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import { describe, it, expect, vi } from 'vitest';
describe('AccessibilityEnhancer', () => {
  it('renders children correctly', () => {
    render(
      <AccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </AccessibilityEnhancer>
    );
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
  it('applies accessibility props correctly', () => {
    render(
      <AccessibilityEnhancer
        role="button"
        aria-label="Test Button"
        tabIndex={0}
      >
        <span>Button Text</span>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('button');
    expect(element).toHaveAttribute('aria-label', 'Test Button');
    expect(element).toHaveAttribute('tabindex', '0');
  });
  it('handles keyboard events correctly', () => {
    const handleClick = vi.fn();
    render(
      <AccessibilityEnhancer role="button" onClick={handleClick} tabIndex={0}>
        <span>Clickable Element</span>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('button');
    fireEvent.keyDown(element, { "key": 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(element, { "key": ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
  it('applies focus styles when focusable', () => {
    render(
      <AccessibilityEnhancer
        role="button"
        tabIndex={0}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>Focusable Element</span>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('button');
    expect(element).toHaveClass(
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-blue-500'
    );
  });
  it('disables focus when not focusable', () => {
    render(
      <AccessibilityEnhancer role="button" tabIndex={-1}>
        <span>Non-focusable Element</span>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('button');
    expect(element).toHaveAttribute('tabindex', '-1');
  });
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
