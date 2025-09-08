import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import TeamExpertiseSection from '../components/TeamExpertiseSection';'
describe('TeamExpertiseSection', () => {test('renders without crashing', () => {render(<TeamExpertiseSection />)expect(screen.getByTestId('teamexpertisesection')).toBeInTheDocument()})test('displays correct content', () => {render(<TeamExpertiseSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<TeamExpertiseSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<TeamExpertiseSection />)// Add styling tests here;'
  })})