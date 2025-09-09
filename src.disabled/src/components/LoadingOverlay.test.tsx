import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import LoadingOverlay from '../components/LoadingOverlay';'
describe('LoadingOverlay', () => {test('renders without crashing', () => {render(<LoadingOverlay />)expect(screen.getByTestId('loadingoverlay')).toBeInTheDocument()})test('displays correct content', () => {render(<LoadingOverlay />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<LoadingOverlay />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<LoadingOverlay />)// Add styling tests here;'
  })})