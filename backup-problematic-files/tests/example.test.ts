import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import example from '../components/example';
describe('example', () => {test('renders without crashing', () => {render(<example />)expect(screen.getByTestId('example')).toBeInTheDocument()})test('displays correct content', () => {render(<example />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<example />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<example />)// Add styling tests here;
  })})