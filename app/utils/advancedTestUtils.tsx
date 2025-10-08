/**
 * Advanced Test Utilities
 * Generated: October 8, 2025
 * 
 * Comprehensive testing utilities for React components and utilities
 */

import { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

/**
 * Custom render with providers for testing
 */
export function renderWithAllProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult {
  function AllProviders({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }

  return render(ui, { wrapper: AllProviders, ...options });
}

/**
 * Wait for async operations to complete
 */
export async function waitForAsync(timeout: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

/**
 * Mock API responses for testing
 */
export class MockAPI {
  private static responses: Map<string, any> = new Map();

  static setResponse(endpoint: string, data: any): void {
    MockAPI.responses.set(endpoint, data);
  }

  static getResponse(endpoint: string): any {
    return MockAPI.responses.get(endpoint);
  }

  static clearResponses(): void {
    MockAPI.responses.clear();
  }

  static mockFetch(endpoint: string, data: any, status: number = 200): void {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: status >= 200 && status < 300,
        status,
        json: () => Promise.resolve(data),
        text: () => Promise.resolve(JSON.stringify(data)),
        headers: new Headers(),
        statusText: status >= 200 && status < 300 ? 'OK' : 'Error',
      } as Response)
    ) as jest.Mock;
  }
}

/**
 * Performance testing utilities
 */
export class PerformanceTestUtils {
  static async measureRenderTime(
    component: ReactElement
  ): Promise<number> {
    const start = performance.now();
    const { unmount } = renderWithAllProviders(component);
    const end = performance.now();
    unmount();
    return end - start;
  }

  static async measureMultipleRenders(
    component: ReactElement,
    iterations: number = 10
  ): Promise<{ avg: number; min: number; max: number }> {
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
      const time = await this.measureRenderTime(component);
      times.push(time);
    }

    return {
      avg: times.reduce((a, b) => a + b, 0) / times.length,
      min: Math.min(...times),
      max: Math.max(...times),
    };
  }
}

/**
 * Accessibility testing utilities
 */
export class AccessibilityTestUtils {
  static checkAriaLabels(element: HTMLElement): boolean {
    const interactiveElements = element.querySelectorAll(
      'button, a, input, select, textarea'
    );

    let allHaveLabels = true;
    interactiveElements.forEach((el) => {
      const hasLabel =
        el.hasAttribute('aria-label') ||
        el.hasAttribute('aria-labelledby') ||
        el.textContent?.trim();

      if (!hasLabel) {
        allHaveLabels = false;
        console.warn('Element missing label:', el);
      }
    });

    return allHaveLabels;
  }

  static checkKeyboardNavigation(element: HTMLElement): boolean {
    const focusableElements = element.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    return focusableElements.length > 0;
  }
}

/**
 * Data generation utilities for testing
 */
export class TestDataFactory {
  static generateUser(overrides?: Partial<any>) {
    return {
      id: Math.random().toString(36).substring(7),
      name: 'Test User',
      email: 'test@example.com',
      role: 'user',
      createdAt: new Date().toISOString(),
      ...overrides,
    };
  }

  static generateUsers(count: number, overrides?: Partial<any>) {
    return Array.from({ length: count }, (_, i) =>
      this.generateUser({ ...overrides, id: `user-${i}` })
    );
  }

  static generateApiResponse<T>(data: T, success: boolean = true) {
    return {
      success,
      data,
      timestamp: new Date().toISOString(),
      message: success ? 'Success' : 'Error',
    };
  }
}

/**
 * Snapshot testing utilities
 */
export function createSnapshot(component: ReactElement): string {
  const { container } = renderWithAllProviders(component);
  return container.innerHTML;
}

/**
 * Event simulation utilities
 */
export class EventSimulator {
  static simulateClick(element: HTMLElement): void {
    element.click();
  }

  static simulateInput(element: HTMLInputElement, value: string): void {
    element.value = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }

  static simulateSubmit(form: HTMLFormElement): void {
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  }

  static simulateKeyPress(element: HTMLElement, key: string): void {
    element.dispatchEvent(
      new KeyboardEvent('keydown', { key, bubbles: true })
    );
  }
}

export default {
  renderWithAllProviders,
  waitForAsync,
  MockAPI,
  PerformanceTestUtils,
  AccessibilityTestUtils,
  TestDataFactory,
  createSnapshot,
  EventSimulator,
};
