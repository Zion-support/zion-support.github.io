<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEOHeaddynamic from '../components/SEOHead && SEOHead.dynamic'
describe('SEOHeaddynamic'
  test('renders without crashing'

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOHead from '../components/SEOHead.dynamic';

describe('SEOHead', () => {
=======
import React from 'react';'
import { render, screen } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SEOHead from '../components/SEOHead.dynamic';'
describe('SEOHead', () => {'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  test('renders without crashing', () => {
    render(<SEOHead />);'
    expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument();
  });'
  test('displays correct content', () => {
    render(<SEOHead />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });'
  test('handles user interactions', () => {
    render(<SEOHead />);
    // Add interaction tests here
  });'
  test('applies correct styling', () => {
    render(<SEOHead />);
    // Add styling tests here
  });
});'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEOHeaddynamic from '../components/SEOHead.dynamic'
describe('SEOHeaddynamic'
  test('renders without crashing'
    expect(screen.getByTestId('seohead.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe('SEOHeaddynamic', () => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling"
import _React from 'react';  import '@testing-library/jest-dom'; import SEOHeaddynamic from '../components/SEOHead.dynamic'; describe('SEOHeaddynamic',() => { test('renders without crashing',() => { render(<SEOHeaddynamic />); expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOHeaddynamic />)}); test('handles user interactions',() => { render(<SEOHeaddynamic />)}); test('applies correct styling',() => { render(<SEOHeaddynamic />)})});
ursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOHeaddynamic from '../components/SEOHead.dynamic';
describe('SEOHeaddynamic', () => {
  test('renders without crashing', () => {
    render(<SEOHeaddynamic />);
    expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<SEOHeaddynamic />);
  });
  test('handles user interactions', () => {
    render(<SEOHeaddynamic />);
  });
  test('applies correct styling', () => {
    render(<SEOHeaddynamic />);
  });
});
<<<<<<< HEAD

=======
    expect(screen.getByTestId('seohead.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'

<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOHeaddynamic from '../components/SEOHead.dynamic';
describe('SEOHeaddynamic', () => {
  test('renders without crashing', () => {
    render(<SEOHeaddynamic />);
    expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<SEOHeaddynamic />);
  });
  test('handles user interactions', () => {
    render(<SEOHeaddynamic />);
  });
  test('applies correct styling', () => {
    render(<SEOHeaddynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe("SEOHeaddynamic",() => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling",() => { render(<SEOHeaddynamic />)})});''"

const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe('SEOHeaddynamic', () => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling"

=======

=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe("SEOHeaddynamic",() => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling",() => { render(<SEOHeaddynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import SEOHeaddynamic from '../components/SEOHead.dynamic'; describe('SEOHeaddynamic',() => { test('renders without crashing',() => { render(<SEOHeaddynamic />); expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOHeaddynamic />)}); test('handles user interactions',() => { render(<SEOHeaddynamic />)}); test('applies correct styling',() => { render(<SEOHeaddynamic />)})});
import _React from 'react';  import '@testing-library/jest-dom'; import SEOHeaddynamic from '../components/SEOHead.dynamic'; describe('SEOHeaddynamic',() => { test('renders without crashing',() => { render(<SEOHeaddynamic />); expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOHeaddynamic />)}); test('handles user interactions',() => { render(<SEOHeaddynamic />)}); test('applies correct styling',() => { render(<SEOHeaddynamic />)})});
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe('SEOHeaddynamic', () => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe('SEOHeaddynamic', () => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
