import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import UltimateZionServicesMarketing from '../components/UltimateZionServicesMarketing';'
describe('UltimateZionServicesMarketing', () => {test('renders without crashing', () => {render(<UltimateZionServicesMarketing />)expect(screen.getByTestId('ultimatezionservicesmarketing')).toBeInTheDocument()})test('displays correct content', () => {render(<UltimateZionServicesMarketing />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<UltimateZionServicesMarketing />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<UltimateZionServicesMarketing />)// Add styling tests here;'
  })})