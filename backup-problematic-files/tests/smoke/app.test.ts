import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import app from '../components/app';
describe('app', () => {test('renders without crashing', () => {render(<app />)expect(screen.getByTestId('app')).toBeInTheDocument()})test('displays correct content', () => {render(<app />)// Add specific content tests here;}
  })test('handles user interactions', () => {render(<app />)// Add interaction tests here;}
  })test('applies correct styling', () => {render(<app />)// Add styling tests here;}
  })})