<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
    fireEvent.keyDown(element, { "key";
=======
<<<<<<< HEAD
    fireEvent.keyDown(element, { "key";
=======
    fireEvent.keyDown(element, { "key"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

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
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
    fireEvent.keyDown(element, { "key";
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
});
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
