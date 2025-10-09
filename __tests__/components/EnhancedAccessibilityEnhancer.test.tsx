import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedAccessibilityEnhancer from '../../app/components/EnhancedAccessibilityEnhancer';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock matchMedia
const mockMatchMedia = jest.fn();
Object.defineProperty(window, 'matchMedia', {
  value: mockMatchMedia,
});

describe('EnhancedAccessibilityEnhancer', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue(null);
    mockMatchMedia.mockReturnValue({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders children correctly', () => {
    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies high contrast mode when enabled', async () => {
    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    // Wait for component to load
    await waitFor(() => {
      expect(document.documentElement).toHaveClass('high-contrast');
    });
  });

  it('toggles accessibility menu with Alt+A', async () => {
    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    const menu = screen.getByRole('dialog');
    expect(menu).toHaveClass('hidden');

    // Press Alt+A
    fireEvent.keyDown(document, { key: 'a', altKey: true });
    
    await waitFor(() => {
      expect(menu).not.toHaveClass('hidden');
    });
  });

  it('toggles high contrast with Alt+H', async () => {
    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    await waitFor(() => {
      expect(document.documentElement).toHaveClass('high-contrast');
    });

    // Press Alt+H
    fireEvent.keyDown(document, { key: 'h', altKey: true });
    
    await waitFor(() => {
      expect(document.documentElement).not.toHaveClass('high-contrast');
    });
  });

  it('toggles reduced motion with Alt+M', async () => {
    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    await waitFor(() => {
      expect(document.documentElement).toHaveClass('reduced-motion');
    });

    // Press Alt+M
    fireEvent.keyDown(document, { key: 'm', altKey: true });
    
    await waitFor(() => {
      expect(document.documentElement).not.toHaveClass('reduced-motion');
    });
  });

  it('updates font size when changed', async () => {
    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    const fontSizeSelect = screen.getByLabelText('Font Size');
    fireEvent.change(fontSizeSelect, { target: { value: 'large' } });

    await waitFor(() => {
      expect(document.documentElement.style.getPropertyValue('--base-font-size')).toBe('18px');
    });
  });

  it('saves settings to localStorage', async () => {
    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'accessibility-settings',
        expect.stringContaining('"highContrast":true')
      );
    });
  });

  it('loads saved settings from localStorage', async () => {
    const savedSettings = {
      highContrast: false,
      reducedMotion: true,
      fontSize: 'large',
      focusVisible: true,
      screenReader: false,
      keyboardNavigation: true
    };

    localStorageMock.getItem.mockReturnValue(JSON.stringify(savedSettings));

    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    await waitFor(() => {
      expect(document.documentElement).not.toHaveClass('high-contrast');
      expect(document.documentElement).toHaveClass('reduced-motion');
      expect(document.documentElement).toHaveClass('keyboard-navigation');
    });
  });

  it('creates ARIA live region for screen reader optimizations', async () => {
    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    await waitFor(() => {
      const liveRegion = document.getElementById('aria-live-polite');
      expect(liveRegion).toBeInTheDocument();
      expect(liveRegion).toHaveAttribute('aria-live', 'polite');
      expect(liveRegion).toHaveAttribute('aria-atomic', 'true');
    });
  });

  it('handles system preference changes', async () => {
    const mockAddEventListener = jest.fn();
    const mockRemoveEventListener = jest.fn();
    
    mockMatchMedia.mockReturnValue({
      matches: false,
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
    });

    render(
      <EnhancedAccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </EnhancedAccessibilityEnhancer>
    );

    await waitFor(() => {
      expect(mockAddEventListener).toHaveBeenCalledWith('change', expect.any(Function));
    });
  });
});