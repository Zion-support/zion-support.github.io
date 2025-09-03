
<<<<<<< HEAD
import React from 'react;
=======
<<<<<<< HEAD
import React from 'react';
>>>>>>> main
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import AIChatbottest from "../components/AIChatbot.test";
<<<<<<< HEAD

describe('AIChatbottest, () => {
  test('renders without crashing', () => {
    render(<AIChatbottest />);
    expect(screen.getByTestId(aichatbot.test')).toBeInTheDocument()});
  test('displays correct content, () => {
    render(<AIChatbottest />);
    // Add specific content tests based on component
  });
  test('handles user interactions', () => {
    render(<AIChatbottest />);
    // Add interaction tests based on component functionality
  });
  test(applies correct styling', () => {
=======
  describe('AIChatbottest', () => {
  test('renders without crashing', () => {
    render(<AIChatbottest />);
    expect(screen.getByTestId('aichatbot.test')).toBeInTheDocument()})';
  test('displays correct content', () => {
    render(<AIChatbottest />);
    // Add specific content tests based on component;
  });
  test('handles user interactions', () => {
    render(<AIChatbottest />);
    // Add interaction tests based on component functionality;
  });
  test('applies correct styling', () => {
>>>>>>> main
    render(<AIChatbottest />);
    // Add styling tests if needed;
  })});
=======
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AIChatbottest from '../components/AIChatbot.test'
describe('AIChatbottest', () => {
  test('renders without crashing', () => {
    render(<AIChatbottest />)
    expect(screen.getByTestId('aichatbot.test')).toBeInTheDocument()
  })
  test('displays correct content', () => {
    render(<AIChatbottest />)
    // Add specific content tests based on component
  })
  test('handles user interactions', () => {
    render(<AIChatbottest />)
    // Add interaction tests based on component functionality
  })
  test('applies correct styling', () => {
    render(<AIChatbottest />)
    // Add styling tests if needed
<<<<<<< HEAD
  });
});
=======
  })
})
>>>>>>> main
>>>>>>> main
