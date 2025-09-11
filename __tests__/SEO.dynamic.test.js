<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import SEOdynamic from '../components/SEO.dynamic'; describe('SEOdynamic',() => { test('renders without crashing',() => { render(<SEOdynamic />); expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOdynamic />)}); test('handles user interactions',() => { render(<SEOdynamic />)}); test('applies correct styling',() => { render(<SEOdynamic />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
import React from 'react';

import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
import SEO from '../components / SEO.dynamic';
describe ('SEO', () => {
  test ('renders without crashing', () => {
    render (<SEO />);
    expect (screen.getByTestId ('seo')).toBeInTheDocument ();

  });
});
=======
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEOdynamic from '../components/SEO && SEO.dynamic'
describe('SEOdynamic'
  test('renders without crashing'
    expect(screen && screen.getByTestId('seo ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOdynamic from "./components/SEO ; describe('SEOdynamic', () => { test("renders without crashing",() => { render(<SEOdynamic />); expect(screen && screen.getByTestId("seo && seo.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOdynamic />)}); test("handles user interactions",() => { render(<SEOdynamic />)}); test("applies correct styling"

=======
=======
import _React from 'react';  import '@testing-library/jest-dom'; import SEOdynamic from '../components/SEO.dynamic'; describe('SEOdynamic',() => { test('renders without crashing',() => { render(<SEOdynamic />); expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOdynamic />)}); test('handles user interactions',() => { render(<SEOdynamic />)}); test('applies correct styling',() => { render(<SEOdynamic />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEO from '../components/SEO.dynamic';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

describe('SEO', () => {  test('renders without crashing', () => {
    render(<SEO />);'
    expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument();
  });'
  test('displays correct content', () => {
    render(<SEO />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });'
  test('handles user interactions', () => {
    render(<SEO />);
    // Add interaction tests here
  });'
  test('applies correct styling', () => {
    render(<SEO />);
    // Add styling tests here
  });
});
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
=======
});=======

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
