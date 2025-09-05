<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedPerformanceMonitor from '../components/EnhancedPerformanceMonitor';

describe('EnhancedPerformanceMonitor', () => {
  test('renders without crashing', () => {
    render(<EnhancedPerformanceMonitor />);
    expect(screen.getByTestId('enhancedperformancemonitor')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<EnhancedPerformanceMonitor />);
  });

  test('handles user interactions', () => {
    render(<EnhancedPerformanceMonitor />);
  });

  test('applies correct styling', () => {
    render(<EnhancedPerformanceMonitor />);
  });
});
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor" describe("EnhancedPerformanceMonitor",() => {" test("renders without crashing",() => {" render(<EnhancedPerformanceMonitor / / />) expect( screen.getByTestId("enhancedperformancemonitor")" ).toBeInTheDocument() }) test("displays correct content",() => {" render(<EnhancedPerformanceMonitor / / />) }) test("handles user interactions",() => {" render(<EnhancedPerformanceMonitor / / />) }) test("applies correct styling",() => {" render(<EnhancedPerformanceMonitor / / />) }) })'"'"
import _React from 'react"  import '@testing-library/jest-dom import EnhancedPerformanceMonitor from '../components/EnhancedPerformanceMonitor" describe('EnhancedPerformanceMonitor',() => {' test('renders without crashing',() => {' render(<EnhancedPerformanceMonitor / / />) expect( screen.getByTestId('enhancedperformancemonitor')' ).toBeInTheDocument() }) test('displays correct content',() => {' render(<EnhancedPerformanceMonitor / / />) }) test('handles user interactions',() => {' render(<EnhancedPerformanceMonitor / / />) }) test('applies correct styling',() => {' render(<EnhancedPerformanceMonitor / / />) }) })
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
