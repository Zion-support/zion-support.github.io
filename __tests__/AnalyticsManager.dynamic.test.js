<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic'; describe('AnalyticsManagerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsManagerdynamic />); expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsManagerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsManagerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsManagerdynamic />)})});
=======
<<<<<<< HEAD
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
=======
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic'; describe('AnalyticsManagerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsManagerdynamic />); expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsManagerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsManagerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsManagerdynamic />)})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
