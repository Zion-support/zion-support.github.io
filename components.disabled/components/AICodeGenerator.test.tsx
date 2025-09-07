<<<<<<< HEAD
=======
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import AICodeGenerator from '../components/AICodeGenerator';
describe('AICodeGenerator', () => {test('renders without crashing', () => {render(<AICodeGenerator />)expect(screen.getByTestId('aicodegenerator')).toBeInTheDocument()})test('displays correct content', () => {render(<AICodeGenerator />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<AICodeGenerator />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<AICodeGenerator />)// Add styling tests here;
  })})
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
