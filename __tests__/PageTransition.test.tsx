<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageTransition from "../components/PageTransition";
describe("PageTransition", () => {
  test("renders without crashing", () => {
    render(<PageTransition />);
    expect(screen.getByTestId("page-transition")).toBeInTheDocument();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  });
});
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
