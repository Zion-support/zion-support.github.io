import { renderHook, act } from '@testing-library/react';
import { useAccessibility } from '../../hooks/useAccessibility';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('useAccessibility', () => {
  beforeEach(() => {
    // Clear DOM before each test
    document.body.innerHTML = '';
  });

  test('should return accessibility functions', () => {
    const { result } = renderHook(() => useAccessibility());
    
    expect(result.current.trapFocus).toBeInstanceOf(Function);
    expect(result.current.announce).toBeInstanceOf(Function);
    expect(result.current.prefersReducedMotion).toBeInstanceOf(Function);
    expect(result.current.isHighContrast).toBeInstanceOf(Function);
  });

  test('should announce messages to screen readers', () => {
    const { result } = renderHook(() => useAccessibility());
    
    act(() => {
      result.current.announce('Test message', 'polite');
    });
    
    const announcement = document.querySelector('[aria-live="polite"]');
    expect(announcement).toBeInTheDocument();
    expect(announcement?.textContent).toBe('Test message');
  });

  test('should use assertive priority for announcements', () => {
    const { result } = renderHook(() => useAccessibility());
    
    act(() => {
      result.current.announce('Important message', 'assertive');
    });
    
    const announcement = document.querySelector('[aria-live="assertive"]');
    expect(announcement).toBeInTheDocument();
    expect(announcement?.textContent).toBe('Important message');
  });

  test('should check for reduced motion preference', () => {
    const { result } = renderHook(() => useAccessibility());
    
    const prefersReducedMotion = result.current.prefersReducedMotion();
    expect(typeof prefersReducedMotion).toBe('boolean');
  });

  test('should check for high contrast mode', () => {
    const { result } = renderHook(() => useAccessibility());
    
    const isHighContrast = result.current.isHighContrast();
    expect(typeof isHighContrast).toBe('boolean');
  });

  test('should trap focus within element', () => {
    const { result } = renderHook(() => useAccessibility());
    
    // Create a mock element with focusable children
    const element = document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const input = document.createElement('input');
    
    element.appendChild(button1);
    element.appendChild(button2);
    element.appendChild(input);
    document.body.appendChild(element);
    
    // Mock focus method
    button1.focus = jest.fn();
    button2.focus = jest.fn();
    input.focus = jest.fn();
    
    const cleanup = result.current.trapFocus(element);
    
    // Simulate Tab key on first focusable element
    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });
    Object.defineProperty(document, 'activeElement', { value: button1, writable: true });
    
    act(() => {
      element.dispatchEvent(tabEvent);
    });
    
    expect(cleanup).toBeInstanceOf(Function);
    
    // Cleanup
    cleanup();
    document.body.removeChild(element);
  });

  test('should handle keyboard navigation', () => {
    renderHook(() => useAccessibility());
    
    // Create skip link
    const skipLink = document.createElement('a');
    skipLink.setAttribute('data-skip-link', '');
    skipLink.focus = jest.fn();
    document.body.appendChild(skipLink);
    
    // Mock document.body as active element
    Object.defineProperty(document, 'activeElement', { value: document.body, writable: true });
    
    // Simulate Tab key
    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false });
    
    act(() => {
      document.dispatchEvent(tabEvent);
    });
    
    // Cleanup
    document.body.removeChild(skipLink);
  });
});