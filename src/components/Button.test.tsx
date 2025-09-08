/**
 * Button Component Tests
 * Comprehensive test suite for the Button component
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './ui/Button'

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-blue-600')
  })

  it('renders with custom variant', () => {
    render(<Button variant="destructive">Delete</Button>)
    
    const button = screen.getByRole('button', { name: /delete/i })
    expect(button).toHaveClass('bg-red-600')
  })

  it('renders with custom size', () => {
    render(<Button size="lg">Large Button</Button>)
    
    const button = screen.getByRole('button', { name: /large button/i })
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed')
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>)
    
    const button = screen.getByRole('button', { name: /disabled button/i })
    fireEvent.click(button)
    
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders as a link when href is provided', () => {
    render(<Button href="/test">Link Button</Button>)
    
    const link = screen.getByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('renders with loading state', () => {
    render(<Button loading>Loading Button</Button>)
    
    const button = screen.getByRole('button', { name: /loading button/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('opacity-50')
    
    // Check for loading spinner
    const spinner = button.querySelector('[data-testid="loading-spinner"]')
    expect(spinner).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>)
    
    const button = screen.getByRole('button', { name: /custom button/i })
    expect(button).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>Ref Button</Button>)
    
    expect(ref).toHaveBeenCalled()
  })

  it('renders with icon', () => {
    const Icon = () => <span data-testid="icon">📝</span>
    render(<Button icon={<Icon />}>Button with Icon</Button>)
    
    const button = screen.getByRole('button', { name: /button with icon/i })
    const icon = screen.getByTestId('icon')
    
    expect(button).toContainElement(icon)
  })

  it('renders with full width', () => {
    render(<Button fullWidth>Full Width Button</Button>)
    
    const button = screen.getByRole('button', { name: /full width button/i })
    expect(button).toHaveClass('w-full')
  })

  it('supports keyboard navigation', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Keyboard Button</Button>)
    
    const button = screen.getByRole('button', { name: /keyboard button/i })
    
    // Test Enter key
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' })
    expect(handleClick).toHaveBeenCalledTimes(1)
    
    // Test Space key
    fireEvent.keyDown(button, { key: ' ', code: 'Space' })
    expect(handleClick).toHaveBeenCalledTimes(2)
  })

  it('has correct ARIA attributes', () => {
    render(<Button aria-label="Custom label">Button</Button>)
    
    const button = screen.getByRole('button', { name: /custom label/i })
    expect(button).toHaveAttribute('aria-label', 'Custom label')
  })

  it('handles focus correctly', () => {
    render(<Button>Focus Button</Button>)
    
    const button = screen.getByRole('button', { name: /focus button/i })
    button.focus()
    
    expect(button).toHaveFocus()
  })

  it('renders different variants correctly', () => {
    const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const
    
    variants.forEach(variant => {
      const { unmount } = render(<Button variant={variant}>{variant} Button</Button>)
      
      const button = screen.getByRole('button', { name: new RegExp(`${variant} button`, 'i') })
      expect(button).toBeInTheDocument()
      
      unmount()
    })
  })

  it('renders different sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const
    
    sizes.forEach(size => {
      const { unmount } = render(<Button size={size}>{size} Button</Button>)
      
      const button = screen.getByRole('button', { name: new RegExp(`${size} button`, 'i') })
      expect(button).toBeInTheDocument()
      
      unmount()
    })
  })
})