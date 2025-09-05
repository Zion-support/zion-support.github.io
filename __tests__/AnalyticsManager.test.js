<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import AnalyticsManager from "./components/AnalyticsManager" describe("AnalyticsManager",() => {" test("renders without crashing",() => {" render(<AnalyticsManager / / />) expect(screen.getByTestId("analyticsmanager")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<AnalyticsManager / / />) }) test("handles user interactions",() => {" render(<AnalyticsManager / / />) }) test("applies correct styling",() => {" render(<AnalyticsManager / / />) }) })'"'"
=======
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import AnalyticsManager from '../components/AnalyticsManager';';
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManager from '../components/AnalyticsManager';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

describe('AnalyticsManager', () => {
  test('renders without crashing', () => {
    render(<AnalyticsManager />);
    expect(screen.getByTestId('analyticsmanager')).toBeInTheDocument();
  });
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
