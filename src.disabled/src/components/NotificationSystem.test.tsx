import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import NotificationSystem from '../components/NotificationSystem';'
describe('NotificationSystem', () => {test('renders without crashing', () => {render(<NotificationSystem />)expect(screen.getByTestId('notificationsystem')).toBeInTheDocument()})test('displays correct content', () => {render(<NotificationSystem />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<NotificationSystem />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<NotificationSystem />)// Add styling tests here;'
  })})