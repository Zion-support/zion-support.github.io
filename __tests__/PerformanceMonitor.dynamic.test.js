import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
<<<<<<< HEAD
import PerformanceMonitordynamic from '../components/PerformanceMonitor.dynamic';

describe('PerformanceMonitordynamic', () => {
  test('renders without crashing', () => {
    render(<PerformanceMonitordynamic />);
    expect(
      screen.getByTestId('performancemonitor.dynamic')
    ).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<PerformanceMonitordynamic />);
    // Add specific content tests based on component
  });

  test('handles user interactions', () => {
    render(<PerformanceMonitordynamic />);
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {
    render(<PerformanceMonitordynamic />);
    // Add styling tests if needed
  });
});
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
import PerformanceMonitor from '../components/PerformanceMonitor.dynamic';
describe("PerformanceMonitor", () => {test("renders without crashing", () => {render(<PerformanceMonitor />)expect(screen.getByTestId('performance-monitor')).toBeInTheDocument()})})import React from 'react';  import '@testing-library/jest-dom'; import PerformanceMonitor from '../components/PerformanceMonitor.dynamic'; describe('PerformanceMonitor',() => { test('renders without crashing',() => { render(<PerformanceMonitor />)expect( screen.getByTestId('performancemonitor') ).toBeInTheDocument()})test('displays correct content',() => { render(<PerformanceMonitor />)})test('handles user interactions',() => { render(<PerformanceMonitor />)})test('applies correct styling',() => { render(<PerformanceMonitor />)})})import { render, screen, fireEvent  } from '@testing-library/react';
describe('PerformanceMonitor', () => {test('renders without crashing', () => {render(<PerformanceMonitor />)expect(screen.getByTestId('performancemonitor')).toBeInTheDocument()})test('displays correct content', () => {render(<PerformanceMonitor />)// Add specific content tests based on component;
  })test('handles user interactions', () => {render(<PerformanceMonitor />)// Add interaction tests based on component functionality;
  })test('applies correct styling', () => {render(<PerformanceMonitor />)// Add styling tests if needed;
  })})
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
