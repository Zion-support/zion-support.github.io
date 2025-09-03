

import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ContactFormdynamic from "../components/ContactForm.dynamic";

  test('renders without crashing', () => {
    render(<ContactFormDynamic />);
    expect(screen.getByTestId('contactform.dynamic')).toBeInTheDocument()})
'
  test('displays correct content', () => {
    render(<ContactFormDynamic />);

    // Add specific content tests based on component

  test('handles user interactions', () => {
    render(<ContactFormDynamic />);
    // Add interaction tests based on component functionality

    // Add styling tests if needed

  })})



