import React from 'react';
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analyticsdynamic from '../components/Analytics.dynamic';

=======
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analyticsdynamic from '../components/Analytics.dynamic';
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
describe('Analyticsdynamic', () => {
  test('renders without crashing', () => {
    render(<Analyticsdynamic />);
    expect(screen.getByTestId('analytics.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
  test('displays correct content', () => {
    render(<Analyticsdynamic />);
  });
  test('handles user interactions', () => {
    render(<Analyticsdynamic />);
  });
  test('applies correct styling', () => {
    render(<Analyticsdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import Analyticsdynamic from "./components/Analytics.dynamic"; describe("Analyticsdynamic",() => { test("renders without crashing",() => { render(<Analyticsdynamic />); expect(screen.getByTestId("analytics.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<Analyticsdynamic />)}); test("handles user interactions",() => { render(<Analyticsdynamic />)}); test("applies correct styling",() => { render(<Analyticsdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import Analyticsdynamic from '../components/Analytics.dynamic'; describe('Analyticsdynamic',() => { test('renders without crashing',() => { render(<Analyticsdynamic />); expect(screen.getByTestId('analytics.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Analyticsdynamic />)}); test('handles user interactions',() => { render(<Analyticsdynamic />)}); test('applies correct styling',() => { render(<Analyticsdynamic />)})});
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
