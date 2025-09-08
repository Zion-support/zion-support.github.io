import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SkipLink from '../components/SkipLink';'
describe('SkipLink', () => {test('renders without crashing', () => {render(<SkipLink />)expect(screen.getByTestId('skiplink')).toBeInTheDocument()})test('displays correct content', () => {render(<SkipLink />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SkipLink />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SkipLink />)// Add styling tests here;'
  })})