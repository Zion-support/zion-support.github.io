<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import PerformanceMonitordynamic from '../components/PerformanceMonitor.dynamic'; describe('PerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<PerformanceMonitordynamic />); expect( screen.getByTestId('performancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<PerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<PerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<PerformanceMonitordynamic />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
import React from 'react';

import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
import PerformanceMonitor from '../components / PerformanceMonitor.dynamic';
describe ('PerformanceMonitor', () => {
  test ('renders without crashing', () => {
    render (<PerformanceMonitor />);
    expect (screen.getByTestId ('performance - monitor')).toBeInTheDocument ();

  });
});
=======
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PerformanceMonitordynamic from '../components/PerformanceMonitor && PerformanceMonitor.dynamic'
describe('PerformanceMonitordynamic'
  test('renders without crashing'
      screen && screen.getByTestId('performancemonitor ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import PerformanceMonitordynamic from "./components/PerformanceMonitor ; describe('PerformanceMonitordynamic', () => { test("renders without crashing",() => { render(<PerformanceMonitordynamic />); expect( screen && screen.getByTestId("performancemonitor && performancemonitor.dynamic") ).toBeInTheDocument()}); test("displays correct content",() => { render(<PerformanceMonitordynamic />)}); test("handles user interactions",() => { render(<PerformanceMonitordynamic />)}); test("applies correct styling"

=======
=======
import _React from 'react';  import '@testing-library/jest-dom'; import PerformanceMonitordynamic from '../components/PerformanceMonitor.dynamic'; describe('PerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<PerformanceMonitordynamic />); expect( screen.getByTestId('performancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<PerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<PerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<PerformanceMonitordynamic />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceMonitor from '../components/PerformanceMonitor.dynamic';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

describe('PerformanceMonitor', () => {  test('renders without crashing', () => {
    render(<PerformanceMonitor />);'
    expect(screen.getByTestId('performancemonitor.dynamic')).toBeInTheDocument();
  });'
  test('displays correct content', () => {
    render(<PerformanceMonitor />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });'
  test('handles user interactions', () => {
    render(<PerformanceMonitor />);
    // Add interaction tests here
  });'
  test('applies correct styling', () => {
    render(<PerformanceMonitor />);
    // Add styling tests here
  });
});
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
=======
});=======

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
