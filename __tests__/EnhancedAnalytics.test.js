<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedAnalytics from '../components/EnhancedAnalytics';

describe('EnhancedAnalytics', () => {
  test('renders without crashing', () => {
    render(<EnhancedAnalytics />);
    expect(screen.getByTestId('enhancedanalytics')).toBeInTheDocument();
  });
});
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import EnhancedAnalytics from "./components/EnhancedAnalytics" describe("EnhancedAnalytics",() => {" test("renders without crashing",() => {" render(<EnhancedAnalytics / / />) expect(screen.getByTestId("enhancedanalytics")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<EnhancedAnalytics / / />) }) test("handles user interactions",() => {" render(<EnhancedAnalytics / / />) }) test("applies correct styling",() => {" render(<EnhancedAnalytics / / />) }) })'"'"
import _React from 'react"  import '@testing-library/jest-dom import EnhancedAnalytics from '../components/EnhancedAnalytics" describe('EnhancedAnalytics',() => {' test('renders without crashing',() => {' render(<EnhancedAnalytics / / />) expect(screen.getByTestId("enhancedanalytics")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<EnhancedAnalytics / / />) }) test('handles user interactions',() => {' render(<EnhancedAnalytics / / />) }) test('applies correct styling',() => {' render(<EnhancedAnalytics / / />) }) })
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
