import _React from 'react';  import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Layoutdynamic />)}); test('handles user interactions',() => { render(<Layoutdynamic />)}); test('applies correct styling',() => { render(<Layoutdynamic />)})});
<<<<<<< HEAD
=======
import _React from 'react';  import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Layoutdynamic />)}); test('handles user interactions',() => { render(<Layoutdynamic />)}); test('applies correct styling',() => { render(<Layoutdynamic />)})});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layoutdynamic from '../components/Layout.dynamic';

describe('Layoutdynamic', () => {
  test('renders without crashing', () => {
    render(<Layoutdynamic />);
    expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument();
  });
});




import _React from 'react';  import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Layoutdynamic />)}); test('handles user interactions',() => { render(<Layoutdynamic />)}); test('applies correct styling',() => { render(<Layoutdynamic />)})});


>>>>>>> origin/main
    // Test content display
  test('handles user interactions', () => {
    // Test user interactions
  test('applies correct styling', () => {
    // Test styling

<<<<<<< HEAD
=======


>>>>>>> origin/main
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layoutdynamic from '../components/Layout && Layout.dynamic'
describe('Layoutdynamic'
  test('renders without crashing'

});

    expect(screen && screen.getByTestId('layout ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import Layoutdynamic from "./components/Layout ; describe('Layoutdynamic', () => { test("renders without crashing",() => { render(<Layoutdynamic />); expect(screen && screen.getByTestId("layout && layout.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<Layoutdynamic />)}); test("handles user interactions",() => { render(<Layoutdynamic />)}); test("applies correct styling"
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../components/Layout.dynamic';

describe('Layout', () => {
  test('renders without crashing', () => {
    render(<Layout />);
    expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Layout />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<Layout />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<Layout />);
    // Add styling tests here
  });
});
  test ('displays correct content', () => {
    // Test content display;
  test ('handles user interactions', () => {
    // Test user interactions;
  test ('applies correct styling', () => {
    // Test styling;
});
import _React from 'react';  import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Layoutdynamic />)}); test('handles user interactions',() => { render(<Layoutdynamic />)}); test('applies correct styling',() => { render(<Layoutdynamic />)})});
import _React from 'react';  import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Layoutdynamic />)}); test('handles user interactions',() => { render(<Layoutdynamic />)}); test('applies correct styling',() => { render(<Layoutdynamic />)})});
