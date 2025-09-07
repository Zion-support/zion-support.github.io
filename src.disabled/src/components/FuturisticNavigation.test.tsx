import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import FuturisticNavigation from '../components/FuturisticNavigation';'
describe('FuturisticNavigation', () => {test('renders without crashing', () => {render(<FuturisticNavigation />)expect(screen.getByTestId('futuristicnavigation')).toBeInTheDocument()})test('displays correct content', () => {render(<FuturisticNavigation />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<FuturisticNavigation />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<FuturisticNavigation />)// Add styling tests here;'
  })})