import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import FuturisticServicesShowcase from '../components/FuturisticServicesShowcase';'
describe('FuturisticServicesShowcase', () => {test('renders without crashing', () => {render(<FuturisticServicesShowcase />)expect(screen.getByTestId('futuristicservicesshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<FuturisticServicesShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<FuturisticServicesShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<FuturisticServicesShowcase />)// Add styling tests here;'
  })})