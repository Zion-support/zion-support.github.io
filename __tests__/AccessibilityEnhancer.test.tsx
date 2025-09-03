<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import { describe, it, expect, vi } from 'vitest';
describe('AccessibilityEnhancer', () => {'
  it('renders children correctly', () => {
    render(
      <AccessibilityEnhancer>'
        <div data-testid='test-child'>Test Content</div>
      </AccessibilityEnhancer>
    );
    expect(screen.getByTestId('
  'test-child')).toBeInTheDocument();
    expect(screen.getByText('
  'Test Content')).toBeInTheDocument()})
  it('
  'applies accessibility props correctly', () => {
=======
<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityEnhancer from ../components/AccessibilityEnhancer';
import { describe, it, expect, vi } from 'vitest;

describe('AccessibilityEnhancer', () => {
  it(
  renders children correctly', () => {
    render(
      <AccessibilityEnhancer>
        <div data-testid='test-child>Test Content</div>
      </AccessibilityEnhancer>
    );
    expect(screen.getByTestId(
  'test-child')).toBeInTheDocument()
    expect(screen.getByText(
  Test Content')).toBeInTheDocument()});
  it(
  'applies accessibility props correctly, () => {
>>>>>>> main
    render(
      <AccessibilityEnhancer'
        role='button';
        aria-label=Test Button';
=======
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import AccessibilityEnhancer from '../components/AccessibilityEnhancer'
import { describe, it, expect, vi } from 'vitest'
describe('AccessibilityEnhancer', () => {
  it('renders children correctly', () => {
    render(
      <AccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </AccessibilityEnhancer>
    )
    expect(screen.getByTestId('test-child')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
  it('applies accessibility props correctly', () => {
    render(
      <AccessibilityEnhancer
        role="button"
        aria-label="Test Button"
>>>>>>> main
        tabIndex={0}
      >
        <span>Button Text</span>
      </AccessibilityEnhancer>
<<<<<<< HEAD
    );
<<<<<<< HEAD
    const element = screen.getByRole('
  'button');
    expect(element).toHaveAttribute('
  'aria-label''Test Button');
    expect(element).toHaveAttribute('
  'tabindex''0')})
  it('
  'handles keyboard events correctly', () => {
    const handleClick = vi.fn();
    render('
      <AccessibilityEnhancer role='button' onClick={handleClick} tabIndex={0}>
=======
    const element = screen.getByRole(
  'button);
    expect(element).toHaveAttribute(
  'aria-label'Test Button');
    expect(element).toHaveAttribute(
  'tabindex'0')});
  it(
  handles keyboard events correctly', () => {
    const handleClick = vi.fn()
    render(
      <AccessibilityEnhancer role='button onClick={handleClick} tabIndex={0}>
>>>>>>> main
        <span>Clickable Element</span>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('
  'button');
<<<<<<< HEAD
    fireEvent.keyDown(element, { key: 'Enter });
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(element, { key:' });
    expect(handleClick).toHaveBeenCalledTimes(2)})
  it('
  'applies focus styles when focusable', () => {
    render(
      <AccessibilityEnhancer'
        role='button';
        tabIndex={0}
        className='focus: outline-none focus:ring-2 focu,
    s:ring-blue-500'>
=======
    fireEvent.keyDown(element, { key: Enter });
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(element, { key: ' });
    expect(handleClick).toHaveBeenCalledTimes(2)});
  it(
  'applies focus styles when focusable, () => {
=======
    )
    const element = screen.getByRole('button')
    expect(element).toHaveAttribute('aria-label,Test Button')
    expect(element).toHaveAttribute('tabindex,0')
  })
  it('handles keyboard events correctly', () => {
    const handleClick = vi.fn()
    render(
      <AccessibilityEnhancer role="button" onClick={handleClick} tabIndex={0}>
        <span>Clickable Element</span>
      </AccessibilityEnhancer>
    )
    const element = screen.getByRole('button')
    fireEvent.keyDown(element, { key: 'Enter' })
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(element, { key: ' ' })
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
  it('applies focus styles when focusable', () => {
>>>>>>> main
    render(
      <AccessibilityEnhancer
        role="button"
        tabIndex={0}
<<<<<<< HEAD
        className=focus: outline-none focus: ring-2 focus: ring-blue-500'>
=======
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
>>>>>>> main
>>>>>>> main
        <span>Focusable Element</span>
      </AccessibilityEnhancer>
<<<<<<< HEAD
    );
<<<<<<< HEAD
    const element = screen.getByRole('
  'button');
    expect(element).toHaveClass('
  'focu,
    s:outline-none,
,
  focus: ring-2,
,
  focus: ring-blue-500)  })
  it('
  'disables focus when not focusable', () => {
    render('
      <AccessibilityEnhancer role='button' tabIndex={-1}>
=======
<<<<<<< HEAD
    const element = screen.getByRole(
  'button)
    expect(element).toHaveClass(
  'focus: outline-none,
,
  focus: ring-2,
,
  focus: ring-blue-500)  });
  it(
  'disables focus when not focusable, () => {
=======
    const element = screen.getByRole('button');
    expect(element).toHaveClass(
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-blue-500'
    );
  });

=======
    )
    const element = screen.getByRole('button')
    expect(element).toHaveClass('focus:outline-none,focus:ring-2,focus:ring-blue-500')
  })
>>>>>>> main
  it('disables focus when not focusable', () => {
>>>>>>> main
    render(
      <AccessibilityEnhancer role="button" tabIndex={-1}>
>>>>>>> main
        <span>Non-focusable Element</span>
      </AccessibilityEnhancer>
<<<<<<< HEAD
    );
<<<<<<< HEAD
    const element = screen.getByRole('
  'button');
    expect(element).toHaveAttribute('
  'tabindex''-1')})})
=======
<<<<<<< HEAD
    const element = screen.getByRole(
  button')
    expect(element).toHaveAttribute(
  'tabindex'-1')})});
=======
    const element = screen.getByRole('button');
    expect(element).toHaveAttribute('tabindex', '-1');
  });
});
=======
    )
    const element = screen.getByRole('button')
    expect(element).toHaveAttribute('tabindex,-1')
  })
})
>>>>>>> main
>>>>>>> main
>>>>>>> main
