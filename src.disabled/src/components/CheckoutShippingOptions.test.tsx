import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import CheckoutShippingOptions from '../components/CheckoutShippingOptions';'
describe('CheckoutShippingOptions', () => {test('renders without crashing', () => {render(<CheckoutShippingOptions />)expect(screen.getByTestId('checkoutshippingoptions')).toBeInTheDocument()})test('displays correct content', () => {render(<CheckoutShippingOptions />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<CheckoutShippingOptions />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<CheckoutShippingOptions />)// Add styling tests here;'
  })})