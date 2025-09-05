<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic'; describe('AnalyticsTrackerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsTrackerdynamic />); expect(screen.getByTestId('analyticstracker.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsTrackerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsTrackerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsTrackerdynamic />)})});
=======
<<<<<<< HEAD
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic';

describe('AnalyticsTrackerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsTrackerdynamic />);
    expect(screen.getByTestId('analyticstracker.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
  test('displays correct content', () => {
    render(<AnalyticsTrackerdynamic />);
  });
  test('handles user interactions', () => {
    render(<AnalyticsTrackerdynamic />);
  });
  test('applies correct styling', () => {
    render(<AnalyticsTrackerdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AnalyticsTrackerdynamic from "./components/AnalyticsTracker.dynamic"; describe("AnalyticsTrackerdynamic",() => { test("renders without crashing",() => { render(<AnalyticsTrackerdynamic />); expect(screen.getByTestId("analyticstracker.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<AnalyticsTrackerdynamic />)}); test("handles user interactions",() => { render(<AnalyticsTrackerdynamic />)}); test("applies correct styling",() => { render(<AnalyticsTrackerdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic'; describe('AnalyticsTrackerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsTrackerdynamic />); expect(screen.getByTestId('analyticstracker.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsTrackerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsTrackerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsTrackerdynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic'; describe('AnalyticsTrackerdynamic',() => { test('renders without crashing',() => { render(<AnalyticsTrackerdynamic />); expect(screen.getByTestId('analyticstracker.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<AnalyticsTrackerdynamic />)}); test('handles user interactions',() => { render(<AnalyticsTrackerdynamic />)}); test('applies correct styling',() => { render(<AnalyticsTrackerdynamic />)})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
