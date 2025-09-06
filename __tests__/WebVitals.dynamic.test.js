
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import WebVitalsdynamic from '../components/WebVitals && WebVitals.dynamic'
describe('WebVitalsdynamic'
  test('renders without crashing'

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebVitals from '../components/WebVitals.dynamic';

describe('WebVitals', () => {
=======
import React from 'react';'
import { render, screen } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import WebVitals from '../components/WebVitals.dynamic';'
describe('WebVitals', () => {'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  test('renders without crashing', () => {
    render(<WebVitals />);'
    expect(screen.getByTestId('webvitals.dynamic')).toBeInTheDocument();
  });'
  test('displays correct content', () => {
    render(<WebVitals />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });'
  test('handles user interactions', () => {
    render(<WebVitals />);
    // Add interaction tests here
  });'
  test('applies correct styling', () => {
    render(<WebVitals />);
    // Add styling tests here
  });
});'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import WebVitalsdynamic from '../components/WebVitals.dynamic'
describe('WebVitalsdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('webvitals.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
<<<<<<< HEAD
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import WebVitalsdynamic from "./components/WebVitals.dynamic"; describe('WebVitalsdynamic', () => { test("renders without crashing",() => { render(<WebVitalsdynamic />); expect(screen.getByTestId("webvitals.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<WebVitalsdynamic />)}); test("handles user interactions",() => { render(<WebVitalsdynamic />)}); test("applies correct styling"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import WebVitalsdynamic from '../components/WebVitals.dynamic'; describe('WebVitalsdynamic',() => { test('renders without crashing',() => { render(<WebVitalsdynamic />); expect(screen.getByTestId('webvitals.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<WebVitalsdynamic />)}); test('handles user interactions',() => { render(<WebVitalsdynamic />)}); test('applies correct styling',() => { render(<WebVitalsdynamic />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebVitalsdynamic from '../components/WebVitals.dynamic';
describe('WebVitalsdynamic', () => {
  test('renders without crashing', () => {
    render(<WebVitalsdynamic />);
    expect(screen.getByTestId('webvitals.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<WebVitalsdynamic />);
  });
  test('handles user interactions', () => {
    render(<WebVitalsdynamic />);
  });
  test('applies correct styling', () => {
    render(<WebVitalsdynamic />);
  });
});
<<<<<<< HEAD

=======
    expect(screen.getByTestId('webvitals.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'

<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebVitalsdynamic from '../components/WebVitals.dynamic';
describe('WebVitalsdynamic', () => {
  test('renders without crashing', () => {
    render(<WebVitalsdynamic />);
    expect(screen.getByTestId('webvitals.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<WebVitalsdynamic />);
  });
  test('handles user interactions', () => {
    render(<WebVitalsdynamic />);
  });
  test('applies correct styling', () => {
    render(<WebVitalsdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import WebVitalsdynamic from "./components/WebVitals.dynamic"; describe("WebVitalsdynamic",() => { test("renders without crashing",() => { render(<WebVitalsdynamic />); expect(screen.getByTestId("webvitals.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<WebVitalsdynamic />)}); test("handles user interactions",() => { render(<WebVitalsdynamic />)}); test("applies correct styling",() => { render(<WebVitalsdynamic />)})});''"

const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import WebVitalsdynamic from "./components/WebVitals.dynamic"; describe('WebVitalsdynamic', () => { test("renders without crashing",() => { render(<WebVitalsdynamic />); expect(screen.getByTestId("webvitals.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<WebVitalsdynamic />)}); test("handles user interactions",() => { render(<WebVitalsdynamic />)}); test("applies correct styling"

=======

=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import WebVitalsdynamic from "./components/WebVitals.dynamic"; describe("WebVitalsdynamic",() => { test("renders without crashing",() => { render(<WebVitalsdynamic />); expect(screen.getByTestId("webvitals.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<WebVitalsdynamic />)}); test("handles user interactions",() => { render(<WebVitalsdynamic />)}); test("applies correct styling",() => { render(<WebVitalsdynamic />)})});''"
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import WebVitalsdynamic from '../components/WebVitals.dynamic'; describe('WebVitalsdynamic',() => { test('renders without crashing',() => { render(<WebVitalsdynamic />); expect(screen.getByTestId('webvitals.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<WebVitalsdynamic />)}); test('handles user interactions',() => { render(<WebVitalsdynamic />)}); test('applies correct styling',() => { render(<WebVitalsdynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import WebVitalsdynamic from '../components/WebVitals.dynamic'; describe('WebVitalsdynamic',() => { test('renders without crashing',() => { render(<WebVitalsdynamic />); expect(screen.getByTestId('webvitals.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<WebVitalsdynamic />)}); test('handles user interactions',() => { render(<WebVitalsdynamic />)}); test('applies correct styling',() => { render(<WebVitalsdynamic />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import WebVitalsdynamic from "./components/WebVitals.dynamic"; describe('WebVitalsdynamic', () => { test("renders without crashing",() => { render(<WebVitalsdynamic />); expect(screen.getByTestId("webvitals.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<WebVitalsdynamic />)}); test("handles user interactions",() => { render(<WebVitalsdynamic />)}); test("applies correct styling"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
