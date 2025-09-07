<<<<<<< HEAD
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
<<<<<<< HEAD
import PWARegistration from '../components/PWARegistration.dynamic';
describe("PWARegistration", () => {test("renders without crashing", () => {render(<PWARegistration />)expect(screen.getByTestId('pwa-registration')).toBeInTheDocument()})})import React from 'react';  import '@testing-library/jest-dom'; import PWARegistration from '../components/PWARegistration.dynamic'; describe('PWARegistration',() => { test('renders without crashing',() => { render(<PWARegistration />)expect(screen.getByTestId('pwaregistration')).toBeInTheDocument()})test('displays correct content',() => { render(<PWARegistration />)})test('handles user interactions',() => { render(<PWARegistration />)})test('applies correct styling',() => { render(<PWARegistration />)})})import { render, screen, fireEvent  } from '@testing-library/react';
describe('PWARegistration', () => {test('renders without crashing', () => {render(<PWARegistration />)expect(screen.getByTestId('pwaregistration')).toBeInTheDocument()})test('displays correct content', () => {render(<PWARegistration />)// Add specific content tests based on component;
  })test('handles user interactions', () => {render(<PWARegistration />)// Add interaction tests based on component functionality;
  })test('applies correct styling', () => {render(<PWARegistration />)// Add styling tests if needed;
  })})
=======
import PWARegistrationdynamic from '../components/PWARegistration.dynamic';

describe('PWARegistrationdynamic', () => {
  test('renders without crashing', () => {
    render(<PWARegistrationdynamic />);
    expect(screen.getByTestId('pwaregistration.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<PWARegistrationdynamic />);
    // Add specific content tests based on component
  });

  test('handles user interactions', () => {
    render(<PWARegistrationdynamic />);
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {
    render(<PWARegistrationdynamic />);
    // Add styling tests if needed
  });
});
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
