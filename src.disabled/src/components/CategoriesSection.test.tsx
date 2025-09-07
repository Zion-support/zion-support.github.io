import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import CategoriesSection from '../components/CategoriesSection';'
describe('CategoriesSection', () => {test('renders without crashing', () => {render(<CategoriesSection />)expect(screen.getByTestId('categoriessection')).toBeInTheDocument()})test('displays correct content', () => {render(<CategoriesSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<CategoriesSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<CategoriesSection />)// Add styling tests here;'
  })})