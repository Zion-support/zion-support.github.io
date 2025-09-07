import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ServicesOverview from '../components/ServicesOverview';'
describe('ServicesOverview', () => {test('renders without crashing', () => {render(<ServicesOverview />)expect(screen.getByTestId('servicesoverview')).toBeInTheDocument()})test('displays correct content', () => {render(<ServicesOverview />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ServicesOverview />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ServicesOverview />)// Add styling tests here;'
  })})