

<<<<<<< HEAD
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic';

describe('AnalyticsTrackerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsTrackerdynamic />);
    expect(screen.getByTestId('analyticstracker.dynamic')).toBeInTheDocument();

<<<<<<< HEAD


>>>>>>> origin/main
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic'
describe('AnalyticsTrackerdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('analyticstracker.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AnalyticsTrackerdynamic from "./components/AnalyticsTracker.dynamic"; describe('AnalyticsTrackerdynamic', () => { test("renders without crashing",() => { render(<AnalyticsTrackerdynamic />); expect(screen.getByTestId("analyticstracker.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<AnalyticsTrackerdynamic />)}); test("handles user interactions",() => { render(<AnalyticsTrackerdynamic />)}); test("applies correct styling"
<<<<<<< HEAD
=======
});
});
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic'; describe('AnalyticsTrackerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsTrackerdynamic />); expect(screen.getByTestId('analyticstracker.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsTrackerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsTrackerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsTrackerdynamic />)})});
>>>>>>> origin/main
