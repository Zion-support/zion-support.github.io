import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import TrustScoreBadge from '../components/TrustScoreBadge';'
describe('TrustScoreBadge', () => {test('renders without crashing', () => {render(<TrustScoreBadge />)expect(screen.getByTestId('trustscorebadge')).toBeInTheDocument()})test('displays correct content', () => {render(<TrustScoreBadge />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<TrustScoreBadge />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<TrustScoreBadge />)// Add styling tests here;'
  })})