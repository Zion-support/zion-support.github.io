<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';
<<<<<<< HEAD
=======

>>>>>>> origin/main
describe('Navigation', () => {
  test('renders without crashing', () => {
    render(<Navigation />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
=======
  
>>>>>>> origin/main
  test('displays correct content', () => {
    render(<Navigation />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
<<<<<<< HEAD
});
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe("Navigation",() => { test("renders without crashing",() => { render(<Navigation />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content",() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});''"
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
});
>>>>>>> origin/main
