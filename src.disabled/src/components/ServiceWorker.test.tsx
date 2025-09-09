import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ServiceWorker from '../components/ServiceWorker';'
describe('ServiceWorker', () => {test('renders without crashing', () => {render(<ServiceWorker />)expect(screen.getByTestId('serviceworker')).toBeInTheDocument()})test('displays correct content', () => {render(<ServiceWorker />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ServiceWorker />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ServiceWorker />)// Add styling tests here;'
  })})