import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import GradientHeading from '../components/GradientHeading';'
describe('GradientHeading', () => {test('renders without crashing', () => {render(<GradientHeading />)expect(screen.getByTestId('gradientheading')).toBeInTheDocument()})test('displays correct content', () => {render(<GradientHeading />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<GradientHeading />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<GradientHeading />)// Add styling tests here;'
  })})