import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SecurityMonitoringSystem from '../components/SecurityMonitoringSystem';'
describe('SecurityMonitoringSystem', () => {test('renders without crashing', () => {render(<SecurityMonitoringSystem />)expect(screen.getByTestId('securitymonitoringsystem')).toBeInTheDocument()})test('displays correct content', () => {render(<SecurityMonitoringSystem />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SecurityMonitoringSystem />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SecurityMonitoringSystem />)// Add styling tests here;'
  })})