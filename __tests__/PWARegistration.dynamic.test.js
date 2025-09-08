

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PWARegistrationdynamic from '../components/PWARegistration && PWARegistration.dynamic'
describe('PWARegistrationdynamic'
  test('renders without crashing'

<<<<<<< HEAD

    expect(screen && screen.getByTestId('pwaregistration ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import PWARegistrationdynamic from "./components/PWARegistration ; describe('PWARegistrationdynamic', () => { test("renders without crashing",() => { render(<PWARegistrationdynamic />); expect(screen && screen.getByTestId("pwaregistration && pwaregistration.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<PWARegistrationdynamic />)}); test("handles user interactions",() => { render(<PWARegistrationdynamic />)}); test("applies correct styling"


  test('renders without crashing', () => {

    render(<PWARegistration />);'
    expect(screen.getByTestId('pwaregistration.dynamic')).toBeInTheDocument();
  });'
  test('displays correct content', () => {
    render(<PWARegistration />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });'
  test('handles user interactions', () => {
    render(<PWARegistration />);
    // Add interaction tests here
  });'

  test('applies correct styling', () => {
    render(<PWARegistration />);
    // Add styling tests if needed
=======
describe('PWARegistration', () => {
expect(screen && screen.getByTestId('pwaregistration ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import PWARegistrationdynamic from "./components/PWARegistration ; describe('PWARegistrationdynamic', () => { test("renders without crashing",() => { render(<PWARegistrationdynamic />); expect(screen && screen.getByTestId("pwaregistration && pwaregistration.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<PWARegistrationdynamic />)}); test("handles user interactions",() => { render(<PWARegistrationdynamic />)}); test("applies correct styling"'
describe('PWARegistration', () => {'

describe('PWARegistration', () => {
  test('renders without crashing', () => {
    render(<PWARegistration />);
    expect(screen.getByTestId('pwaregistration')).toBeInTheDocument();
>>>>>>> origin/cursor/delete-old-data-records-6bba
  });

});

<<<<<<< HEAD




=======
  });
});
>>>>>>> origin/cursor/delete-old-data-records-6bba
