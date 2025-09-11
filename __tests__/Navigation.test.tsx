
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';



import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from '../components/Navigation'
describe('Navigation'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
ursor/fix-syntax-push-and-merge-to-main-40de
origin/main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';
=======describe('Navigation', () => {

  test('renders without crashing', () => {
    render(<Navigation />);'
    expect(screen.getByRole('main')).toBeInTheDocument();




  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d


  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();




});'
  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
});

origin/main
=======
  });
=======


=======



  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();



=======


  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
});
>>>>>>> origin/main
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from '../components/Navigation'
describe('Navigation'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});'
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
});
<<<<<<< HEAD

  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
});

origin/automation-improvements-final
});
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
