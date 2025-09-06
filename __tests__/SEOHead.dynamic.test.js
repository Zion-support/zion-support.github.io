<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';  import '@testing-library/jest-dom'; import SEOHeaddynamic from '../components/SEOHead.dynamic'; describe('SEOHeaddynamic',() => { test('renders without crashing',() => { render(<SEOHeaddynamic />); expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOHeaddynamic />)}); test('handles user interactions',() => { render(<SEOHeaddynamic />)}); test('applies correct styling',() => { render(<SEOHeaddynamic />)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import _React from 'react';  import '@testing-library/jest-dom'; import SEOHeaddynamic from '../components/SEOHead.dynamic'; describe('SEOHeaddynamic',() => { test('renders without crashing',() => { render(<SEOHeaddynamic />); expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOHeaddynamic />)}); test('handles user interactions',() => { render(<SEOHeaddynamic />)}); test('applies correct styling',() => { render(<SEOHeaddynamic />)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEOHeaddynamic from '../components/SEOHead && SEOHead.dynamic'
describe('SEOHeaddynamic'
  test('renders without crashing'
    expect(screen.getByTestId('seohead.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe('SEOHeaddynamic', () => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling"
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
