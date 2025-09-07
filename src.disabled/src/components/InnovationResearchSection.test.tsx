import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import InnovationResearchSection from '../components/InnovationResearchSection';'
describe('InnovationResearchSection', () => {test('renders without crashing', () => {render(<InnovationResearchSection />)expect(screen.getByTestId('innovationresearchsection')).toBeInTheDocument()})test('displays correct content', () => {render(<InnovationResearchSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<InnovationResearchSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<InnovationResearchSection />)// Add styling tests here;'
  })})