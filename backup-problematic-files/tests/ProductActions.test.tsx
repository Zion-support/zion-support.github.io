import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductActions from '../components/ProductActions';
describe('ProductActions', () => {test('renders without crashing', () => {render(<ProductActions />)expect(screen.getByTestId('productactions')).toBeInTheDocument()})test('displays correct content', () => {render(<ProductActions />)// Add specific content tests here;}
  })test('handles user interactions', () => {render(<ProductActions />)// Add interaction tests here;}
  })test('applies correct styling', () => {render(<ProductActions />)// Add styling tests here;}
  })})