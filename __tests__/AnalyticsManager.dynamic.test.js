<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic'; describe('AnalyticsManagerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsManagerdynamic />); expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsManagerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsManagerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsManagerdynamic />)})});
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic';
describe('AnalyticsManagerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsManagerdynamic />);
    expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<AnalyticsManagerdynamic />);
  });
  test('handles user interactions', () => {
    render(<AnalyticsManagerdynamic />);
  });
  test('applies correct styling', () => {
    render(<AnalyticsManagerdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AnalyticsManagerdynamic from "./components/AnalyticsManager.dynamic"; describe("AnalyticsManagerdynamic",() => { test("renders without crashing",() => { render(<AnalyticsManagerdynamic />); expect(screen.getByTestId("analyticsmanager.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<AnalyticsManagerdynamic />)}); test("handles user interactions",() => { render(<AnalyticsManagerdynamic />)}); test("applies correct styling",() => { render(<AnalyticsManagerdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic'; describe('AnalyticsManagerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsManagerdynamic />); expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsManagerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsManagerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsManagerdynamic />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
