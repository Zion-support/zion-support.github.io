<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import PWARegistrationdynamic from '../components/PWARegistration.dynamic'; describe('PWARegistrationdynamic',() => { test('renders without crashing',() => { render(<PWARegistrationdynamic />); expect(screen.getByTestId('pwaregistration.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<PWARegistrationdynamic />)}); test('handles user interactions',() => { render(<PWARegistrationdynamic />)}); test('applies correct styling',() => { render(<PWARegistrationdynamic />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PWARegistrationdynamic from '../components/PWARegistration.dynamic';
describe('PWARegistrationdynamic', () => {
  test('renders without crashing', () => {
    render(<PWARegistrationdynamic />);
    expect(screen.getByTestId('pwaregistration.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<PWARegistrationdynamic />);
  });
  test('handles user interactions', () => {
    render(<PWARegistrationdynamic />);
  });
  test('applies correct styling', () => {
    render(<PWARegistrationdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import PWARegistrationdynamic from "./components/PWARegistration.dynamic"; describe("PWARegistrationdynamic",() => { test("renders without crashing",() => { render(<PWARegistrationdynamic />); expect(screen.getByTestId("pwaregistration.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<PWARegistrationdynamic />)}); test("handles user interactions",() => { render(<PWARegistrationdynamic />)}); test("applies correct styling",() => { render(<PWARegistrationdynamic />)})});''"
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import PWARegistrationdynamic from '../components/PWARegistration.dynamic'; describe('PWARegistrationdynamic',() => { test('renders without crashing',() => { render(<PWARegistrationdynamic />); expect(screen.getByTestId('pwaregistration.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<PWARegistrationdynamic />)}); test('handles user interactions',() => { render(<PWARegistrationdynamic />)}); test('applies correct styling',() => { render(<PWARegistrationdynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import PWARegistrationdynamic from '../components/PWARegistration.dynamic'; describe('PWARegistrationdynamic',() => { test('renders without crashing',() => { render(<PWARegistrationdynamic />); expect(screen.getByTestId('pwaregistration.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<PWARegistrationdynamic />)}); test('handles user interactions',() => { render(<PWARegistrationdynamic />)}); test('applies correct styling',() => { render(<PWARegistrationdynamic />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PWARegistration from '../components/PWARegistration.dynamic';

describe('PWARegistration', () => {
  test('renders without crashing', () => {
    render(<PWARegistration />);
    expect(screen.getByTestId('pwa-registration')).toBeInTheDocument();
  });
});
>>>>>>> origin/main
