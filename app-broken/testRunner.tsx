import React, { ReactElement, useCallback } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      {children;
    </BrowserRouter>;
);
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>;
): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// Test result types
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
;
export interface CoverageMetrics {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
;
// Test configuration interface
export interface TestConfig {
  timeout: number;
  retries: number;
  parallel: boolean;
;
// Re-export everything
export * from '@testing-library/react';
export { customRender as render };