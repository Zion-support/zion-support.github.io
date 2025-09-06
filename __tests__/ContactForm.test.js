<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  test('renders without crashing', () => {
    render(<ContactForm />);
    expect(screen.getByTestId('contactform')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<ContactForm />);
  });

  test('handles user interactions', () => {
    render(<ContactForm />);
  });

  test('applies correct styling', () => {
    render(<ContactForm />);
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
import _React from 'react"  import '@testing-library/jest-dom import ContactForm from '../components/ContactForm" describe('ContactForm',() => {' test('renders without crashing',() => {' render(<ContactForm / / />) expect(screen.getByTestId("contactform")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<ContactForm / / />) }) test('handles user interactions',() => {' render(<ContactForm / / />) }) test('applies correct styling',() => {' render(<ContactForm / / />) }) })
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
