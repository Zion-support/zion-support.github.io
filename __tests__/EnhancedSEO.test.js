<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react"  import '@testing-library/jest-dom import EnhancedSEO from '../components/EnhancedSEO" describe('EnhancedSEO',() => {' test('renders without crashing',() => {' render(<EnhancedSEO / / />) expect(screen.getByTestId("enhancedseo")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<EnhancedSEO / / />) }) test('handles user interactions',() => {' render(<EnhancedSEO / / />) }) test('applies correct styling',() => {' render(<EnhancedSEO / / />) }) })
=======
<<<<<<< HEAD
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import EnhancedSEO from "./components/EnhancedSEO" describe("EnhancedSEO",() => {" test("renders without crashing",() => {" render(<EnhancedSEO / / />) expect(screen.getByTestId("enhancedseo")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<EnhancedSEO / / />) }) test("handles user interactions",() => {" render(<EnhancedSEO / / />) }) test("applies correct styling",() => {" render(<EnhancedSEO / / />) }) })'"'"
import _React from 'react"  import '@testing-library/jest-dom import EnhancedSEO from '../components/EnhancedSEO" describe('EnhancedSEO',() => {' test('renders without crashing',() => {' render(<EnhancedSEO / / />) expect(screen.getByTestId("enhancedseo")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<EnhancedSEO / / />) }) test('handles user interactions',() => {' render(<EnhancedSEO / / />) }) test('applies correct styling',() => {' render(<EnhancedSEO / / />) }) })
=======
import _React from 'react"  import '@testing-library/jest-dom import EnhancedSEO from '../components/EnhancedSEO" describe('EnhancedSEO',() => {' test('renders without crashing',() => {' render(<EnhancedSEO / / />) expect(screen.getByTestId("enhancedseo")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<EnhancedSEO / / />) }) test('handles user interactions',() => {' render(<EnhancedSEO / / />) }) test('applies correct styling',() => {' render(<EnhancedSEO / / />) }) })
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedSEO from '../components/EnhancedSEO';

describe('EnhancedSEO', () => {
  test('renders without crashing', () => {
    render(<EnhancedSEO />);
    expect(screen.getByTestId('enhancedseo')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<EnhancedSEO />);
  });

  test('handles user interactions', () => {
    render(<EnhancedSEO />);
  });

  test('applies correct styling', () => {
    render(<EnhancedSEO />);
  });
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
