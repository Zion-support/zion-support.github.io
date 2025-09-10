<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import Analyticsdynamic from '../components/Analytics.dynamic'; describe('Analyticsdynamic',() => { test('renders without crashing',() => { render(<Analyticsdynamic />); expect(screen.getByTestId('analytics.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Analyticsdynamic />)}); test('handles user interactions',() => { render(<Analyticsdynamic />)}); test('applies correct styling',() => { render(<Analyticsdynamic />)})});
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import Analyticsdynamic from "../components/Analytics.dynamic";

    render(<Analyticsdynamic />);
    expect(screen.getByTestId('analytics.dynamic')).toBeInTheDocument()})';
  test('displays correct content', () => {
    render(<Analyticsdynamic />);
    // Add specific content tests based on component});
  test('handles user interactions', () => {
    render(<Analyticsdynamic />);
    // Add interaction tests based on component functionality});
  test('applies correct styling', () => {

    render(<Analyticsdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import Analyticsdynamic from "./components/Analytics.dynamic"; describe("Analyticsdynamic",() => { test("renders without crashing",() => { render(<Analyticsdynamic />); expect(screen.getByTestId("analytics.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<Analyticsdynamic />)}); test("handles user interactions",() => { render(<Analyticsdynamic />)}); test("applies correct styling",() => { render(<Analyticsdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import Analyticsdynamic from '../components/Analytics.dynamic'; describe('Analyticsdynamic',() => { test('renders without crashing',() => { render(<Analyticsdynamic />); expect(screen.getByTestId('analytics.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Analyticsdynamic />)}); test('handles user interactions',() => { render(<Analyticsdynamic />)}); test('applies correct styling',() => { render(<Analyticsdynamic />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
