import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import UserExperienceOptimizer from '../components/UserExperienceOptimizer';'
describe('UserExperienceOptimizer', () => {test('renders without crashing', () => {render(<UserExperienceOptimizer />)expect(screen.getByTestId('userexperienceoptimizer')).toBeInTheDocument()})test('displays correct content', () => {render(<UserExperienceOptimizer />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<UserExperienceOptimizer />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<UserExperienceOptimizer />)// Add styling tests here;'
  })})