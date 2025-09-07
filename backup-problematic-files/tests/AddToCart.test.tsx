import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCart from '../components/AddToCart';
describe('AddToCart', () => {test('renders without crashing', () => {render(<AddToCart />)expect(screen.getByTestId('addtocart')).toBeInTheDocument()})test('displays correct content', () => {render(<AddToCart />)// Add specific content tests here;}
  })test('handles user interactions', () => {render(<AddToCart />)// Add interaction tests here;}
  })test('applies correct styling', () => {render(<AddToCart />)// Add styling tests here;}
  })})