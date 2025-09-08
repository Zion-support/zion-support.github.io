import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import PWAUpdater from '../components/PWAUpdater';'
describe('PWAUpdater', () => {test('renders without crashing', () => {render(<PWAUpdater />)expect(screen.getByTestId('pwaupdater')).toBeInTheDocument()})test('displays correct content', () => {render(<PWAUpdater />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<PWAUpdater />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<PWAUpdater />)// Add styling tests here;'
  })})