<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
import App from '../src/App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  it('has proper heading structure', () => {
    render(<App />);
<<<<<<< HEAD
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  it('has proper heading structure', () => {
    render(<App />);
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});


<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Zion Tech Group' })).toBeInTheDocument();
  });
});
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

  test('displays correct content', () => {
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
});
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
});
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
    const heading = screen.getByRole('heading'



import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
describe("App", () => {
  test("renders without crashing", () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Zion Tech Group" }),
    ).toBeInTheDocument();
  });
<<<<<<< HEAD
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  it('has proper heading structure', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  it('has proper heading structure', () => {
    render(<App />);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




});





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
