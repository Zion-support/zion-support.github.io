import React from 'react';
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic';

=======
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic';
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
describe('AnalyticsManagerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsManagerdynamic />);
    expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
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
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
