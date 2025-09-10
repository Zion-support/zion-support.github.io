import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import TechnologyStackSection from '../components/TechnologyStackSection';'
describe('TechnologyStackSection', () => {test('renders without crashing', () => {render(<TechnologyStackSection />)expect(screen.getByTestId('technologystacksection')).toBeInTheDocument()})test('displays correct content', () => {render(<TechnologyStackSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<TechnologyStackSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<TechnologyStackSection />)// Add styling tests here;'
  })})