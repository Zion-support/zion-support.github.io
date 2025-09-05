<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analytics from '../components/Analytics';

describe('Analytics', () => {
  test('renders without crashing', () => {
    render(<Analytics />);
    expect(screen.getByTestId('analytics')).toBeInTheDocument();
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Analytics from "./components/Analytics" describe("Analytics",() => {" test("renders without crashing",() => {" render(<Analytics / / />) expect(screen.getByTestId("analytics")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Analytics / / />) }) test("handles user interactions",() => {" render(<Analytics / / />) }) test("applies correct styling",() => {" render(<Analytics / / />) }) })'"'"
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Analytics from '../components/Analytics';';
describe('Analytics', () => {'}
  test('renders without crashing', () => {'}
    render(<Analytics />);,
    expect(screen.getByTestId('analytics')).toBeInTheDocument();';,
  });,
  test('displays correct content', () => {'}
    render(<Analytics />);,
  });,
  test('handles user interactions', () => {'}
    render(<Analytics />);,
  });,
  test('applies correct styling', () => {'}
    render(<Analytics />);,
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  });
});