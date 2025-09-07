import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import InteractiveUserExperience from '../components/InteractiveUserExperience';'
describe('InteractiveUserExperience', () => {test('renders without crashing', () => {render(<InteractiveUserExperience />)expect(screen.getByTestId('interactiveuserexperience')).toBeInTheDocument()})test('displays correct content', () => {render(<InteractiveUserExperience />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<InteractiveUserExperience />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<InteractiveUserExperience />)// Add styling tests here;'
  })})