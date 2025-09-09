import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import TechSolutionsSection from '../components/TechSolutionsSection';'
describe('TechSolutionsSection', () => {test('renders without crashing', () => {render(<TechSolutionsSection />)expect(screen.getByTestId('techsolutionssection')).toBeInTheDocument()})test('displays correct content', () => {render(<TechSolutionsSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<TechSolutionsSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<TechSolutionsSection />)// Add styling tests here;'
  })})