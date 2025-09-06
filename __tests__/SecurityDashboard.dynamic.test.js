<<<<<<< HEAD
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SecurityDashboarddynamic from '../components/SecurityDashboard && SecurityDashboard.dynamic'
describe('SecurityDashboarddynamic'
  test('renders without crashing'
    expect(screen && screen.getByTestId('securitydashboard ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SecurityDashboarddynamic from "./components/SecurityDashboard ; describe('SecurityDashboarddynamic', () => { test("renders without crashing",() => { render(<SecurityDashboarddynamic />); expect(screen && screen.getByTestId("securitydashboard && securitydashboard.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SecurityDashboarddynamic />)}); test("handles user interactions",() => { render(<SecurityDashboarddynamic />)}); test("applies correct styling"
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SecurityDashboard from '../components/SecurityDashboard.dynamic';

describe('SecurityDashboard', () => {
  test('renders without crashing', () => {
    render(<SecurityDashboard />);
    expect(screen.getByTestId('securitydashboard.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<SecurityDashboard />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<SecurityDashboard />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<SecurityDashboard />);
    // Add styling tests here
  });
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
