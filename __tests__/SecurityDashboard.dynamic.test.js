<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import SecurityDashboarddynamic from '../components/SecurityDashboard.dynamic'; describe('SecurityDashboarddynamic',() => { test('renders without crashing',() => { render(<SecurityDashboarddynamic />); expect(screen.getByTestId('securitydashboard.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SecurityDashboarddynamic />)}); test('handles user interactions',() => { render(<SecurityDashboarddynamic />)}); test('applies correct styling',() => { render(<SecurityDashboarddynamic />)})});
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import SecurityDashboarddynamic from "../components/SecurityDashboard.dynamic";

    render(<SecurityDashboarddynamic />);
    expect(screen.getByTestId('securitydashboard.dynamic')).toBeInTheDocument()})';
  test('displays correct content', () => {
    render(<SecurityDashboarddynamic />);
    // Add specific content tests based on component});
  test('handles user interactions', () => {
    render(<SecurityDashboarddynamic />);
    // Add interaction tests based on component functionality});
  test('applies correct styling', () => {

    render(<SecurityDashboarddynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SecurityDashboarddynamic from "./components/SecurityDashboard.dynamic"; describe("SecurityDashboarddynamic",() => { test("renders without crashing",() => { render(<SecurityDashboarddynamic />); expect(screen.getByTestId("securitydashboard.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SecurityDashboarddynamic />)}); test("handles user interactions",() => { render(<SecurityDashboarddynamic />)}); test("applies correct styling",() => { render(<SecurityDashboarddynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import SecurityDashboarddynamic from '../components/SecurityDashboard.dynamic'; describe('SecurityDashboarddynamic',() => { test('renders without crashing',() => { render(<SecurityDashboarddynamic />); expect(screen.getByTestId('securitydashboard.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SecurityDashboarddynamic />)}); test('handles user interactions',() => { render(<SecurityDashboarddynamic />)}); test('applies correct styling',() => { render(<SecurityDashboarddynamic />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
