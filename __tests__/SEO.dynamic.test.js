<<<<<<< HEAD
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEOdynamic from '../components/SEO.dynamic'
describe('SEOdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('seo.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOdynamic from "./components/SEO.dynamic"; describe('SEOdynamic', () => { test("renders without crashing",() => { render(<SEOdynamic />); expect(screen.getByTestId("seo.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOdynamic />)}); test("handles user interactions",() => { render(<SEOdynamic />)}); test("applies correct styling"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import SEOdynamic from '../components/SEO.dynamic'; describe('SEOdynamic',() => { test('renders without crashing',() => { render(<SEOdynamic />); expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOdynamic />)}); test('handles user interactions',() => { render(<SEOdynamic />)}); test('applies correct styling',() => { render(<SEOdynamic />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOdynamic from '../components/SEO.dynamic';
describe('SEOdynamic', () => {
  test('renders without crashing', () => {
    render(<SEOdynamic />);
    expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<SEOdynamic />);
  });
  test('handles user interactions', () => {
    render(<SEOdynamic />);
  });
  test('applies correct styling', () => {
    render(<SEOdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOdynamic from "./components/SEO.dynamic"; describe("SEOdynamic",() => { test("renders without crashing",() => { render(<SEOdynamic />); expect(screen.getByTestId("seo.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOdynamic />)}); test("handles user interactions",() => { render(<SEOdynamic />)}); test("applies correct styling",() => { render(<SEOdynamic />)})});''"
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import SEOdynamic from '../components/SEO.dynamic'; describe('SEOdynamic',() => { test('renders without crashing',() => { render(<SEOdynamic />); expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOdynamic />)}); test('handles user interactions',() => { render(<SEOdynamic />)}); test('applies correct styling',() => { render(<SEOdynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import SEOdynamic from '../components/SEO.dynamic'; describe('SEOdynamic',() => { test('renders without crashing',() => { render(<SEOdynamic />); expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOdynamic />)}); test('handles user interactions',() => { render(<SEOdynamic />)}); test('applies correct styling',() => { render(<SEOdynamic />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
