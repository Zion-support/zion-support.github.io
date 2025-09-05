<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Button from "./components/Button" describe("Button",() => {" test("renders without crashing",() => {" render(<Button / / />) expect(screen.getByTestId("button")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Button / / />) }) test("handles user interactions",() => {" render(<Button / / />) }) test("applies correct styling",() => {" render(<Button / / />) }) })'"'"
=======
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Button from '../components/Button';';
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

describe('Button', () => {
  test('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
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
